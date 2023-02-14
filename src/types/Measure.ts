import { Beat } from './Beat';

export type MeasureSize = 4 | 8 | 16;

export class Measure {
  private _beats: Beat[];
  static readonly BEATS_PER_MEASURE = 4;

  constructor(beats?: Beat[]) {
    this._beats = beats ?? Array.from({ length: Measure.BEATS_PER_MEASURE }, () => new Beat());
  }
  get beats(): Beat[] {
    return this._beats;
  }
  set beats(beats: Beat[]) {
    this._beats = beats;
  }
}
