import { InputHTMLAttributes, useId } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = ({
  className = '',
  error = false,
  placeholder,
  ...props
}: InputProps) => {
  const inputId = useId();

  const borderStyles = error
    ? 'border-[#EF4444] focus:border-[#EF4444]'
    : 'border-transparent hover:border-secondary-a70/50 focus:border-secondary-a70';

  return (
    <div className={`relative w-full ${className}`}>
      <input
        id={inputId}
        className={`block w-full bg-tonal-a20 text-white px-[16px] pb-[8px] pt-[24px] rounded-[10px] p7 border transition-all duration-200 appearance-none focus:outline-none focus:ring-0 peer ${borderStyles}`}
        placeholder=" "
        {...props}
      />

      {placeholder && (
        <label
          htmlFor={inputId}
          className={`absolute text-neutral-a400 duration-200 transform -translate-y-[10px] scale-75 top-[16px] z-10 origin-[0] left-[16px] pointer-events-none
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-[10px]
            ${error ? 'text-[#EF4444] peer-focus:text-[#EF4444]' : 'peer-focus:text-secondary-a70'}`}
        >
          {placeholder}
        </label>
      )}
    </div>
  );
};

export default Input;
