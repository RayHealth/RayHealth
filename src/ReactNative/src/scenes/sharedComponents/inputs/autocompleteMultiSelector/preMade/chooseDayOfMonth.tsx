import {AMSValue} from "../constants";
import * as React from "react";
import ChooseFromNumberRange from "./chooseFromNumberRange";
import {getDaysRangeForMonth} from "../../../../utils/dateUtils";

interface ChooseDayOfMonthProps {
    keyToMonitor: string;
    month: number;
    year: number;
    day?: number;
    setDay: (newDay?: number) => void;
}

const ChooseDayOfMonth: React.FC<ChooseDayOfMonthProps> = React.memo(
    ({keyToMonitor, day, setDay, month, year}) => {
        const handleChange = React.useCallback(
            (newValues?: AMSValue[]) => {
                if (!newValues || newValues.length < 1 || !newValues[0].value)
                    return setDay(undefined);
                setDay(parseInt(newValues[0].value, 10));
            },
            [setDay],
        );
        const currentValue = day
            ? {value: day.toString(), label: day.toString()}
            : undefined;
        return (
            <ChooseFromNumberRange
                keyToMonitor={keyToMonitor}
                label="Day"
                range={getDaysRangeForMonth(month, year)}
                currentValue={currentValue}
                onChange={handleChange}
            />
        );
    },
);

export default ChooseDayOfMonth;
