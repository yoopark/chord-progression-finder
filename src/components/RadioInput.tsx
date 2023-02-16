import { useEffect } from 'react';

type RadioInputProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  required?: boolean;
};

export const RadioInput = ({ label, id, name, value, required = false }: RadioInputProps) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="hidden peer"
        required={required}
      />
      <label htmlFor={id}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray font-light bg-silver dark:bg-spacegray cursor-pointer focus:outline-none focus:caret-transparent duration-300 ease-in-out">
          {label}
        </div>
      </label>
    </div>
  );
};
