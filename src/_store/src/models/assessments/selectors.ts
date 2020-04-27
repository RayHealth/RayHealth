import {createSelector} from "reselect";
import {IAppSharedState} from "../../reducers";
import {Assessment} from "./constants";
import {ById} from "../../utils/byIdUtils";

const getAllAssessments = (state: IAppSharedState): ById<Assessment> =>
    state.assessments.assessments;

export const getAllAssessmentsByDate = createSelector(
    getAllAssessments,
    (assessments): Assessment[] =>
        (Object.values(assessments) as Assessment[]).sort((a, b) =>
            a && b ? a.createdAt - b.createdAt : 0,
        ),
);
export const getCurrentAssessmentUuid = (state: IAppSharedState): string | undefined =>
    state.assessments.currentAssessmentUuid;
export const getCurrentAssessment = (state: IAppSharedState): Assessment | undefined => {
    const uuid = getCurrentAssessmentUuid(state);
    return uuid ? getAllAssessments(state)[uuid] : undefined;
};
export const getAllUnSyncedAssessments = (state: IAppSharedState): Assessment[] =>
    (Object.values(getAllAssessments(state)) as Assessment[]).filter(
        (assessment) => assessment && assessment.completed && !assessment.sharedToServer,
    );
