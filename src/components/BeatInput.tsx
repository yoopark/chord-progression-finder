import { Beat } from '@/types/Beat';
import { Chord, MaybeChord } from 'chord-symbol';
import { ChangeEvent, useState } from 'react';
import { ChordInput, ChordInputStatus } from './ChordInput';

type BeatInputProps = {
  idx: number;
  onChange: (beat: Beat, idx: number) => void;
  parseChord: (input: string) => MaybeChord;
  renderChord: (chord: Chord) => string;
  className?: string;
};

export const BeatInput = ({
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
    onChange(new Beat(chord, renderChord(chord)), idx);
  };

  return <ChordInput status={status} onChange={onChangeChord} className={className} />;
};
