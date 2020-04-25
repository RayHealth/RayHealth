import {SCREEN_CHANGE} from "./constants";

export interface TriggerScreenChangeAction {
    type: typeof SCREEN_CHANGE;
    currentRouteName: string;
}
export const triggerScreenChange = (
    currentRouteName: string,
): TriggerScreenChangeAction => ({
    type: SCREEN_CHANGE,
    currentRouteName,
});
