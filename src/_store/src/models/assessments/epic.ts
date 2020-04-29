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
import {getAllUnSyncedAssessments} from "./selectors";
import rnConfig from "../../../../ReactNative/src/config";

const anonymouslySyncAllUnSyncedAssessmentEpic: AppSharedEpic<
    CompleteAssessment,
    SyncedWithServerSuccess
> = (action$: ActionsObservable<CompleteAssessment>, store$, {apiFetch}) =>
    action$.ofType(ASSESSMENT.COMPLETE).pipe(
        // PII and aggragate data needs to be defined....
        filter(() => {
            console.log("build payload according to share information here");
            console.log("only share assessments if permission is given");
            return getAllUnSyncedAssessments(store$.value).length > 0;
        }),
        mergeMap((action) =>
            apiFetch<AssessmentSaveServerResponse>(API_ENDPOINT.V1.ASSESSMENTS.NEW, {
                assessments: getAllUnSyncedAssessments(store$.value),
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
