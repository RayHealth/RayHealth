import qs from "qs";
import {ById} from "./byIdUtils";

export const getQueryParamsFromString = (path: string): ById<string> =>
    qs.parse(path, {ignoreQueryPrefix: true});
