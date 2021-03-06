import {
    AssessmentInitialize,
    CompleteAssessment,
    RecordTemperature,
    SaveExposureRisk,
    SaveMildSymptoms,
    SaveSevereSymptoms,
    SaveWarningSymptoms,
    SyncedWithServerSuccess,
} from "./actions";
import {ById} from "../../utils/byIdUtils";
import {ResetStore} from "../resetStoreActions";
import {AggregatedPrivateInformation} from "../currentUser/constants";

export enum ASSESSMENT {
    INITIALIZE = "assessment/INITIALIZE",
    RECORD_TEMPERATURE = "assessment/RECORD_TEMPERATURE",
    COMPLETE = "assessment/COMPLETE",
    SYNCED_WITH_SERVER_SUCCESS = "assessment/SYNCED_WITH_SERVER_SUCCESS",
    SAVE_SEVERE_SYMPTOMS = "assessment/SAVE_SEVERE_SYMPTOMS",
    SAVE_WARNING_SYMPTOMS = "assessment/SAVE_WARNING_SYMPTOMS",
    SAVE_MILD_SYMPTOMS = "assessment/SAVE_MILD_SYMPTOMS",
    SAVE_EXPOSURE_RISK = "assessment/SAVE_EXPOSURE_RISK",
}

export type AssessmentUuid = string;
export type AssessmentSecretKey = string;
export type EpochDateNumber = number;

export interface Assessment {
    id: AssessmentUuid;
    createdAt: EpochDateNumber;
    syncedToServer?: EpochDateNumber;

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
    // mental health questions too?
}
type AssessmentServerTransform = Omit<Assessment, "secretKey" | "syncedToServer">;
export interface AssessmentServer
    extends AssessmentServerTransform,
        AggregatedPrivateInformation {
    other?: boolean;
}

export type AssessmentState = {
    currentAssessmentUuid?: AssessmentUuid;
    assessments: ById<Assessment>;
};
export const defaultAssessmentsState = {
    currentAssessmentUuid: undefined,
    assessments: {},
};

export interface AssessmentSaveServerResponse {
    savedSuccessfully: AssessmentUuid[];
    failed: AssessmentUuid[];
    failedMessage: Array<{id: AssessmentUuid; message: string}>;
}

export type AssessmentActions =
    | ResetStore
    | AssessmentInitialize
    | CompleteAssessment
    | RecordTemperature
    | SaveSevereSymptoms
    | SaveWarningSymptoms
    | SaveMildSymptoms
    | SaveExposureRisk
    | SyncedWithServerSuccess;
