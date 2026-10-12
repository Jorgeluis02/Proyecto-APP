import { UserProfile } from '../Domain/entities/UserProfile';
import { TravelPreferences } from '../Domain/entities/TravelPreferences';
import { ClimatePreference } from '../Domain/enums/ClimatePreference';
import { CostLevel } from '../Domain/enums/CostLevel';
import { TravelStyle } from '../Domain/enums/TravelStyle';
import { DestinationScoring } from '../Domain/services/DestinationScoring';
import { MOCK_DESTINATIONS } from './Destinations.mock'; // Ajusta la ruta si guardaste el mock en otra carpeta

// 1. Crear las preferencias de un usuario simulado
const userPreferences = new TravelPreferences({
  climate: ClimatePreference.TEMPERATE,
  costLevel: CostLevel.MEDIUM,
  styles: [TravelStyle.CULTURE, TravelStyle.ADVENTURE],
});

// 2. Crear el perfil del usuario
const currentUser = new UserProfile({
  id: 'user-001',
  name: 'Carlos Pérez',
  preferences: userPreferences,
});

console.log(`--- Buscando recomendaciones para: ${currentUser.name} ---`);

// 3. Obtener el ranking de destinos utilizando nuestro servicio de puntuación
const rankedDestinations = DestinationScoring.rankDestinations(
  MOCK_DESTINATIONS,
  currentUser
);

// 4. Mostrar los resultados en la consola ordenados por compatibilidad
rankedDestinations.forEach((item, index) => {
  console.log(
    `${index + 1}. ${item.destination.name} (${item.destination.country}) - Compatibilidad: ${item.score}%`
  );
});
