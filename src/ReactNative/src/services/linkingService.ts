import {Linking} from "react-native";
import {URLString} from "@reduxShared/utils/types";

type URLHandler = (url: URLString) => void;

// We add types to the default Linking functions so we can
// ensure that only URLs are passed to methods that expect them
interface ILinks {
    addEventListener(handler: URLHandler): void;
    removeEventListener(handler: URLHandler): void;
    openURL(url: URLString): Promise<void>;
    getInitialURL(): Promise<URLString | null>;
}

export const Links: ILinks = {
    addEventListener: (handler: URLHandler): void => {
        Linking.addEventListener("url", ({url}: {url: URLString}) => handler(url));
    },
    removeEventListener: (handler: URLHandler): void => {
        Linking.removeEventListener("url", ({url}: {url: URLString}) => handler(url));
    },
    openURL: (url: URLString): Promise<void> =>
        Linking.openURL(url).catch(() =>
            Linking.openURL("https://www.google.com/search?q=" + encodeURIComponent(url)),
        ),
    getInitialURL: () => Linking.getInitialURL(),
};
