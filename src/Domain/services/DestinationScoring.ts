import { Destination } from '../entities/Destination';
import { UserProfile } from '../entities/UserProfile';

export class DestinationScoring {
  /**
   * Calcula una puntuación de compatibilidad (porcentaje o puntos)
   * entre un destino y el perfil de un usuario.
   */
  public static calculateScore(
    destination: Destination,
    userProfile: UserProfile
  ): number {
    let score = 0;
    const weights = {
      climate: 30, // 30% de peso si el clima coincide
      costLevel: 25, // 25% de peso si el nivel de costo coincide
      styles: 45, // 45% de peso si comparte estilos de viaje
    };

    // 1. Evaluar Clima
    if (destination.climate === userProfile.preferences.climate) {
      score += weights.climate;
    }

    // 2. Evaluar Nivel de Costo / Presupuesto
    if (destination.costLevel === userProfile.preferences.costLevel) {
      score += weights.costLevel;
    }

    // 3. Evaluar Estilos de Viaje (coincidencias en los arrays)
    const matchingStyles = destination.styles.filter((style) =>
      userProfile.preferences.styles.includes(style)
    );

    if (destination.styles.length > 0) {
      const styleMatchRatio = matchingStyles.length / destination.styles.length;
      score += weights.styles * styleMatchRatio;
    }

    // Retorna la puntuación final redondeada
    return Math.round(score);
  }

  /**
   * Ordena una lista de destinos de mayor a menor compatibilidad para el usuario.
   */
  public static rankDestinations(
    destinations: Destination[],
    userProfile: UserProfile
  ): { destination: Destination; score: number }[] {
    const scoredDestinations = destinations.map((destination) => ({
      destination,
      score: this.calculateScore(destination, userProfile),
    }));

    // Ordenar de mayor a menor puntaje
    return scoredDestinations.sort((a, b) => b.score - a.score);
  }
}
