import { ISatellite } from "./MapComponent";

export default class GPSSatellite implements ISatellite {
  name: string = "GPS Satellite";
  altitude: number = 99;
}
