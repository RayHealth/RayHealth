import * as React from "react";
import AutocompleteMultiSelectorButton from "./autocompleteMultiSelectorButton";
import {AMSValue} from "./constants";

const staticMonths: AMSValue[] = [
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
    month?: number;
    setMonth: (newMonth?: number) => void;
}
const ChooseMonth: React.FC<ChooseMonthProps> = React.memo(({month, setMonth}) => {
    const handleChange = React.useCallback(
        (newValues: AMSValue[]) => {
            if (newValues.length < 1 || !newValues[0].value) setMonth(undefined);
            setMonth(parseInt(newValues[0].value, 10));
        },
        [setMonth],
    );
    return (
        <AutocompleteMultiSelectorButton
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
});

export default ChooseMonth;
