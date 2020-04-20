import {Response} from "express";
import {Document, DocumentQuery} from "mongoose";

import serverConfig from "../config";

export const send500Err = (res: Response, err: any) =>
    res.status(500).send(serverConfig.isDevMode ? err : {error: "Server error"});

type output<T> = T | undefined;
type successOutput<T> = [output<T>, undefined];
type errorOutput = Promise<[undefined, any]>;

export const handleMongooseAsync = <T extends Document>(
    promise: DocumentQuery<T | null, T, {}>,
) =>
    promise
        .then((data: T | null): successOutput<T> => [data || undefined, undefined])
        .catch((error): errorOutput => Promise.resolve([undefined, error]));
export const handleMongooseCollectionAsync = <T extends Document>(
    promise: DocumentQuery<T[] | null, T, {}>,
) =>
    promise
        .then((data: T[] | null): successOutput<T[]> => [data || undefined, undefined])
        .catch((error): errorOutput => Promise.resolve([undefined, error]));
export const handleAsync = <T>(promise: Promise<T>): Promise<[T | undefined, any]> =>
    promise
        .then((data: T | null): [T | undefined, undefined] => [
            data || undefined,
            undefined,
        ])
        .catch((error): Promise<[undefined, any]> => Promise.resolve([undefined, error]));
