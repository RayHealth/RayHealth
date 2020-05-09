import * as React from "react";

export type AMSPayload = {
    value: string;
    label: string;
    subLabel?: string;
};
export const convertStringToAMSValue = (s: string): AMSPayload => ({
    label: s,
    value: s,
});

export const useHandleASMValueChange = (onChange: (newVal?: string) => void) =>
    React.useCallback(
        (newValues?: AMSPayload[]) => {
            if (!newValues || newValues.length < 1 || !newValues[0].value)
                return onChange(undefined);
            onChange(newValues[0].value);
        },
        [onChange],
    );
