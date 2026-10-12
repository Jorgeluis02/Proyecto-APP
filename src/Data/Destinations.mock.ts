import { Destination } from '../Domain/entities/Destination';
import { Continent } from '../Domain/enums/Continent';
import { ClimatePreference } from '../Domain/enums/ClimatePreference';
import { CostLevel } from '../Domain/enums/CostLevel';
import { TravelStyle } from '../Domain/enums/TravelStyle';
import { DestinationType } from '../Domain/enums/DestinationType';

export const MOCK_DESTINATIONS: Destination[] = [
  new Destination({
    id: '1',
    name: 'Mexico City',
    country: 'Mexico',
    continent: Continent.AMERICA,
    climate: ClimatePreference.TEMPERATE,
    types: [DestinationType.CULTURAL, DestinationType.CITY],
    styles: [TravelStyle.CULTURE, TravelStyle.ADVENTURE],
    costLevel: CostLevel.MEDIUM,
  }),
  new Destination({
    id: '2',
    name: 'Cancun',
    country: 'Mexico',
    continent: Continent.AMERICA,
    climate: ClimatePreference.TROPICAL,
    types: [DestinationType.BEACH, DestinationType.RELAXATION],
    styles: [TravelStyle.RELAX, TravelStyle.LUXURY],
    costLevel: CostLevel.HIGH,
  }),
];
