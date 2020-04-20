export type LocationId = string;
export interface ILocationServer {
    id: LocationId;
    lat: string;
    lng: string;
    name: string;
}
