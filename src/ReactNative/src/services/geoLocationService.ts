import RNLocation from "react-native-location";
import {Location, RequestPermissionOptions} from "react-native-location/dist/types";

const convertLocationToCoordinates = (location: Location | null): Coordinates | null =>
    location
        ? {
              accuracy: location.accuracy,
              altitude: location.altitude,
              altitudeAccuracy: location.altitudeAccuracy,
              heading: null,
              latitude: location.latitude,
              longitude: location.longitude,
              speed: location.speed,
          }
        : null;

class GeoLocationService {
    static permissions: RequestPermissionOptions = {
        ios: "whenInUse",
        android: {
            detail: "fine",
        },
    };
    private havePermission?: boolean;
    public getCurrentCoordinates = async (): Promise<Coordinates | null> => {
        if (await this.hasPermission()) {
            return await RNLocation.getLatestLocation().then(
                convertLocationToCoordinates,
            );
        } else {
            return null;
        }
    };
    private configure = () => {
        RNLocation.configure({
            distanceFilter: 1000, // Meters
            desiredAccuracy: {
                ios: "best",
                android: "balancedPowerAccuracy",
            },
            // Android only
            androidProvider: "auto",
            interval: 100, // Milliseconds
            fastestInterval: 200, // Milliseconds
            maxWaitTime: 1200, // Milliseconds
            // iOS Only
            activityType: "other",
            allowsBackgroundLocationUpdates: false,
            headingFilter: 1, // Degrees
            headingOrientation: "portrait",
            pausesLocationUpdatesAutomatically: true,
            showsBackgroundLocationIndicator: false,
        });
    };
    private hasPermission = async (): Promise<boolean> => {
        if (typeof this.havePermission === "undefined") {
            let permission = await RNLocation.checkPermission(
                GeoLocationService.permissions,
            );
            if (!permission) {
                this.configure();
                permission = await RNLocation.requestPermission(
                    GeoLocationService.permissions,
                );
            }
            this.havePermission = permission;
        }
        return this.havePermission;
    };
}

const instance = new GeoLocationService();

const getCurrentCoordinates = async (): Promise<Coordinates | null> =>
    instance.getCurrentCoordinates();

export default {
    getCurrentCoordinates,
};
