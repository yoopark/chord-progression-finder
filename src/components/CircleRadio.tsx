import { ChangeEvent } from 'react';

type CircleRadioProps = {
  name: string;
  value: string;
  id: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
};

export const CircleRadio = ({
  name,
  value,
  id,
  defaultChecked = false,
  disabled = false,
  onChange,
  label,
  className = '',
}: CircleRadioProps) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        className="hidden"
      />
      <label htmlFor={id}>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-gray font-light bg-silver dark:bg-spacegray cursor-pointer focus:outline-none focus:caret-transparent duration-300 ease-in-out cursor-pointer hover:bg-blue hover:text-white hover:font-semibold dark:hover:bg-yellow dark:hover:text-spacegray dark:hover:font-bold ${className}`}
        >
          {label}
        </div>
      </label>
    </>
  );
};
