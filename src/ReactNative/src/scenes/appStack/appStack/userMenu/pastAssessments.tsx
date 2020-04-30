import * as React from "react";
import {useSelector} from "react-redux";
import {getAllAssessmentsByDate} from "@reduxShared/models/assessments/selectors";
import {Text, View} from "react-native";

interface PastAssessmentsProps {}
const PastAssessments: React.FC<PastAssessmentsProps> = () => {
    const assessments = useSelector(getAllAssessmentsByDate);
    return (
        <>
            {assessments.map(
                (assessment) =>
                    assessment && (
                        <View key={assessment.id}>
                            <Text>{JSON.stringify(assessment)}</Text>
                        </View>
                    ),
            )}
        </>
    );
};

export default PastAssessments;
