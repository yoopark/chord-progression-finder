import { ChangeEvent } from 'react';

export type ChordInputStatus = 'valid' | 'invalid' | 'none';

type ChordInputProps = {
  status: ChordInputStatus;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const getBgByStatus = (status: ChordInputStatus): string => {
  switch (status) {
    case 'valid':
      return 'bg-blue';
    case 'invalid':
      return 'bg-red';
    case 'none':
      return 'bg-silver dark:bg-spacegray';
    default:
      throw new Error('Invalid status');
  }
};

export const ChordInput = ({ status, className = '', onChange }: ChordInputProps) => {
  return (
    <input
      className={`w-12 h-12 rounded-md text-center focus:outline-none focus:caret-transparent ${getBgByStatus(
        status
      )} ${className}`}
      onChange={onChange}
    />
  );
};
