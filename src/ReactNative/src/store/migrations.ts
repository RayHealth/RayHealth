import {DEFAULT_NAME} from "@reduxShared/models/currentUser/constants";

interface RnReduxPersistMigration {
    [m: number]: (state: any) => any;
    /*
     * This can't really be strongly typed because we know longer know the past versions of the store.
     * We have to trust they were done correctly originally?!?
     */
}
export const migrations: RnReduxPersistMigration = {
    0: (state) => ({_persist: {...state._persist}}),
    1: (state) => ({
        ...state,
        currentUser: {
            ...state.currentUser,
            name:
                `${state.currentUser.givenName || ""} ${
                    state.currentUser.familyName || ""
                }`.trim() || DEFAULT_NAME,
        },
    }),
};
export const currentMigrationVersion = 1;
