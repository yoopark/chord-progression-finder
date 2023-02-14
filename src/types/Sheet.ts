import { Chord, chordParserFactory, chordRendererFactory, MaybeChord } from 'chord-symbol';
import { Phrase } from './Phrase';

export class Sheet {
  private _key: string;
  private _isValidKey: boolean;
  private _phrase: Phrase;
  private _parseChord: (input: string) => MaybeChord;
  private _renderChord: (chord: Chord) => string;

  constructor(key?: string, phrase?: Phrase) {
    this._key = key ?? 'C';
    this._phrase = phrase ?? new Phrase();
    try {
      this._parseChord = chordParserFactory({
        notationSystems: ['english'],
        altIntervals: ['b5', '#5', 'b9', '#9', '#11', 'b13'],
        key: this._key,
      });
      this._isValidKey = true;
    } catch (e) {
      this._isValidKey = false;
      this._key = 'C';
      this._parseChord = chordParserFactory({
        notationSystems: ['english'],
        altIntervals: ['b5', '#5', 'b9', '#9', '#11', 'b13'],
        key: this._key,
      });
    }
    this._renderChord = chordRendererFactory({ useShortNamings: true });
  }

  get key(): string {
    return this._key;
  }
  get isValidKey(): boolean {
    return this._isValidKey;
  }
  get phrase(): Phrase {
    return this._phrase;
  }
  get parseChord(): (input: string) => MaybeChord {
    return this._parseChord;
  }
  get renderChord(): (chord: Chord) => string {
    return this._renderChord;
  }
}
