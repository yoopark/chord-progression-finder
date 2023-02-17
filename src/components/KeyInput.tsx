import { ChangeEvent } from 'react';
import { ChordInput, ChordInputStatus } from './ChordInput';

export type KeyInputProps = {
  onChange: (key: string) => void;
  status: ChordInputStatus;
  className?: string;
};

export const KeyInput = ({ onChange, status, className = '' }: KeyInputProps) => {
  const onChangeKey = (e: ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;
    onChange(input);
  };

  return <ChordInput onChange={onChangeKey} status={status} className={className} />;
};
