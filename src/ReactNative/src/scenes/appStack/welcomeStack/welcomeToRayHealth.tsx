import * as React from "react";
import {DefaultH2Text} from "../../../config/styleDefaults";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {setCurrentUserAcceptTacSuccess} from "@reduxShared/models/currentUser/actions";
import {BrandFullWidthButton} from "../../sharedComponents/buttons";
import {currentTermsAndConditionsVersion} from "@reduxShared/models/currentUser/termsAndConditions";
import {BaseContainerView} from "../styles";
import AcceptAppTermsAndConditions from "./AcceptAppTermsAndConditions";
import NavigationService from "../../../services/navigationService";
import {APP_STACK_ROUTES} from "../../router/constants";

interface WelcomeToRayHealthProps {}
const WelcomeToRayHealth: React.FC<WelcomeToRayHealthProps> = () => {
    const [acceptToggle, setAcceptToggle] = React.useState<boolean>(false);
    const dispatch = useDispatch();
    const acceptTermsAndConditions = useCallback(() => {
        dispatch(setCurrentUserAcceptTacSuccess(currentTermsAndConditionsVersion));
        NavigationService.navigate(APP_STACK_ROUTES.HOME.INDEX.path);
    }, [dispatch]);
    return (
        <BaseContainerView>
            <DefaultH2Text>Welcome to Ray Health</DefaultH2Text>
            <AcceptAppTermsAndConditions
                acceptToggle={acceptToggle}
                setAcceptToggle={setAcceptToggle}
            />
            {acceptToggle && (
                <BrandFullWidthButton onPress={acceptTermsAndConditions}>
                    Continue
                </BrandFullWidthButton>
            )}
        </BaseContainerView>
    );
};

export default WelcomeToRayHealth;
