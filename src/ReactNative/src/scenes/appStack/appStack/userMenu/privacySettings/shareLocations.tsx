import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import Toggle from "../../../toggle";
import {
    CalloutSectionText,
    CalloutSectionView,
    DefaultH2Text,
    DefaultText,
} from "../../../../../config/styleDefaults";
import {BaseContainerView} from "../../../styles";
import {patchCurrentUserPrivacySettings} from "@reduxShared/models/currentUser/actions";
import {getPrivacySettings} from "@reduxShared/models/currentUser/selectors";

const PrivacyLocations: React.FC = () => {
    const privacySettings = useSelector(getPrivacySettings);
    const dispatch = useDispatch();
    const toggleShareTripLocations = useCallback(() => {
        dispatch(
            patchCurrentUserPrivacySettings({
                shareTripsLocations: !privacySettings.shareTripsLocations,
                shareTripsDetailed: privacySettings.shareTripsLocations
                    ? false
                    : privacySettings.shareTripsDetailed,
            }),
        );
    }, [dispatch, privacySettings]);
    const toggleShareTripExact = useCallback(() => {
        dispatch(
            patchCurrentUserPrivacySettings({
                shareTripsLocations: !privacySettings.shareTripsDetailed
                    ? true
                    : privacySettings.shareTripsLocations,
                shareTripsDetailed: !privacySettings.shareTripsDetailed,
            }),
        );
    }, [dispatch, privacySettings]);
    return (
        <BaseContainerView>
            <DefaultH2Text>Share your trip location data</DefaultH2Text>
            <DefaultText>
                In order to be notified when you have had possible exposure to an
                individual who has been diagnosed with COVID-19, you need to share trip
                data.
            </DefaultText>
            <CalloutSectionView>
                <CalloutSectionText>
                    You need to share your trip locations in order for Ray Health to alert
                    you if you have any possible exposures to COVID-19
                </CalloutSectionText>
            </CalloutSectionView>
            <Toggle
                value={privacySettings.shareTripsLocations}
                toggleFunc={toggleShareTripLocations}>
                Share my trip locations
            </Toggle>
            {privacySettings.shareTripsLocations && (
                <>
                    <CalloutSectionView>
                        <CalloutSectionText>
                            Sharing the details of your trips will allow better alerts for
                            your safety, but it could also allow your identity to be
                            discovered
                        </CalloutSectionText>
                    </CalloutSectionView>
                    <Toggle
                        value={privacySettings.shareTripsDetailed}
                        toggleFunc={toggleShareTripExact}>
                        Share full details of my trips
                    </Toggle>
                </>
            )}
        </BaseContainerView>
    );
};

export default PrivacyLocations;
