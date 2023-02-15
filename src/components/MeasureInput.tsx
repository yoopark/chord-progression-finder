import { Beat } from '@/types/Beat';
import { Measure } from '@/types/Measure';
import { Chord, MaybeChord } from 'chord-symbol';
import { useEffect, useState } from 'react';
import { BeatInput } from './BeatInput';

type MeasureInputProps = {
  idx: number;
  onChange: (measure: Measure, idx: number) => void;
  parseChord: (input: string) => MaybeChord;
  renderChord: (chord: Chord) => string;
  className?: string;
};

export const MeasureInput = ({
  idx,
  onChange,
  parseChord,
  renderChord,
  className = '',
}: MeasureInputProps) => {
  const [measure, setMeasure] = useState<Measure>(new Measure());

  const onChangeBeat = (beat: Beat, idx: number) => {
    const beats: Beat[] = [...measure.beats];
    beats[idx] = beat;
    setMeasure(() => new Measure(beats));
  };

  useEffect(() => onChange(measure, idx), [measure]);
  return (
    <>
      <div className="flex w-full justify-evenly">
        {[...Array(Measure.BEATS_PER_MEASURE)].map((_, idx: number) => (
          <BeatInput
            key={idx}
            idx={idx}
            onChange={onChangeBeat}
            parseChord={parseChord}
            renderChord={renderChord}
            className={className}
          />
        ))}
      </div>
      <div className="w-3 h-10 bg-indigo dark:bg-yellow"></div>
    </>
  );
};
