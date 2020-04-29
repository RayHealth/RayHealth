import * as React from "react";
import rnConfig from "../../../../config";
import {DefaultView} from "../../../../config/styleDefaults";
import {BrandFullWidthButton} from "../../../sharedComponents/buttons";
import {useDispatch} from "react-redux";
import {resetStore} from "@reduxShared/models/resetStoreActions";

const DevModeResetStore: React.FC = () => {
    if (!rnConfig.isDevMode) return null;
    return <ResetStore />;
};

const ResetStore: React.FC = () => {
    const dispatch = useDispatch();
    const resetStoreFunc = React.useCallback(() => {
        dispatch(resetStore);
    }, [dispatch]);
    return (
        <DefaultView>
            <BrandFullWidthButton onPress={resetStoreFunc}>
                Reset store to default
            </BrandFullWidthButton>
        </DefaultView>
    );
};

export default DevModeResetStore;
