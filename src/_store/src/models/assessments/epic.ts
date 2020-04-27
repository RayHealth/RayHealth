import {AppSharedEpic} from "../../epics";
import {
    CompleteAssessment,
    sharedToServerSuccess,
    SharedToServerSuccess,
} from "./actions";
import {ActionsObservable, combineEpics} from "redux-observable";
import {ASSESSMENT} from "./constants";
import {catchError, filter, map, mergeMap} from "rxjs/operators";
import {API_ENDPOINT} from "../../services/apiEndpoints";
import {handleErrorAsObservable} from "../../services/errorObservable";
import {getAllUnSyncedAssessments} from "./selectors";
import {getCurrentUsersPermissionToShareAggregateData} from "../currentUser/selectors";

const anonymouslySyncAllUnSyncedAssessmentEpic: AppSharedEpic<
    CompleteAssessment,
    SharedToServerSuccess
> = (action$: ActionsObservable<CompleteAssessment>, store$, {apiFetch}) =>
    action$.ofType(ASSESSMENT.COMPLETE).pipe(
        // PII and aggragate data needs to be defined....
        filter(
            () =>
                getCurrentUsersPermissionToShareAggregateData(store$.value) &&
                getAllUnSyncedAssessments(store$.value).length > 0,
        ),
        mergeMap((action) =>
            apiFetch(API_ENDPOINT.V1.ASSESSMENTS.NEW, {
                assessments: getAllUnSyncedAssessments(store$.value),
            }).pipe(
                map(({response}) => sharedToServerSuccess),
                catchError(handleErrorAsObservable()),
            ),
        ),
    );

const assessmentEpics = combineEpics(anonymouslySyncAllUnSyncedAssessmentEpic);
export default assessmentEpics;
