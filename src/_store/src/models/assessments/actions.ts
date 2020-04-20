import {ASSESSMENT, AssessmentUuid} from "./constants";
import {generateUUID} from "../../utils/uuid";

export interface AssessmentInitialize {
    type: ASSESSMENT.INITIALIZE;
    feelingGood: boolean;
}
export const initializeAssessment = (feelingGood: boolean): AssessmentInitialize => ({
    type: ASSESSMENT.INITIALIZE,
    feelingGood,
});

export interface RecordTemperature {
    type: ASSESSMENT.RECORD_TEMPERATURE;
    temperatureInCelsius: number;
}
export const recordTemperature = (temperatureInCelsius: number): RecordTemperature => ({
    type: ASSESSMENT.RECORD_TEMPERATURE,
    temperatureInCelsius,
});
