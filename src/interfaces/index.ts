export interface Temperature {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Data {
  DateTime: Date;
  EpochDateTime: number;
  WeatherIcon:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 33
    | 34
    | 35
    | 36
    | 37
    | 38
    | 39
    | 40
    | 41
    | 42
    | 43
    | 44;
  IconPhrase: string;
  HasPrecipitation: boolean;
  IsDaylight: boolean;
  Temperature: Temperature;
  PrecipitationProbability: number;
  MobileLink: string;
  Link: string;
  PrecipitationType: string;
  PrecipitationIntensity: string;
}
