import {AssessmentInitialize, RecordTemperature} from "./actions";
import {ById} from "../../utils/byIdUtils";

export enum ASSESSMENT {
    INITIALIZE = "assessment/INITIALIZE",
    RECORD_TEMPERATURE = "assessment/RECORD_TEMPERATURE",
    COMPLETE = "assessment/COMPLETE",
    SUBMIT_ANONYMIZED_ASSESSMENT_TO_SERVER_REQUEST = "assessment/SUBMIT_ANONYMIZED_ASSESSMENT_TO_SERVER_REQUEST",
    SUBMIT_ANONYMIZED_ASSESSMENT_TO_SERVER_ERROR = "assessment/SUBMIT_ANONYMIZED_ASSESSMENT_TO_SERVER_ERROR",
}

export type AssessmentUuid = string;

export interface Assessment {
    id: AssessmentUuid;
    createdAt: number;
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

export type AssessmentActions = AssessmentInitialize | RecordTemperature;
