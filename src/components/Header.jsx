import React from 'react';
import Logo from '../images/logo.PNG';
import FlyoutLink from './FlyoutLink';
import DummyContent from './DummyContent';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-auto w-full flex-col text-[14px] md:flex-row">
      <div className="min-w-1/4">
        <img className="" src={Logo} alt={Logo} />
      </div>

      <div className="w-3/4 font-semibold ">
        <nav>
          <ul className="flex flex-col space-x-10 py-6 md:flex-row ">
            <li className="ml-10">
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
                <div className=" flex w-16 rounded-full bg-slate-200">
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
        </nav>
      </div>
    </div>
  );
};

export default Header;
