import styled from "styled-components/native";
import {adjustBrightness} from "./styleUtil";

const BRAND = "#00b6b9";

const COLORS = {
    BLACK: "#000",
    GREY1: "#111",
    GREY2: "#222",
    GREY3: "#333",
    GREY4: "#444",
    GREY5: "#555",
    GREY6: "#666",
    GREY7: "#777",
    GREY8: "#888",
    GREY9: "#999",
    GREYA: "#aaa",
    GREYB: "#bbb",
    GREYC: "#ccc",
    GREYD: "#ddd",
    GREYE: "#eee",
    WHITE: "#fff",
    BRAND1: adjustBrightness(BRAND, -90),
    BRAND2: adjustBrightness(BRAND, -80),
    BRAND3: adjustBrightness(BRAND, -70),
    BRAND4: adjustBrightness(BRAND, -60),
    BRAND5: adjustBrightness(BRAND, -50),
    BRAND6: adjustBrightness(BRAND, -40),
    BRAND7: adjustBrightness(BRAND, -30),
    BRAND8: adjustBrightness(BRAND, -20),
    BRAND9: adjustBrightness(BRAND, -10),
    BRAND: BRAND,
    BRANDa: adjustBrightness(BRAND, 10),
    BRANDb: adjustBrightness(BRAND, 20),
    BRANDc: adjustBrightness(BRAND, 30),
    BRANDd: adjustBrightness(BRAND, 40),
    BRANDe: adjustBrightness(BRAND, 50),
    BRANDf: adjustBrightness(BRAND, 60),
    BRANDg: adjustBrightness(BRAND, 70),
    BRANDh: adjustBrightness(BRAND, 80),
    BRANDi: adjustBrightness(BRAND, 90),
    SECONDARY1: "#001213",
    SECONDARY2: "#002525",
    SECONDARY3: "#003738",
    SECONDARY4: "#004a4a",
    SECONDARY5: "#005d5d",
    SECONDARY6: "#006f70",
    SECONDARY7: "#008282",
    SECONDARY8: "#009495",
    SECONDARY9: "#00a7a7",
    SECONDARY: "#00b9ba",
    SECONDARYa: "#1ac0c1",
    SECONDARYb: "#33c7c8",
    SECONDARYc: "#4dcecf",
    SECONDARYd: "#66d5d6",
    SECONDARYe: "#80dcdd",
    SECONDARYf: "#99e3e3",
    SECONDARYg: "#b3eaea",
    SECONDARYh: "#ccf1f1",
    SECONDARYi: "#e6f8f8",
    BRAND_COMPLIMENTARY1: "#091804",
    BRAND_COMPLIMENTARY2: "#112f08",
    BRAND_COMPLIMENTARY3: "#1a470c",
    BRAND_COMPLIMENTARY4: "#235e10",
    BRAND_COMPLIMENTARY5: "#2c7615",
    BRAND_COMPLIMENTARY6: "#348e19",
    BRAND_COMPLIMENTARY7: "#3da51d",
    BRAND_COMPLIMENTARY8: "#46bd21",
    BRAND_COMPLIMENTARY9: "#4ed425",
    BRAND_COMPLIMENTARY: "#57EC29",
    BRAND_COMPLIMENTARYa: "#68ee3e",
    BRAND_COMPLIMENTARYb: "#79f054",
    BRAND_COMPLIMENTARYc: "#89f269",
    BRAND_COMPLIMENTARYd: "#9af47f",
    BRAND_COMPLIMENTARYe: "#abf694",
    BRAND_COMPLIMENTARYf: "#bcf7a9",
    BRAND_COMPLIMENTARYg: "#cdf9bf",
    BRAND_COMPLIMENTARYh: "#ddfbd4",
    BRAND_COMPLIMENTARYi: "#eefdea",
    EMERGENCY_RED: "#FF0000",
    WARNING_YELLOW: "#EED202",
    TRANSPARENT: "rgba(0,0,0,0)",
};
export const STYLE = {
    SETTINGS: {
        BACKGROUND_HEADER_COLOR: COLORS.GREYE,
        BACKGROUND_BODY_COLOR: COLORS.GREYE,
        BACKGROUND_FOOTER_COLOR: COLORS.WHITE,
    },
    COLORS: {
        ...COLORS,
    },
    BORDER_RADIUS: {
        BUTTON: 15,
        VIEW: 15,
        INPUT: 3,
    },
    FONT_SIZES: {
        H1: 42,
        H2: 32,
        DEFAULT: 14,
        BUTTON_TEXT: 14,
        INPUT: 14,
        LINE_HEIGHT: 1.4,
    },
};

export const DefaultView = styled.View``;

export const DefaultH1Text = styled.Text`
    font-size: ${STYLE.FONT_SIZES.H1}px;
    line-height: ${STYLE.FONT_SIZES.H1 * STYLE.FONT_SIZES.LINE_HEIGHT * 0.8}px;
    font-weight: bold;
`;
export const DefaultH2Text = styled.Text`
    font-size: ${STYLE.FONT_SIZES.H2}px;
    line-height: ${STYLE.FONT_SIZES.H2 * STYLE.FONT_SIZES.LINE_HEIGHT * 0.8}px;
    font-weight: bold;
`;
export const DefaultText = styled.Text`
    font-size: ${STYLE.FONT_SIZES.DEFAULT}px;
    line-height: ${STYLE.FONT_SIZES.DEFAULT * STYLE.FONT_SIZES.LINE_HEIGHT}px;
`;

export const CalloutSectionView = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    border-left-width: 3px;
    border-left-color: ${STYLE.COLORS.BRAND};
    padding-left: 10px;
`;
export const CalloutSectionText = styled(DefaultText)`
    color: ${STYLE.COLORS.BRAND3};
    font-weight: bold;
`;
