import {IAppAction} from "../epics";

export enum NO_OP {
    TYPE = "NO_OP",
}

export interface INoOp {
    type: NO_OP.TYPE;
}

export const NoOp: INoOp = {type: NO_OP.TYPE};

export const returnNoOp = (): IAppAction => NoOp;
