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

  const onChangeMeasure = (e: ChangeEvent<HTMLInputElement>) => {
    const size: number = parseInt(e.target.value);
    if (!(size === 4 || size === 8 || size === 16)) {
      throw new Error('Invalid measure size');
    }
    const newPhrase: Phrase = new Phrase(size); // TODO: 기존 있던거 윗 부분은 이어주는게 맞음
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
            onChange={onChangeMeasure}
            defaultChecked
          />
          <CircleRadio
            name="measure-size"
            value="8"
            id="measure-8"
            label="8"
            onChange={onChangeMeasure}
          />
          <CircleRadio
            name="measure-size"
            value="16"
            id="measure-16"
            label="16"
            onChange={onChangeMeasure}
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
