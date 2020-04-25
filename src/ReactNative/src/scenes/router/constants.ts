import {
    mdiHome222,
    mdiHomeBrand,
    mdiMenu222,
    mdiMenuBrand,
} from "../../services/staticImages";
import {ImageSourcePropType} from "react-native";

interface RoutePath {
    path: string;
    label: string;
    tabBarVisible?: false;
    icon?: ImageSourcePropType;
    iconIsFocused?: ImageSourcePropType;
}
type AppStackRoutesObj = {[k: string]: RoutePath | AppStackRoutesObj};
export const APP_STACK_ROUTES = {
    HOME: {
        INDEX: {
            path: "home/INDEX",
            label: "Home",
            icon: mdiHome222,
            iconIsFocused: mdiHomeBrand,
        },
    },
    USER: {
        MENU: {
            path: "user/MENU",
            label: "Menu",
            icon: mdiMenu222,
            iconIsFocused: mdiMenuBrand,
        },
        PAST_ASSESSMENTS_LIST: {
            path: "user/PAST_ASSESSMENTS_LIST",
            label: "Past assessments",
            tabBarVisible: false,
        },
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
