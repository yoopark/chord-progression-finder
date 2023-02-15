type ToggleSwitchProps = {
  checked: boolean;
  onChange: () => void;
};

{
  /* <label className="flex justify-between items-center p-2 text-xl">
Send 🐱 memes to my inbox?
<input type="checkbox" />
<span></span>
</label>
<input type="checkbox" checked={isDarkMode} onChange={toggleIsDarkMode} /> */
}

export const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => {
  return (
    <label className="relative flex justify-between items-center p-2 text-xl">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="absolute left-1/2 -translate-x-1/2 w-full h-full appearance-none peer rounded-md"
      />
      <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-silver rounded-full duration-300 ease-in-out peer-checked:bg-spacegray after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
    </label>
  );
};
