import {
    mdiHomeBrand,
    mdiHomeCCC,
    mdiMenuBrand,
    mdiMenuCCC,
} from "../../services/staticImages";
import {ImageSourcePropType} from "react-native";
import {STYLE} from "../../config/styleDefaults";

export interface RoutePath {
    path: string;
    label: string;
    tabBarVisible?: false;
    icon?: ImageSourcePropType;
    iconIsFocused?: ImageSourcePropType;
    style?: {
        headerBg?: string;
        headerColor?: string;
        bodyBg?: string;
        footerBg?: string;
    };
}
type AppStackRoutesObj = {[k: string]: RoutePath | AppStackRoutesObj};
export const APP_STACK_ROUTES = {
    HOME: {
        INDEX: {
            path: "home/INDEX",
            label: "Home",
            icon: mdiHomeCCC,
            iconIsFocused: mdiHomeBrand,
        } as RoutePath,
    },
    USER: {
        MENU: {
            path: "user/MENU",
            label: "Menu",
            icon: mdiMenuCCC,
            iconIsFocused: mdiMenuBrand,
            style: {
                headerBg: STYLE.COLORS.BRAND,
                bodyBg: STYLE.COLORS.BRAND,
            },
        } as RoutePath,
        PAST_ASSESSMENTS_LIST: {
            path: "user/PAST_ASSESSMENTS_LIST",
            label: "Past assessments",
            tabBarVisible: false,
            style: {
                headerBg: STYLE.COLORS.BRAND,
                headerColor: STYLE.COLORS.WHITE,
                bodyBg: STYLE.COLORS.BRAND,
            },
        } as RoutePath,
        SET_HEALTH_AUTHORITY: {
            path: "user/SET_HEALTH_AUTHORITY",
            label: "Set health authority",
            tabBarVisible: false,
            style: {
                headerBg: STYLE.COLORS.BRAND,
                headerColor: STYLE.COLORS.WHITE,
                footerBg: STYLE.SETTINGS.BACKGROUND_BODY_COLOR,
            },
        } as RoutePath,
        SET_SHARE_SETTINGS: {
            path: "user/SET_SHARE_SETTINGS",
            label: "Update share settings",
            tabBarVisible: false,
            style: {
                headerBg: STYLE.COLORS.BRAND,
                headerColor: STYLE.COLORS.WHITE,
                footerBg: STYLE.SETTINGS.BACKGROUND_BODY_COLOR,
            },
        } as RoutePath,
    },
    ASSESSMENTS: {
        NEW: {path: "assessments/NEW", label: "New assessment"},
    },
};

const recursivelyFlatten = (obj: AppStackRoutesObj) =>
    Object.values(obj).map((v) =>
        v.path ? v : recursivelyFlatten(v as AppStackRoutesObj),
    );
const flattenAppStackRoutes: RoutePath[] = recursivelyFlatten(
    APP_STACK_ROUTES as AppStackRoutesObj,
).flat();

export const getRouteOptionsFromPath = (path: string): RoutePath =>
    flattenAppStackRoutes.find((route) => route.path === path) as RoutePath;
