import * as React from "react";
import {DefaultText, DefaultView} from "../../../../../config/styleDefaults";
import {useSelector} from "react-redux";
import {getAllHealthAuthoritiesAlphabetically} from "@reduxShared/models/healthAuthorities/selectors";

interface SelectHealthAuthorityProps {}
const SetHealthAuthority: React.FC<SelectHealthAuthorityProps> = () => {
    const healthAuthorities = useSelector(getAllHealthAuthoritiesAlphabetically);
    return (
        <DefaultView>
            {healthAuthorities.map((ha) => (
                <DefaultText key={ha.id}>{ha.name}</DefaultText>
            ))}
        </DefaultView>
    );
};

export default SetHealthAuthority;
