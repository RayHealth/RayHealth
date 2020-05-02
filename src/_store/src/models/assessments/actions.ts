import {ASSESSMENT, AssessmentSecretKey, AssessmentUuid} from "./constants";

export interface AssessmentInitialize {
    type: ASSESSMENT.INITIALIZE;
    uuid: AssessmentUuid;
    feelingGood: boolean;
}
export const initializeAssessment = (
    uuid: AssessmentUuid,
    feelingGood: boolean,
): AssessmentInitialize => ({
    type: ASSESSMENT.INITIALIZE,
    uuid,
    feelingGood,
});

// export interface CancelCurrentAssessment {
//     type: ASSESSMENT.CANCEL_CURRENT;
// }
// export const cancelCurrentAssessment: CancelCurrentAssessment = {
//     type: ASSESSMENT.CANCEL_CURRENT,
// };

export interface RecordTemperature {
    type: ASSESSMENT.RECORD_TEMPERATURE;
    temperatureInCelsius: number;
}
export const recordTemperature = (temperatureInCelsius: number): RecordTemperature => ({
    type: ASSESSMENT.RECORD_TEMPERATURE,
    temperatureInCelsius,
});
export interface CompleteAssessment {
    type: ASSESSMENT.COMPLETE;
}
export const completeAssessment: CompleteAssessment = {
    type: ASSESSMENT.COMPLETE,
};

export interface SyncedWithServerSuccess {
    type: ASSESSMENT.SYNCED_WITH_SERVER_SUCCESS;
    ids: AssessmentUuid[];
}
export const syncedWithServerSuccess = (
    ids: AssessmentUuid[],
): SyncedWithServerSuccess => ({
    type: ASSESSMENT.SYNCED_WITH_SERVER_SUCCESS,
    ids,
});

export interface SaveSevereSymptoms {
    type: ASSESSMENT.SAVE_SEVERE_SYMPTOMS;
    severeDifficultyBreathing?: boolean;
    severeChestPain?: boolean;
    hardTimeWakingUp?: boolean;
    feelingConfused?: boolean;
    lostConsciousness?: boolean;
}
export const saveSevereSymptoms = (
    severeDifficultyBreathing?: boolean,
    severeChestPain?: boolean,
    hardTimeWakingUp?: boolean,
    feelingConfused?: boolean,
    lostConsciousness?: boolean,
): SaveSevereSymptoms => ({
    type: ASSESSMENT.SAVE_SEVERE_SYMPTOMS,
    severeDifficultyBreathing,
    severeChestPain,
    hardTimeWakingUp,
    feelingConfused,
    lostConsciousness,
});
export interface SaveWarningSymptoms {
    type: ASSESSMENT.SAVE_WARNING_SYMPTOMS;
    shortnessOfBreathAtRest?: boolean;
    inabilityToLieDown?: boolean;
    chronicHealthConditionsExasperated?: boolean;
}
export const saveWarningSymptoms = (
    shortnessOfBreathAtRest?: boolean,
    inabilityToLieDown?: boolean,
    chronicHealthConditionsExasperated?: boolean,
): SaveWarningSymptoms => ({
    type: ASSESSMENT.SAVE_WARNING_SYMPTOMS,
    shortnessOfBreathAtRest,
    inabilityToLieDown,
    chronicHealthConditionsExasperated,
});
export interface SaveMildSymptoms {
    type: ASSESSMENT.SAVE_MILD_SYMPTOMS;
    fever?: boolean;
    cough?: boolean;
    shortnessOfBreath?: boolean;
    difficultyBreathing?: boolean;
    soreThroat?: boolean;
    runnyNose?: boolean;
}
export const saveMildSymptoms = (
    fever?: boolean,
    cough?: boolean,
    shortnessOfBreath?: boolean,
    difficultyBreathing?: boolean,
    soreThroat?: boolean,
    runnyNose?: boolean,
): SaveMildSymptoms => ({
    type: ASSESSMENT.SAVE_MILD_SYMPTOMS,
    fever,
    cough,
    shortnessOfBreath,
    difficultyBreathing,
    soreThroat,
    runnyNose,
});

export interface SaveExposureRisk {
    type: ASSESSMENT.SAVE_EXPOSURE_RISK;
    outOfCountryWithinLast14Days?: boolean;
    contactWithPositiveCovid19Case?: boolean;
}
export const saveExposureRisk = (
    outOfCountryWithinLast14Days?: boolean,
    contactWithPositiveCovid19Case?: boolean,
): SaveExposureRisk => ({
    type: ASSESSMENT.SAVE_EXPOSURE_RISK,
    outOfCountryWithinLast14Days,
    contactWithPositiveCovid19Case,
});
