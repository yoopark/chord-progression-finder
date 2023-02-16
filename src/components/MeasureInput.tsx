import { Beat } from '@/types/Beat';
import { Measure } from '@/types/Measure';
import { Chord, MaybeChord } from 'chord-symbol';
import { BeatInput } from './BeatInput';

type MeasureInputProps = {
  measure: Measure;
  idx: number;
  onChange: (measure: Measure, idx: number) => void;
  parseChord: (input: string) => MaybeChord;
  renderChord: (chord: Chord) => string;
  className?: string;
};

export const MeasureInput = ({
  measure,
  idx,
  onChange,
  parseChord,
  renderChord,
  className = '',
}: MeasureInputProps) => {
  const onChangeBeat = (beat: Beat, beatIdx: number) => {
    const beats: Beat[] = [...measure.beats];
    beats[beatIdx] = beat;
    onChange(new Measure(beats), idx);
  };

  return (
    <div className="flex w-1/4">
      <div className="flex w-full justify-evenly">
        {measure.beats.map((_: Beat, idx: number) => (
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
      <div className="w-0.5 h-10 bg-indigo rounded dark:bg-yellow"></div>
    </div>
  );
};
