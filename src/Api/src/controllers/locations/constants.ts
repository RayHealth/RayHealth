import Joi from "@hapi/joi";
import {AnySchema, ValidationResult} from "joi";
import {LocationDocument} from "../../models/locations/locations";

const locationSchema: AnySchema = Joi.object({
    lat: Joi.number().min(0).max(90).required(),
    lng: Joi.number().min(-180).max(180).required(),
});

export const validateCourse = (
    course: LocationDocument,
): ValidationResult<LocationDocument> => locationSchema.validate(course);
