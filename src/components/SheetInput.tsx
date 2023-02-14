import { Phrase } from '@/types/Phrase';
import { Sheet } from '@/types/Sheet';
import { useState } from 'react';
import { ChordInputStatus } from './ChordInput';
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

  const onChangePhrase = (phrase: Phrase) => setSheet((sheet) => new Sheet(sheet.key, phrase));

  return (
    <div className="pt-10">
      <div>
        <label className="text-lg">Key</label>
        <KeyInput status={keyInputStatus} onChange={onChangeKey} className="ml-4" />
      </div>
      <PhraseInput
        onChange={onChangePhrase}
        className="mt-10"
        parseChord={sheet.parseChord}
        renderChord={sheet.renderChord}
      />
    </div>
  );
};
