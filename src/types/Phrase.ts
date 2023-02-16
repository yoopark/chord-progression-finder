import { Measure, MeasureSize } from './Measure';

export class Phrase {
  private _size: MeasureSize;
  private _measures: Measure[];

  constructor(size?: MeasureSize, measures?: Measure[]) {
    this._size = size ?? 4;
    if (measures) {
      if (measures.length > this._size) {
        measures = measures.splice(this._size);
      } else if (measures.length < this._size) {
        measures = measures.concat(
          Array.from({ length: this._size - measures.length }, () => new Measure())
        );
      }
    }
    this._measures = measures ?? Array.from({ length: this._size }, () => new Measure());
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
