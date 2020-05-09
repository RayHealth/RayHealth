import * as React from "react";
import {useHandleASMValueChange} from "../utils";
import ChooseFromNumberRange from "./chooseFromNumberRange";

interface ChooseYearProps {
    keyToMonitor: string;
    year?: number;
    setYear: (newYear?: string) => void;
}
const range: [number, number] = [1900, 2019]; // we may need to agnosticize this in the future
const ChooseYear: React.FC<ChooseYearProps> = React.memo(
    ({keyToMonitor, year, setYear}) => {
        const handleChange = useHandleASMValueChange(setYear);
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
