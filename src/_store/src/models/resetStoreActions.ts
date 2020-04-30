export enum APP {
    RESET_STORE = "app/RESET_STORE",
}
export interface ResetStore {
    type: APP.RESET_STORE;
}
export const resetStore: ResetStore = {
    type: APP.RESET_STORE,
};
