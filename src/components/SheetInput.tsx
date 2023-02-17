import { Phrase } from '@/types/Phrase';
import { Sheet } from '@/types/Sheet';
import { ChangeEvent, useState } from 'react';
import { ChordInputStatus } from './ChordInput';
import { CircleRadio } from './CircleRadio';
import { KeyInput } from './KeyInput';
import { PhraseInput } from './PhraseInput';

export const SheetInput = () => {
  const [sheet, setSheet] = useState<Sheet>(new Sheet());
  const [keyInputStatus, setKeyInputStatus] = useState<ChordInputStatus>('none');

  // FIXME: 입력 도중 key 바꾸면 Chord들 다 초기화해야 함.
  const onChangeKey = (key: string) => {
    if (key === '') {
      setKeyInputStatus('none');
      setSheet(new Sheet());
      return;
    }
    const newSheet: Sheet = new Sheet(key, sheet.phrase);
    setSheet(newSheet);
    setKeyInputStatus(newSheet.isValidKey ? 'valid' : 'invalid');
  };

  const onChangeMeasureSize = (e: ChangeEvent<HTMLInputElement>) => {
    const size: number = parseInt(e.target.value);
    if (!(size === 4 || size === 8 || size === 16)) {
      throw new Error('Invalid measure size');
    }
    const newPhrase: Phrase = new Phrase(size, sheet.phrase.measures);
    const newSheet: Sheet = new Sheet(sheet.key, newPhrase);
    setSheet(newSheet);
  };

  const onChangePhrase = (phrase: Phrase) => setSheet((sheet) => new Sheet(sheet.key, phrase));

  return (
    <div className="pt-10">
      <div className="flex justify-between">
        <div>
          <label className="text-lg font-light">Key</label>
          <KeyInput status={keyInputStatus} onChange={onChangeKey} className="ml-4" />
        </div>
        <fieldset className="flex justify-between space-x-3">
          <CircleRadio
            name="measure-size"
            value="4"
            id="measure-4"
            label="4"
            onChange={onChangeMeasureSize}
            defaultChecked
          />
          <CircleRadio
            name="measure-size"
            value="8"
            id="measure-8"
            label="8"
            onChange={onChangeMeasureSize}
          />
          <CircleRadio
            name="measure-size"
            value="16"
            id="measure-16"
            label="16"
            onChange={onChangeMeasureSize}
          />
        </fieldset>
      </div>
      <PhraseInput
        phrase={sheet.phrase}
        onChange={onChangePhrase}
        className="mt-10"
        parseChord={sheet.parseChord}
        renderChord={sheet.renderChord}
      />
    </div>
  );
};
