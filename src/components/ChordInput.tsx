import { ChangeEvent } from 'react';

export type ChordInputStatus = 'valid' | 'invalid' | 'none';

type ChordInputProps = {
  status: ChordInputStatus;
  placeholder?: string;
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

export const ChordInput = ({
  status,
  placeholder = '',
  className = '',
  onChange,
}: ChordInputProps) => {
  return (
    <input
      className={`w-12 h-12 rounded-md text-center text-white shadow-lg dark:shadow-white-md focus:outline-none focus:caret-transparent duration-300 ease-in-out ${getBgByStatus(
        status
      )} ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
