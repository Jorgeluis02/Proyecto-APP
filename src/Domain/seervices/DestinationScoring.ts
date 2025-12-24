import { UserProfile } from '../entities/UserProfile';
import { Destination } from '../entities/Destination';
import { BudgetLevel } from '../enums/BudgetLevel';
import { CostLevel } from '../enums/CostLevel';
import { ClimatePreference } from '../enums/ClimatePreference';

export class DestinationScoring {
  static calculate(user: UserProfile, destination: Destination): number {
    let score = 0;

    // 1️⃣ Budget vs Cost
    if (
      (user.preferences.budget === BudgetLevel.LOW &&
        destination.costLevel === CostLevel.LOW) ||
      (user.preferences.budget === BudgetLevel.MEDIUM &&
        destination.costLevel !== CostLevel.HIGH) ||
      user.preferences.budget === BudgetLevel.HIGH
    ) {
      score += 30;
    }

    // 2️⃣ Climate match (CORREGIDO)
    if (
      user.preferences.climate === ClimatePreference.ANY ||
      user.preferences.climate === destination.climate
    ) {
      score += 20;
    }

    // 3️⃣ Travel style match
    const styleMatches = user.preferences.styles.filter((style) =>
      destination.styles.includes(style)
    );

    score += styleMatches.length * 15;

    return score;
  }
}
