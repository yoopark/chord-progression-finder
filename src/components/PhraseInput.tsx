import { Measure } from '@/types/Measure';
import { Phrase } from '@/types/Phrase';
import { Chord, MaybeChord } from 'chord-symbol';
import { MeasureInput } from './MeasureInput';

type PhraseInputProps = {
  phrase: Phrase;
  onChange: (phrase: Phrase) => void;
  parseChord: (input: string) => MaybeChord;
  renderChord: (chord: Chord) => string;
  className?: string;
};

export const PhraseInput = ({
  phrase,
  onChange,
  parseChord,
  renderChord,
  className = '',
}: PhraseInputProps) => {
  const onChangeMeasure = (measure: Measure, idx: number) => {
    const measures: Measure[] = [...phrase.measures];
    measures[idx] = measure;
    onChange(new Phrase(phrase.size, measures));
  };

  return (
    <div className={`flex flex-wrap justify-between items-center ${className}`}>
      {phrase.measures.map((measure: Measure, idx: number) => (
        <MeasureInput
          key={idx}
          measure={measure}
          idx={idx}
          onChange={onChangeMeasure}
          parseChord={parseChord}
          renderChord={renderChord}
          className="width-1/4 mb-10"
        />
      ))}
    </div>
  );
};
