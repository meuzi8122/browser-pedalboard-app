export type Pedal = {
  id: string;
  type: PedalType;
  parameters: PedalParameters;
};

export type PedalType = "delay" | "distortion";

export type PedalParameters = {
  [name: string]: number;
};
