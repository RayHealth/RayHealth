import * as React from "react";
import AutocompleteMultiSelectorButton from "../autocompleteMultiSelectorButton";
import {AMSPayload, useHandleASMValueChange} from "../utils";

const staticMonths: AMSPayload[] = [
    {value: "1", label: "Jan"},
    {value: "2", label: "Feb"},
    {value: "3", label: "Mar"},
    {value: "4", label: "Apr"},
    {value: "5", label: "May"},
    {value: "6", label: "Jun"},
    {value: "7", label: "Jul"},
    {value: "8", label: "Aug"},
    {value: "9", label: "Sep"},
    {value: "10", label: "Oct"},
    {value: "11", label: "Nov"},
    {value: "12", label: "Dec"},
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
