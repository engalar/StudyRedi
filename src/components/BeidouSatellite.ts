import { ISatellite } from "./MapComponent";

export default class BeidouSatellite implements ISatellite {
  name: string = "Beidou Satellite";
  altitude: number = 1000;
}
