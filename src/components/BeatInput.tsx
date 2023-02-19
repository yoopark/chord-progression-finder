import { Beat } from '@/types/Beat';
import { Chord, MaybeChord } from 'chord-symbol';
import { ChangeEvent, useState } from 'react';
import { ChordInput, ChordInputStatus } from './ChordInput';

type BeatInputProps = {
  beat: Beat;
  idx: number;
  onChange: (beat: Beat, idx: number) => void;
  parseChord: (input: string) => MaybeChord;
  renderChord: (chord: Chord) => string;
  className?: string;
};

export const BeatInput = ({
  beat,
  idx,
  onChange,
  parseChord,
  renderChord,
  className,
}: BeatInputProps) => {
  const [status, setStatus] = useState<ChordInputStatus>('none');

  const onChangeChord = (e: ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;
    if (input === '') {
      setStatus('none');
      onChange(new Beat(), idx);
      return;
    }
    const chord = parseChord(input);
    if ('error' in chord) {
      setStatus('invalid');
      return;
    }
    setStatus('valid');
    onChange(new Beat(chord), idx);
  };

  return (
    <div className="flex flex-col items-center">
      <ChordInput status={status} onChange={onChangeChord} placeholder="/" className={className} />
      <div className="w-12 h-12 flex items-center justify-center">{beat.numeralChordStr}</div>
    </div>
  );
};
