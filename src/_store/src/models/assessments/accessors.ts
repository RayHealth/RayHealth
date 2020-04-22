import {IAppSharedState} from "../../reducers";
import {Assessment} from "./constants";

export const getCurrentAssessmentUuid = (state: IAppSharedState): string | undefined =>
    state.assessments.currentAssessmentUuid;
export const getCurrentAssessment = (state: IAppSharedState): Assessment | undefined => {
    const uuid = getCurrentAssessmentUuid(state);
    return uuid ? state.assessments.assessments[uuid] : undefined;
};
export const getAllUnSyncedAssessments = (state: IAppSharedState): Assessment[] =>
    (Object.values(state.assessments.assessments) as Assessment[]).filter(
        (assessment) =>
            assessment &&
            assessment.completed &&
            assessment.permissionToShare &&
            !assessment.sharedToServer,
    );
