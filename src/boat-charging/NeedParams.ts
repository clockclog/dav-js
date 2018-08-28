import BaseNeedParams from '../NeedParams';
import { IArea, IDimensions } from '../common-types';
import { EnergySources, Amenities } from './enums';

/**
 * @class The Class boat-charging/NeedParams represent the parameters of boat-charging need.
 */
export default class NeedParams extends BaseNeedParams {
    private static _protocol = 'boat_charging';
    private static _type = 'need';
    public startAt: number;
    public area: IArea;
    public dimensions: IDimensions;
    public batteryCapacity: number;
    public currentBatteryCharge: number;
    public energySource: EnergySources;
    public amenities: Amenities[];

    public static getMessageType(): string {
        return `${NeedParams._protocol}:${NeedParams._type}`;
    }

    public static deserialize(json: any): NeedParams {
        const needParams = super.deserialize(json);
        Object.assign(needParams, {
            startAt: json.startAt,
            area: json.area,
            dimensions: json.dimensions,
            batteryCapacity: json.batteryCapacity,
            currentBatteryCharge: json.currentBatteryCharge,
            energySource: json.energySource,
            amenities: json.amenities,
        });
        return new NeedParams(needParams);
    }

    constructor(values: Partial<NeedParams>) {
        if (!values.area) {
            throw new Error('area is a required field');
        }
        super(values, NeedParams._protocol, NeedParams._type);
        Object.assign(this, values);
    }

    public serialize() {
        const formatedParams = super.serialize();
        Object.assign(formatedParams, {
            startAt: this.startAt,
            area: this.area,
            dimensions: this.dimensions,
            batteryCapacity: this.batteryCapacity,
            currentBatteryCharge: this.currentBatteryCharge,
            energySource: this.energySource,
            amenities: this.amenities,
        });
        return formatedParams;
    }

}
