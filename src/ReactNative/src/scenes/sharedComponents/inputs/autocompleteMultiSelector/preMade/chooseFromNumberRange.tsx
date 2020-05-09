import * as React from "react";
import AutocompleteMultiSelectorButton from "../autocompleteMultiSelectorButton";
import {AMSPayload} from "../utils";
import {NumberRange} from "../../../../utils/genericTypes";

interface ChooseYearProps {
    keyToMonitor: string;
    label: string;
    range: NumberRange;
    currentValue?: AMSPayload;
    onChange: (newValues?: AMSPayload[]) => void;
}
const ChooseFromNumberRange: React.FC<ChooseYearProps> = React.memo(
    ({keyToMonitor, label, range, currentValue, onChange}) => {
        const staticData = React.useMemo((): AMSPayload[] => {
            const [low, high] = range.sort();
            let values: AMSPayload[] = [];
            for (let i = low; i <= high; i++) {
                const value = i.toString();
                values.push({value, label: value});
            }
            return values;
        }, [range]);
        const handleChange = React.useCallback(
            (newValues: AMSPayload[]) => {
                if (newValues.length < 1 || !newValues[0].value)
                    return onChange(undefined);
                const {value} = newValues[0];
                onChange([{value, label: value}]);
            },
            [onChange],
        );
        return (
            <AutocompleteMultiSelectorButton
                keyToMonitor={keyToMonitor}
                onChange={handleChange}
                label={label}
                currentValue={
                    currentValue
                        ? staticData.filter((m) => m.value === currentValue.value)
                        : undefined
                }
                staticData={staticData}
            />
        );
    },
);

export default ChooseFromNumberRange;
