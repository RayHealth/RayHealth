import {NumberRange} from "./genericTypes";

// see : https://www.w3resource.com/javascript-exercises/javascript-date-exercise-3.php
export const getDaysRangeForMonth = (month: number, year: number): NumberRange => [
    1,
    new Date(year, month, 0).getDate(),
];
export const dateIsInRange = (range: NumberRange, day: number): boolean =>
    day >= range[0] && day <= range[1];
