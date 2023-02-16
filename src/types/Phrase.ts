import { Measure, MeasureSize } from './Measure';

export class Phrase {
  private _size: MeasureSize;
  private _measures: Measure[];

  constructor(size?: MeasureSize, measures?: Measure[]) {
    this._size = size ?? 4;
    const realSize: number = this._size + 1;
    if (measures) {
      if (measures.length > realSize) {
        measures = measures.slice(0, realSize);
      } else if (measures.length < realSize) {
        measures = measures.concat(
          Array.from({ length: realSize - measures.length }, () => new Measure())
        );
      }
    }
    this._measures = measures ?? Array.from({ length: this._size + 1 }, () => new Measure());
  }

  get size(): MeasureSize {
    return this._size;
  }
  get measures(): Measure[] {
    return this._measures;
  }
  set size(size: MeasureSize) {
    this._size = size;
  }
  set measures(measures: Measure[]) {
    this._measures = measures;
  }
}
