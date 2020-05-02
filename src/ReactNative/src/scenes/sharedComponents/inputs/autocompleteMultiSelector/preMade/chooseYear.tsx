import * as React from "react";
import {AMSValue} from "../constants";
import ChooseFromNumberRange from "./chooseFromNumberRange";

interface ChooseYearProps {
    keyToMonitor: string;
    year?: number;
    setYear: (newYear?: number) => void;
}
const range: [number, number] = [1900, 2019]; // we may need to agnosticize this in the future
const ChooseYear: React.FC<ChooseYearProps> = React.memo(
    ({keyToMonitor, year, setYear}) => {
        const handleChange = React.useCallback(
            (newValues?: AMSValue[]) => {
                if (!newValues || newValues.length < 1 || !newValues[0].value)
                    return setYear(undefined);
                setYear(parseInt(newValues[0].value, 10));
            },
            [setYear],
        );
        const currentValue = year
            ? {value: year.toString(), label: year.toString()}
            : undefined;
        return (
            <ChooseFromNumberRange
                keyToMonitor={keyToMonitor}
                label="Year"
                range={range}
                currentValue={currentValue}
                onChange={handleChange}
            />
        );
    },
);

export default ChooseYear;
