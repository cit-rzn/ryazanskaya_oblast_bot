import { TChipsTrackVariant } from './types.ts';

export const modeByVariant: Record<TChipsTrackVariant, 'secondary' | 'tertiary'> = {
  primary: 'secondary',
  secondary: 'tertiary',
};
