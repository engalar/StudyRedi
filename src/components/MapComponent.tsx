import { Quantity, createIdentifier } from "@wendellhu/redi";
import { useDependency } from "@wendellhu/redi/react-bindings";

export interface ISatellite {
    name: string;
    altitude: number;
}
export const ISatellite = createIdentifier<ISatellite>("Satellite");

export function MapComponent() {
    const satellites = useDependency(ISatellite, Quantity.MANY);
    return <div>Map by {satellites.map(s => s.name).join(", ")}</div>;
}