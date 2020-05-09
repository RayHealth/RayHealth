import * as React from "react";
import {DefaultText, DefaultView} from "../../../config/styleDefaults";
import Toggle from "../toggle";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {setCurrentUserAcceptTacSuccess} from "@reduxShared/models/currentUser/actions";
import {getCurrentUser} from "@reduxShared/models/currentUser/selectors";

interface WelcomeToRayHealthProps {}
const WelcomeToRayHealth: React.FC<WelcomeToRayHealthProps> = () => {
    const {acceptanceOfTermsAndConditions} = useSelector(getCurrentUser);
    const dispatch = useDispatch();
    const toggleAcceptance = useCallback(() => {
        dispatch(setCurrentUserAcceptTacSuccess(!acceptanceOfTermsAndConditions));
    }, [dispatch, acceptanceOfTermsAndConditions]);
    return (
        <DefaultView>
            <DefaultText>WelcomeToRayHealth</DefaultText>
            <Toggle toggleFunc={toggleAcceptance} value={acceptanceOfTermsAndConditions}>
                I accept terms and conditions
            </Toggle>
        </DefaultView>
    );
};

export default WelcomeToRayHealth;
