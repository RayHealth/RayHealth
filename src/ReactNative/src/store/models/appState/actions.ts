import {SCREEN_CHANGE} from "./constants";

export interface ITriggerScreenChangeAction {
    type: typeof SCREEN_CHANGE;
    currentRouteName: string;
}
export const triggerScreenChange = (
    currentRouteName: string,
): ITriggerScreenChangeAction => ({
    type: SCREEN_CHANGE,
    currentRouteName,
});
