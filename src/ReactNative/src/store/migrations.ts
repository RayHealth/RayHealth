interface RnReduxPersistMigration {
    [m: number]: (state: any) => any;
    /*
     * This can't really be strongly typed because we know longer know the past versions of the store.
     * We have to trust they were done correctly originally?!?
     */
}
export const migrations: RnReduxPersistMigration = {
    0: (state) => ({_persist: {...state._persist}}),
};
export const currentMigrationVersion = 0;
