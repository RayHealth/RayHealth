import {useEffect, useState} from "react";
import UUIDGenerator from "react-native-uuid-generator";
import {AssessmentUuid} from "@reduxShared/models/assessments/constants";

export const useUuid = (): AssessmentUuid => {
    const [uuid, setUuid] = useState("");
    useEffect(() => {
        (async () => UUIDGenerator.getRandomUUID().then((id) => setUuid(id)))();
    }, []);
    return uuid;
};
