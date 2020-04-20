import fetch from "isomorphic-fetch";
import FormData from "form-data";
import sharedConfig from "../sharedConfig";
import {GetAuthorization} from "../epics";
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
    //todo, make await/async
    new Promise((resolve, reject) => {
        if (response.status === 204) {
            resolve(undefined);
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

const apiFetchPromise = <T>(
    getAuthorization: GetAuthorization,
    apiConstant: IEndpointObject,
    attributes: {[key: string]: string | number} = {},
): Promise<IApiFetchResponse<T>> =>
    new Promise(async (resolve, reject) => {
        let url = `${sharedConfig.apiDomain}${apiConstant.path}`;
        const form_headers = new Headers();
        const form_body = new FormData();

        if (apiConstant.auth !== false) {
            const bearer = await getAuthorization();
            form_headers.append("Authorization", `Bearer ${bearer}`);
        }
        if (attributes !== {} || Object.keys(attributes).length > 0) {
            if (apiConstant.method === API_METHOD.GET) {
                url += "?";
                Object.keys(attributes).forEach((key) => {
                    const value = attributes[key];
                    if (value) {
                        if (Array.isArray(value)) {
                            value.forEach((item) => {
                                if (item) {
                                    url += `${key}[]=${item}&`;
                                }
                            });
                        } else {
                            url += `${key}=${value}&`;
                        }
                    }
                });
            } else {
                Object.keys(attributes).forEach((key) => {
                    const value = attributes[key];
                    form_body.append(key, value ? value : "");
                });
            }
        }
        let fetch_params;
        if (apiConstant.method !== API_METHOD.GET) {
            fetch_params = {
                method: apiConstant.method,
                headers: form_headers,
                body: form_body,
            };
        } else {
            fetch_params = {
                method: apiConstant.method,
                headers: form_headers,
            };
        }
        return fetch(url, fetch_params)
            .then((response) => handleResponse(response))
            .then(
                (data) => resolve(data),
                (err: IFetchErrorResponse) => reject({...err, apiConstant}),
            );
    });

export default apiFetchPromise;
