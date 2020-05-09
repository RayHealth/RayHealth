import {useHandleASMValueChange} from "../utils";
import * as React from "react";
import ChooseFromNumberRange from "./chooseFromNumberRange";
import {getDaysRangeForMonth} from "../../../../utils/dateUtils";

interface ChooseDayOfMonthProps {
    keyToMonitor: string;
    month: number;
    year: number;
    day?: number;
    setDay: (newDay?: string) => void;
}

const ChooseDayOfMonth: React.FC<ChooseDayOfMonthProps> = React.memo(
    ({keyToMonitor, day, setDay, month, year}) => {
        const handleChange = useHandleASMValueChange(setDay);
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
