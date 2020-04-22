import {AppSharedEpic} from "../../epics";
import {
    SubmitAnonymizedAssessmentToServer,
    submitAnonymizedAssessmentToServerError,
    completeAssessment,
    CompleteAssessment,
} from "./actions";
import {ActionsObservable, combineEpics} from "redux-observable";
import {ASSESSMENT} from "./constants";
import {catchError, map, mergeMap} from "rxjs/operators";
import {API_ENDPOINT} from "../../services/apiEndpoints";
import {handleErrorAsObservable} from "../../services/errorObservable";

const submitAnonymizedAssessmentEpic: AppSharedEpic<
    SubmitAnonymizedAssessmentToServer,
    CompleteAssessment
> = (action$: ActionsObservable<SubmitAnonymizedAssessmentToServer>, store, {apiFetch}) =>
    action$.ofType(ASSESSMENT.SUBMIT_ANONYMIZED_ASSESSMENT_TO_SERVER_REQUEST).pipe(
        mergeMap((action) =>
            apiFetch(API_ENDPOINT.V1.ASSESSMENTS.NEW).pipe(
                map(({response}) => completeAssessment),
                catchError(
                    handleErrorAsObservable(submitAnonymizedAssessmentToServerError),
                ),
            ),
        ),
    );

const assessmentEpics = combineEpics(submitAnonymizedAssessmentEpic);
export default assessmentEpics;
