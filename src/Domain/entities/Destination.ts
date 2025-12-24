import { Continent } from '../enums/Continent';
import { DestinationType } from '../enums/DestinationType';
import { ClimatePreference } from '../enums/ClimatePreferece';
import { CostLevel } from '../enums/CostLevel';
import { TravelStyle } from '../enums/TravelStyle';

export class Destination {
  public readonly id: string;
  public readonly name: string;
  public readonly country: string;
  public readonly continent: Continent;
  public readonly climate: ClimatePreference;
  public readonly types: DestinationType[];
  public readonly styles: TravelStyle[];
  public readonly costLevel: CostLevel;

  constructor(params: {
    id: string;
    name: string;
    country: string;
    continent: Continent;
    climate: ClimatePreference;
    types: DestinationType[];
    styles: TravelStyle[];
    costLevel: CostLevel;
  }) {
    if (!params.name) {
      throw new Error('Destination name is required');
    }

    if (!params.country) {
      throw new Error('Country is required');
    }

    if (!params.types || params.types.length === 0) {
      throw new Error('Destination must have at least one type');
    }

    if (!params.styles || params.styles.length === 0) {
      throw new Error('Destination must have at least one travel style');
    }

    this.id = params.id;
    this.name = params.name;
    this.country = params.country;
    this.continent = params.continent;
    this.climate = params.climate;
    this.types = params.types;
    this.styles = params.styles;
    this.costLevel = params.costLevel;
  }
}
