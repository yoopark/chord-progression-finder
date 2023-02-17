import { Chord } from 'chord-symbol';

export class Beat {
  private _chord?: Chord;
  private _numeralChordStr: string;

  constructor(chord?: Chord) {
    this._chord = chord;
    this._numeralChordStr = chord?.numeral.symbol ?? '';
  }
  get chord(): Chord | undefined {
    return this._chord;
  }
  get numeralChordStr(): string {
    return this._numeralChordStr;
  }
  set chord(chord: Chord | undefined) {
    if (chord === null) {
      throw TypeError('Chord cannot be set to undefined');
    }
    this._chord = chord;
  }
  set numeralChordStr(numeralChordStr: string) {
    this._numeralChordStr = numeralChordStr;
  }
}
