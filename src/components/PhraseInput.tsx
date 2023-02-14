import { Measure } from '@/types/Measure';
import { Phrase } from '@/types/Phrase';
import { Chord, MaybeChord } from 'chord-symbol';
import { useEffect, useState } from 'react';
import { MeasureInput } from './MeasureInput';

type PhraseInputProps = {
  onChange: (phrase: Phrase) => void;
  parseChord: (input: string) => MaybeChord;
  renderChord: (chord: Chord) => string;
  className?: string;
};

export const PhraseInput = ({
  onChange,
  parseChord,
  renderChord,
  className = '',
}: PhraseInputProps) => {
  const [phrase, setPhrase] = useState<Phrase>(new Phrase());

  const onChangeMeasure = (measure: Measure, idx: number) => {
    const measures: Measure[] = [...phrase.measures];
    measures[idx] = measure;
    setPhrase((phrase) => new Phrase(phrase.size, measures));
  };

  useEffect(() => onChange(phrase), [phrase]);

  return (
    <div className={`flex justify-between ${className}`}>
      {[...Array(phrase.size)].map((_, idx: number) => (
        <MeasureInput
          key={idx}
          idx={idx}
          onChange={onChangeMeasure}
          parseChord={parseChord}
          renderChord={renderChord}
        />
      ))}
    </div>
  );
};
