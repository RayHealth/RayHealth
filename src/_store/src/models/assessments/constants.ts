import {
    AssessmentInitialize,
    CancelCurrentAssessment,
    CompleteAssessment,
    RecordTemperature,
    SaveExposureRisk,
    SaveMildSymptoms,
    SaveSevereSymptoms,
    SaveWarningSymptoms,
    SharedToServerSuccess,
} from "./actions";
import {ById} from "../../utils/byIdUtils";
import {ResetStore} from "../resetStoreActions";

export enum ASSESSMENT {
    INITIALIZE = "assessment/INITIALIZE",
    CANCEL_CURRENT = "assessment/CANCEL_CURRENT",
    RECORD_TEMPERATURE = "assessment/RECORD_TEMPERATURE",
    COMPLETE = "assessment/COMPLETE",
    SHARED_TO_SERVER_SUCCESS = "assessment/SHARED_TO_SERVER_SUCCESS",
    SAVE_SEVERE_SYMPTOMS = "assessment/SAVE_SEVERE_SYMPTOMS",
    SAVE_WARNING_SYMPTOMS = "assessment/SAVE_WARNING_SYMPTOMS",
    SAVE_MILD_SYMPTOMS = "assessment/SAVE_MILD_SYMPTOMS",
    SAVE_EXPOSURE_RISK = "assessment/SAVE_EXPOSURE_RISK",
}

export type AssessmentUuid = string;

export interface Assessment {
    id: AssessmentUuid;
    createdAt: number;
    sharedToServer: boolean;
    completed?: true;

    feelingGood: boolean;
    currentBodyTemperatureCelsius?: number;
    severeDifficultyBreathing?: boolean; //911
    severeChestPain?: boolean; //911
    hardTimeWakingUp?: boolean; //911
    feelingConfused?: boolean; //911
    lostConsciousness?: boolean; //911
    shortnessOfBreathAtRest?: boolean; //811
    inabilityToLieDown?: boolean; //811
    chronicHealthConditionsExasperated?: boolean; //811
    fever?: boolean; // self-isolate
    cough?: boolean; // self-isolate
    shortnessOfBreath?: boolean; // self-isolate
    difficultyBreathing?: boolean; // self-isolate
    soreThroat?: boolean; // self-isolate
    runnyNose?: boolean; // self-isolate
    outOfCountryWithinLast14Days?: boolean; // self-isolate
    contactWithPositiveCovid19Case?: boolean; // self-isolate
}
export type AssessmentState = {
    currentAssessmentUuid?: AssessmentUuid;
    assessments: ById<Assessment>;
};
export const defaultAssessmentsState = {
    currentAssessmentUuid: undefined,
    assessments: {},
};

export type AssessmentActions =
    | ResetStore
    | AssessmentInitialize
    | CancelCurrentAssessment
    | CompleteAssessment
    | RecordTemperature
    | SaveSevereSymptoms
    | SaveWarningSymptoms
    | SaveMildSymptoms
    | SaveExposureRisk
    | SharedToServerSuccess;
