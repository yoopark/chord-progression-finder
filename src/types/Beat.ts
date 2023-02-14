import { Chord } from 'chord-symbol';

export class Beat {
  private _chord?: Chord;
  private _relativeChordStr: string;

  constructor(chord?: Chord, relativeChordStr?: string) {
    this._chord = chord;
    this._relativeChordStr = relativeChordStr ?? '';
  }
  get chord(): Chord | undefined {
    return this._chord;
  }
  get relativeChordStr(): string {
    return this._relativeChordStr;
  }
  set chord(chord: Chord | undefined) {
    if (chord === null) {
      throw TypeError('Chord cannot be set to undefined');
    }
    this._chord = chord;
  }
  set relativeChordStr(relativeChordStr: string) {
    this._relativeChordStr = relativeChordStr;
  }
}
