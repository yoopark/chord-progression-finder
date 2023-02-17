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
    <div className={`flex w-1/4 ${className}`}>
      <div className="flex w-full items-center justify-evenly">
        {measure.beats.map((beat: Beat, idx: number) => (
          <BeatInput
            key={idx}
            beat={beat}
            idx={idx}
            onChange={onChangeBeat}
            parseChord={parseChord}
            renderChord={renderChord}
          />
        ))}
      </div>
      <div className="w-0.5 h-10 bg-indigo rounded dark:bg-yellow mt-1.5"></div>
    </div>
  );
};

// TODO: Bar 가운데 정렬하면 BeatInput(ChordInput + RelativeChord) 다 친 상태에서 가운데 정렬해버림. mt-1.5는 임시방편
