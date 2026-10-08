import { ClimatePreference } from '../enums/ClimatePreference';
import { CostLevel } from '../enums/CostLevel';
import { TravelStyle } from '../enums/TravelStyle';

export class TravelPreferences {
  public readonly climate: ClimatePreference;
  public readonly costLevel: CostLevel;
  public readonly styles: TravelStyle[];

  constructor(params: {
    climate: ClimatePreference;
    costLevel: CostLevel;
    styles: TravelStyle[];
  }) {
    this.climate = params.climate;
    this.costLevel = params.costLevel;
    this.styles = params.styles;
  }
}
