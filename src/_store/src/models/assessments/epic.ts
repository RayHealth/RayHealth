import {AppSharedEpic} from "../../epics";
import {
    CompleteAssessment,
    syncedWithServerSuccess,
    SyncedWithServerSuccess,
} from "./actions";
import {ActionsObservable, combineEpics} from "redux-observable";
import {ASSESSMENT, AssessmentSaveServerResponse} from "./constants";
import {catchError, filter, map, mergeMap} from "rxjs/operators";
import {API_ENDPOINT} from "../../services/apiEndpoints";
import {handleErrorAsObservable} from "../../services/errorObservable";
import rnConfig from "../../../../ReactNative/src/config";
import {mergeAllUnSyncedAssessmentsAndData} from "./selectors";

const anonymouslySyncAllUnSyncedAssessmentEpic: AppSharedEpic<
    CompleteAssessment,
    SyncedWithServerSuccess
> = (action$: ActionsObservable<CompleteAssessment>, store$, {apiFetch}) =>
    action$.ofType(ASSESSMENT.COMPLETE).pipe(
        filter(() => mergeAllUnSyncedAssessmentsAndData(store$.value).length > 0),
        mergeMap((action) =>
            apiFetch<AssessmentSaveServerResponse>(API_ENDPOINT.V1.ASSESSMENTS.NEW, {
                assessments: mergeAllUnSyncedAssessmentsAndData(store$.value),
            }).pipe(
                map(({response}) => {
                    if (rnConfig.isDevMode && response.failed.length)
                        console.error("Some saves failed", response);
                    return syncedWithServerSuccess(response.savedSuccessfully);
                }),
                catchError(handleErrorAsObservable()),
            ),
        ),
    );

const assessmentEpics = combineEpics(anonymouslySyncAllUnSyncedAssessmentEpic);
export default assessmentEpics;
