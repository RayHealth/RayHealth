import {LocationId} from "../locations/constants";
import {RandomizedUserCheckinUuid} from "../currentUser/constants";

export interface CheckIn {
    id: RandomizedUserCheckinUuid;
    timeStart: Date; //UTC
    timeEnd: Date; //UTC
    locationId: LocationId;
    locationVerifiedByUser: boolean;
}
