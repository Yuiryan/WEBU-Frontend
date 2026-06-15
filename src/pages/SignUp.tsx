import Input from '@/components/InputFloating';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/Dashboard');
  };
  return (
    <div className="min-h-screen bg-[#0F0F13] w-full flex justify-center items-center relative">
      <div className="w-full max-w-[500px] flex flex-col px-6 z-10">
        <h1 className="text-center h0 tracking-wide">Sign Up</h1>

        <div className="flex flex-col gap-[24px]">
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
        </div>

        <div className="mt-[40px]">
          <Button
            className="w-full py-[16px] text-[20px] font-bold"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </div>

        <div className="flex justify-center items-center gap-[32px] mt-[48px]">
          <button className="bg-[#2D73FF] text-white px-[24px] py-[10px] rounded-[10px] font-bold text-[24px] shadow-[0_0_15px_rgba(45,115,255,0.4)]">
            Sign Up
          </button>

          <button className="text-white font-bold text-[24px] hover:text-[#2D73FF] hover:scale-105 transition-all cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
