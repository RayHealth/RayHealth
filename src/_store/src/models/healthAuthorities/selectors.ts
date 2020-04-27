import {createSelector} from "reselect";
import {IAppSharedState} from "../../reducers";
import {HealthAuthority, HealthAuthorityState} from "./constants";

const sortAlpha = (key) => (a: any, b: any) => {
    if (!a || !b) return 0;
    const comparisonA = a[key].toUpperCase();
    const comparisonB = b[key].toUpperCase();
    if (comparisonA < comparisonB) return -1;
    if (comparisonA > comparisonB) return 1;
    return 0;
};

const getAllHealthAuthorities = (state: IAppSharedState): HealthAuthorityState =>
    state.healthAuthorities;
export const getAllHealthAuthoritiesAlphabetically = createSelector(
    getAllHealthAuthorities,
    (healthAuthorities): HealthAuthority[] =>
        (Object.values(healthAuthorities) as HealthAuthority[]).sort(sortAlpha("name")),
);
