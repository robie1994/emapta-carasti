import React from 'react';
import Logo from '../images/logo.PNG';
import FlyoutLink from './FlyoutLink';
import DummyContent from './DummyContent';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-16 w-auto  text-[14px]">
      <div className="w-full p-4 px-4 py-1 pl-24 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <img className="h-auto w-auto md:h-16" src={Logo} alt={Logo} />
      </div>

      <div className="w-full px-4 py-1 pl-60 md:w-3/4 lg:w-3/4 xl:w-3/4 ">
        <nav className="">
          <div className="container mx-auto flex items-center justify-between">
            <ul className="flex space-x-10 p-4 ">
              <li>
                <FlyoutLink href="/" FlyoutContent={DummyContent}>
                  <div className="flex">
                    Browse Cars
                    <span className="p-1">
                      <ArrowDown size={16} />
                    </span>
                  </div>
                </FlyoutLink>
              </li>
              <li>
                <FlyoutLink href="/" FlyoutContent={DummyContent}>
                  <div className="flex">
                    Help & Resources
                    <span className="p-1">
                      <ArrowDown size={16} />
                    </span>
                  </div>
                </FlyoutLink>
              </li>
              <li>
                <a href="/" className="text-black hover:text-sky-500">
                  Carasti for Business
                </a>
              </li>
              <li>
                <a href="/" className="text-black hover:text-sky-500">
                  Gift Vouchers
                </a>
              </li>
              <li>
                <FlyoutLink
                  href="/"
                  FlyoutContent={DummyContent}
                  onClick={() => navigate('/')}
                >
                  <div className="flex w-16 rounded-full bg-slate-200">
                    <div className="h-8 w-9 rounded-full bg-sky-600 p-1 text-white">
                      MM
                    </div>
                    <div className="px-1 py-2">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </FlyoutLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
