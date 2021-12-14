interface UserDataForCalculation {
    length: number;
    uniqueCharacters: number;
    duration: number;
    errors: number;
  }

export default function calculateHighscore({length, uniqueCharacters, duration, errors}: UserDataForCalculation): number {

    return Math.round((length * uniqueCharacters) / ( errors));
}
