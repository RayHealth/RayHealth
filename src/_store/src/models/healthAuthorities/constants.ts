import {ById} from "../../utils/byIdUtils";

export type HealthAuthorityId = string;
export type HealthAuthorityState = ById<HealthAuthority>;
export interface HealthAuthority {
    id: HealthAuthorityId;
    name: string;
    region: string;
}

// todo: hard coded for now, but eventually should be managed server-side
export const defaultHealthAuthorityState: HealthAuthorityState = {
    "f0f4837c-5b65-4537-a153-894a23eb70ea": {
        id: "f0f4837c-5b65-4537-a153-894a23eb70ea",
        name: "Alberta Health Services",
        region: "Alberta, Canada",
    },
};
