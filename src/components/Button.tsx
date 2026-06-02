import { ReactNode } from 'react';
interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className = '', ...props }: ButtonProps) => {
  const buttonStyles = `
    flex items-center justify-center gap-2 p-[10px] rounded-[10px] h7 transition-all duration-200 cursor-pointer
    bg-tonal-a20 border border-secondary-a70 text-secondary-a70 
    hover:bg-secondary-a70 hover:text-white hover:border-transparent
    disabled:bg-primary-a10 disabled:text-secondary-a30 disabled:border-transparent disabled:cursor-not-allowed
    disabled:hover:bg-primary-a10 disabled:hover:text-secondary-a30
  `;

  return (
    <button className={`${buttonStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
