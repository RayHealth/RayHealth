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

const submitAnonymizedAssessmentEpic: AppSharedEpic<
    CompleteAssessment,
    SharedToServerSuccess
> = (action$: ActionsObservable<CompleteAssessment>, store$, {apiFetch}) =>
    action$.ofType(ASSESSMENT.COMPLETE).pipe(
        filter(
            () => {
                console.log("EPIC");
                return true;
            } /*store$.value*/,
        ),
        mergeMap((action) =>
            apiFetch(API_ENDPOINT.V1.ASSESSMENTS.NEW).pipe(
                map(({response}) => sharedToServerSuccess),
                catchError(handleErrorAsObservable()),
            ),
        ),
    );

const assessmentEpics = combineEpics(submitAnonymizedAssessmentEpic);
export default assessmentEpics;
