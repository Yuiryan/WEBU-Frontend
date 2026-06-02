import { ImgHTMLAttributes } from 'react';
import webuLogo from '../assets/Logo.svg';

type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

const Logo = ({ className = '', ...props }: LogoProps) => {
  return (
    <img
      src={webuLogo}
      alt="WEBU Logo"
      className={`cursor-pointer ${className}`}
      {...props}
    />
  );
};

export default Logo;
