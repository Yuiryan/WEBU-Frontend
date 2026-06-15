import Button from '@/components/Button';
import Logo from '@/components/Logo';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/login');
  };
  return (
    // Background
    <div className="min-h-screen bg-tonal-a0 w-full flex justify-center">
      <div className="w-full max-w-[1440px] grid grid-cols-12 gap-x-[24px] gap-y-[40px] px-[120px] py-[80px]">
        <div className="col-start-1 col-span-2 row-start-1 flex items-center">
          <Logo></Logo>
        </div>

        <div className="col-start-2 col-span-10 row-start-2 flex justify-center items-center text-center">
          <h1 className="h00 uppercase text-secondary-a30">
            Learn code by flashcard
          </h1>
        </div>

        <div className="col-start-3 col-span-8 row-start-3 flex justify-center items-center text-center">
          <h2 className="h4 text-neutral-a100">
            Get personalized learning track
          </h2>
        </div>

        <div className="col-start-4 col-span-6 row-start-4 flex justify-center items-center text-center">
          <h3 className="h3 text-white">Remind you everyday</h3>
        </div>

        <div className="row-start-5 col-start-5 col-span-4 self-stretch justify-self-stretch flex justify-center items-center">
          <Button className="w-full py-4 text-lg" onClick={handleGetStarted}>
            Get Started
          </Button>
        </div>

        <div className="col-start-4 col-span-2 row-start-6 flex items-center">
          <a
            href="#"
            className="p8 font-bold text-white underline underline-offset-4 hover:text-secondary-a70 transition-colors"
          >
            About US
          </a>
        </div>

        <div className="col-start-2 col-span-5 row-start-7 flex items-center">
          <h1 className="h1 text-white">Remind you everyday</h1>
        </div>

        <div className="col-start-7 col-span-5 row-start-8 flex items-center justify-end">
          <h1 className="h1 text-white">Remind you everyday</h1>
        </div>

        <div className="col-start-2 col-span-5 row-start-9 flex items-center">
          <h1 className="h1 text-white">Remind you everyday</h1>
        </div>

        <div className="col-start-7 col-span-5 row-start-10 flex items-center justify-end">
          <h1 className="h1 text-white">Remind you everyday</h1>
        </div>

        <div className="col-start-2 col-span-5 row-start-11 flex items-center">
          <h1 className="h1 text-white">Remind you everyday</h1>
        </div>

        <div className="col-start-7 col-span-5 row-start-12 flex items-center justify-end">
          <h1 className="h1 text-white">Remind you everyday</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
