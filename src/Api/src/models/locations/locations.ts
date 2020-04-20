import {Document, model, Schema} from "mongoose";
import {ILocationServer, LocationId} from "@reduxShared/models/locations/constants";
import {CheckIn} from "@reduxShared/models/checkIns/constants";

const pointSchema = new Schema({
    type: {
        type: String,
        enum: ["Point"],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});

export interface LocationDocument extends Document {
    id: LocationId;
    location: {
        coordinates: [number, number];
    };
    name: string;
    checkIns: Array<CheckIn>;
}

export const locationSchema = new Schema({
    name: {type: String, required: true},
    location: {
        type: pointSchema,
        required: true,
    },
});
locationSchema.set("toJSON", {
    transform: (doc, ret, opt): ILocationServer => ({
        id: doc._id,
        name: doc.name,
        lat: doc.location.coordinates[0],
        lng: doc.location.coordinates[1],
    }),
});
export const locationToJson = (location) => location.toJSON();
const Locations = model<LocationDocument>("Locations", locationSchema);

export default Locations;
