export enum STATUS {
    NOT_LOADED = "not loaded",
    LOADING = "loading",
    FAILED = "failed",
    SUCCEEDED = "succeeded",
    COMMUNICATING = "communicating",
}

export type Server<T> =
    | IServerNotLoaded<T>
    | IServerLoading<T>
    | IServerFailed<T>
    | IServerSucceeded<T>
    | IServerCommunicating<T>;

export interface IServerNotLoaded<T> {
    kind: STATUS.NOT_LOADED;
}

export interface IServerLoading<T> {
    kind: STATUS.LOADING;
}

export interface IServerFailed<T> {
    kind: STATUS.FAILED;
    payload?: T;
    // validation?: Validation<T>;
}

export interface IServerSucceeded<T> {
    kind: STATUS.SUCCEEDED;
    payload: T;
}

export interface IServerCommunicating<T> {
    kind: STATUS.COMMUNICATING;
    payload: T;
}

export const notLoaded: IServerNotLoaded<any> = {kind: STATUS.NOT_LOADED};

export const loading: IServerLoading<any> = {kind: STATUS.LOADING};

export const succeeded = <T>(payload: T): IServerSucceeded<T> => ({
    kind: STATUS.SUCCEEDED,
    payload,
});

export const communicating = <T>(payload: T): IServerCommunicating<T> => ({
    kind: STATUS.COMMUNICATING,
    payload,
});

export const failed: IServerFailed<any> = {
    kind: STATUS.FAILED,
    payload: undefined,
    // validation: undefined
};

const isNotLoaded = <T>(s: Server<T>): s is IServerNotLoaded<T> =>
    s.kind === STATUS.NOT_LOADED;

const isLoading = <T>(s: Server<T>): s is IServerLoading<T> => s.kind === STATUS.LOADING;

export const isSucceeded = <T>(s: Server<T>): s is IServerSucceeded<T> =>
    s.kind === STATUS.SUCCEEDED;

const isCommunicating = <T>(s: Server<T>): s is IServerCommunicating<T> =>
    s.kind === STATUS.COMMUNICATING;

const isFailed = <T>(s: Server<T>): s is IServerFailed<T> => s.kind === STATUS.FAILED;

type ArrivedStatus = STATUS.SUCCEEDED | STATUS.COMMUNICATING;

type ServerArrived<T> = IServerSucceeded<T> | IServerCommunicating<T>;
const hasArrived = <T>(s?: Server<T>): s is ServerArrived<T> =>
    s ? isArrivedStatus(s.kind) : false;

const isArrivedStatus = (status?: STATUS): status is ArrivedStatus =>
    status === STATUS.SUCCEEDED || status === STATUS.COMMUNICATING;

type InFlightStatus = STATUS.LOADING | STATUS.COMMUNICATING;

type ServerInFlight<T> = IServerLoading<T> | IServerCommunicating<T>;
const isInFlight = <T>(s: Server<T>): s is ServerInFlight<T> =>
    s.kind === STATUS.LOADING || s.kind === STATUS.COMMUNICATING;

const isInFlightStatus = (status?: STATUS): status is InFlightStatus =>
    status === STATUS.LOADING || status === STATUS.COMMUNICATING;
