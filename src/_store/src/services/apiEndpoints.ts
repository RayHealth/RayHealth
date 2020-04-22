export enum API_TYPE {
    POST = "post",
}

export interface IEndpointObject {
    method: string;
    path: string;
    auth?: boolean;
}

export const API_ENDPOINT = {
    V1: {
        ASSESSMENTS: {
            NEW: {
                method: API_TYPE.POST,
                path: "/v1/assessments",
                auth: false,
            },
        },
    },
};
