import { stringLitArray } from 'src/utils';

export const cycleSymbols = stringLitArray(['D', 'W', 'M', 'Y']);
export type CycleSymbol = (typeof cycleSymbols)[number];

export interface Cycle {
  symbol: CycleSymbol;
  frequency: string;
  unit: string;
  days: number;
}

export const cycles: Cycle[] = [
  {
    symbol: 'D',
    frequency: 'daily',
    unit: 'day',
    days: 1
  },
  {
    symbol: 'W',
    frequency: 'weekly',
    unit: 'week',
    days: 7
  },
  {
    symbol: 'M',
    frequency: 'monthly',
    unit: 'month',
    days: 30
  },
  {
    symbol: 'Y',
    frequency: 'yearly',
    unit: 'year',
    days: 365
  }
];