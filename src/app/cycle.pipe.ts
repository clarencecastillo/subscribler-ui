import { Pipe, PipeTransform } from '@angular/core';
import { CycleSymbol, cycles, cycleSymbols } from 'src/models/cycle';
import { stringLitArray } from 'src/utils';

const cyclePipeNotations = stringLitArray(['frequency', 'unit', 'days']);
type CyclePipeNotation = (typeof cyclePipeNotations)[number];

@Pipe({
  name: 'cycle'
})
export class CyclePipe implements PipeTransform {

  getIndex(symbol: CycleSymbol): number {
    return cycles.findIndex(cycle => cycle.symbol === symbol);
  }

  transform(symbol: CycleSymbol, notation: CyclePipeNotation): string | number {
    if (!symbol || !cycleSymbols.includes(symbol)) {
      return null;
    }
    return cycles[this.getIndex(symbol)][notation];
  }

}
