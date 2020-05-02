import * as React from "react";
import {
    CalloutSectionText,
    CalloutSectionView,
    DefaultH2Text,
    DefaultText,
} from "../../../../../config/styleDefaults";
import TextInput from "../../../../../formComponents/textInput/textInput";
import {BaseContainerView} from "../../../styles";
import {getCurrentUser} from "@reduxShared/models/currentUser/selectors";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {setCurrentUserNameSuccess} from "@reduxShared/models/currentUser/actions";

interface ChangeNameProps {}
const ChangeName: React.FC<ChangeNameProps> = () => {
    const {name} = useSelector(getCurrentUser);
    const dispatch = useDispatch();
    const setName = useCallback((n) => dispatch(setCurrentUserNameSuccess(n)), [
        dispatch,
    ]);
    const onBlur = useCallback(() => dispatch(setCurrentUserNameSuccess(name.trim())), [
        dispatch,
        name,
    ]);
    return (
        <BaseContainerView>
            <DefaultH2Text>Your name</DefaultH2Text>
            <DefaultText>
                This is used in the app to personalize your experience. It is not sent
                with any data ever sent to the server
            </DefaultText>
            <TextInput
                placeholder="Your name"
                value={name}
                onBlur={onBlur}
                textContentType="givenName"
                onChangeText={setName}
                clearButtonMode="always"
            />
            <CalloutSectionView>
                <CalloutSectionText>
                    If an assessment ever triggers you to contact your local health
                    authority you may be presented with the option to share all of the app
                    data at that time. Your name WILL be shared when, and if, you grant
                    permission at that time.
                </CalloutSectionText>
            </CalloutSectionView>
        </BaseContainerView>
    );
};

export default ChangeName;
