import * as React from "react";
import AutocompleteMultiSelectorButton from "../autocompleteMultiSelectorButton";
import {AMSPayload, useHandleASMValueChange} from "../utils";

const staticMonths: AMSPayload[] = [
    {value: "1", label: "January"},
    {value: "2", label: "February"},
    {value: "3", label: "March"},
    {value: "4", label: "April"},
    {value: "5", label: "May"},
    {value: "6", label: "June"},
    {value: "7", label: "July"},
    {value: "8", label: "August"},
    {value: "9", label: "September"},
    {value: "10", label: "October"},
    {value: "11", label: "November"},
    {value: "12", label: "December"},
];
interface ChooseMonthProps {
    keyToMonitor: string;
    month?: number;
    setMonth: (newMonth?: string) => void;
}
const ChooseMonth: React.FC<ChooseMonthProps> = React.memo(
    ({keyToMonitor, month, setMonth}) => {
        const handleChange = useHandleASMValueChange(setMonth);
        return (
            <AutocompleteMultiSelectorButton
                keyToMonitor={keyToMonitor}
                onChange={handleChange}
                label="Month"
                currentValue={
                    month
                        ? staticMonths.filter((m) => m.value === month.toString())
                        : undefined
                }
                staticData={staticMonths}
            />
        );
    },
);

export default ChooseMonth;
