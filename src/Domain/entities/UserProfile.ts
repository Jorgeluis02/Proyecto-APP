import { TravelPreferences } from './TravelPreferences';

export class UserProfile {
  public readonly id: string;
  public readonly name: string;
  public readonly preferences: TravelPreferences;

  constructor(params: {
    id: string;
    name: string;
    preferences: TravelPreferences;
  }) {
    if (!params.name) {
      throw new Error('User name is required');
    }

    this.id = params.id;
    this.name = params.name;
    this.preferences = params.preferences;
  }
}
