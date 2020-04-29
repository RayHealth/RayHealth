import fetch from "isomorphic-fetch";
import sharedConfig from "../sharedConfig";
import {IEndpointObject} from "./apiEndpoints";

export enum API_METHOD {
    DELETE = "DELETE",
    GET = "GET",
    PATCH = "PATCH",
    PUT = "PUT",
    POST = "POST",
}

export interface IFetchErrorResponse {
    status: number;
    error: string;
    response: any;
    apiConstant: IEndpointObject;
}

interface IResponse {
    status: number;
    json: () => Promise<{[key: string]: any}>;
}
const handleResponse = (response: IResponse) =>
    new Promise((resolve, reject) => {
        if (response.status === 204) {
            resolve({
                status: response.status,
                response: undefined,
            });
        } else {
            Promise.resolve(response.json()).then(
                (data) => {
                    if (response.status === 500) {
                        reject({
                            status: response.status,
                            error: "There was a server error",
                            response: data,
                        });
                    } else if (response.status === 404) {
                        reject({
                            status: response.status,
                            error: "Page not found",
                            response: data,
                        });
                    } else if (response.status === 401) {
                        reject({
                            status: response.status,
                            error: "Unauthorized",
                            response: data,
                        });
                    } else if (response.status >= 400) {
                        reject({
                            status: response.status,
                            error: "Bad response from server",
                            response: data,
                        });
                    } else {
                        resolve({
                            status: response.status,
                            response: data,
                        });
                    }
                },
                () => {
                    console.log(response.status);
                    console.log("uncaught error in fetch");
                    reject({
                        status: response.status,
                        error: "Bad response from server",
                    });
                },
            );
        }
    });

export interface IApiFetchResponse<T> {
    status: string;
    response: T;
    error?: string;
}

export type ApiFetchAttributes = {[key: string]: string | number | Array<object>};
const apiFetchPromise = <T>(
    apiConstant: IEndpointObject,
    attributes: ApiFetchAttributes = {},
): Promise<IApiFetchResponse<T>> =>
    new Promise(async (resolve, reject) => {
        let url = `${sharedConfig.apiDomain}${apiConstant.path}`;
        let fetchParams;
        if (apiConstant.method !== API_METHOD.GET) {
            fetchParams = {
                method: apiConstant.method,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(attributes),
            };
        } else {
            fetchParams = {
                method: apiConstant.method,
            };
        }
        if (sharedConfig.isDevMode) console.log(`API: ${url}`, fetchParams);
        return fetch(url, fetchParams)
            .then((response) => handleResponse(response))
            .then(
                (data) => resolve(data),
                (err: IFetchErrorResponse) => reject({...err, apiConstant}),
            );
    });

export default apiFetchPromise;
