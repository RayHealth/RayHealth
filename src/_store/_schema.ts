type LocationId = string;
type RandomizedUserCheckinUuid = string;

interface ServerSchema {
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
        healthAuthority?: "";
        givenName?: string;
        familyName?: string;
        birthMonth?: number;
        birthDay?: number;
        birthYear?: number;
        permissionToSharePersonalData: boolean;
        permissionToShareAnonymizedData: boolean;
        acceptanceOfTermsAndConditions: boolean;
    };
    assessments: Assessment[];
    trips: Trip[];
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
