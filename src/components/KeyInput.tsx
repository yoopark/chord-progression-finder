import { ChangeEvent, useEffect, useState } from 'react';
import { ChordInput, ChordInputStatus } from './ChordInput';

export type KeyInputProps = {
  onChange: (key: string) => void;
  status: ChordInputStatus;
  className?: string;
};

export const KeyInput = ({ onChange, status, className = '' }: KeyInputProps) => {
  const [key, setKey] = useState<string>('');

  const onChangeKey = (e: ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;
    setKey(input);
  };

  useEffect(() => {
    onChange(key);
  }, [key]);

  return <ChordInput onChange={onChangeKey} status={status} className={className} />;
};
