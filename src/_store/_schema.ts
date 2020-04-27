import {ById} from "./src/utils/byIdUtils";

/*
This is a single overview of the data modelling for the entire
application; for planning and execution.
This file should not be imported anywhere else and is for reference
only
 */

type LocationId = string;
type RandomizedUserCheckinUuid = string;

interface ServerSchema {
    assessments: Array<Assessment>;
    locations: Array<Location>;
}
interface Location {
    id: LocationId;
    location: {
        type: {
            type: String; // Don't do `{ location: { type: String } }`
            enum: ["Point"]; // 'location.type' must be 'Point'
            required: true;
        };
        coordinates: {
            type: [Number];
            required: true;
        };
    };
    name: string;
    checkIns: Array<CheckIn>;
}
interface CheckIn {
    id: RandomizedUserCheckinUuid;
    timeStart: Date; //UTC
    timeEnd: Date; //UTC
    locationId: LocationId;
    locationVerifiedByUser: boolean;
}

interface DeviceSchema {
    user: {
        healthAuthority?: HealthAuthorityId;
        givenName?: string;
        familyName?: string;
        birthMonth?: number;
        birthDay?: number;
        birthYear?: number;
        gender?: "male" | "female" | string;
        // other useful metrics? income, ethnicity, etc
        permissionToSharePersonalData: boolean;
        permissionToShareAnonymizedData: boolean;
        acceptanceOfTermsAndConditions: boolean;
    };
    assessments: {
        currentAssessmentId: string;
        assessment: ById<Assessment>;
    };
    trips: ById<Trip>;
    healthAuthority: ById<HealthAuthority>;
}
type HealthAuthorityId = string;
interface HealthAuthority {
    id: HealthAuthorityId;
    name: string;
}
interface Assessment {
    date: Date;
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
interface Trip {
    gpsPings: GpsPing[];
    checkIns: CheckIn[];
}
interface GpsPing {
    lat: number;
    lng: number;
    accuracy: number;
    dateTime: Date; //UTC
}
