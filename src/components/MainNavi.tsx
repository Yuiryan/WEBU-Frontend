import Logo from '@/components/Logo';
import { useNavigate } from 'react-router-dom';

type TabType = 'DASHBOARD' | 'PROBLEM' | 'NOTEBOOK';

interface MainNavProps {
  activeTab?: TabType;
}

const MainNav = ({ activeTab = 'DASHBOARD' }: MainNavProps) => {
  const tabs: TabType[] = ['DASHBOARD', 'PROBLEM', 'NOTEBOOK'];

  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-center justify-between bg-[#13131A] px-[32px] py-[16px] border-b border-white/5">
      <div className="flex items-center">
        <Logo className="w-[100px] h-auto" />
      </div>

      <div className="flex items-center gap-[48px]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => navigate(`/${tab.toLowerCase()}`)}
              className={`relative h5 tracking-wide py-[8px] transition-colors duration-200 cursor-pointer uppercase
                ${isActive ? 'text-[#8BB4F6]' : 'text-white hover:text-[#8BB4F6]/70'}
              `}
            >
              {tab}

              {isActive && (
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#8BB4F6] rounded-t-[2px]" />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex items-center cursor-pointer text-white hover:text-[#8BB4F6] transition-colors">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.12 23.98 16 21.8 20 21.8C23.98 21.8 31.88 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z" />
        </svg>
      </div>
    </nav>
  );
};

export default MainNav;
