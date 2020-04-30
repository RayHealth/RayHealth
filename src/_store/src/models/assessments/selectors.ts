import {createSelector} from "reselect";
import {IAppSharedState} from "../../reducers";
import {Assessment} from "./constants";
import {ById} from "../../utils/byIdUtils";
import {getAggregateUserData} from "../currentUser/selectors";

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

const getAllAssessmentsNotSyncedToServerYet = (state: IAppSharedState): Assessment[] =>
    (Object.values(getAllAssessments(state)) as Assessment[]).filter(
        (assessment) => assessment && !assessment.syncedToServer,
    );

export const mergeAllUnSyncedAssessmentsAndData = createSelector(
    getAllAssessmentsNotSyncedToServerYet,
    getAggregateUserData,
    (unsyncedAssessments, aggregatePrivateInformation) => {
        return unsyncedAssessments.map((assessment) => ({
            ...assessment,
            ...aggregatePrivateInformation,
        }));
    },
);
