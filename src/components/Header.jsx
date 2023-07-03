import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import routes from '../routes/routes';
import ChevronDown from '../assets/chevron-down.svg';

function Header() {
  const path = useLocation().pathname;
  const history = useHistory();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    history.push('/logout');
  };

  return (
    <div className='flex flex-col md:flex-row md:items-center w-full justify-between border-b-2 border-[#a4aabd]'>
      {/* Logo */}
      <div className='flex items-center gap-2 mb-4'>
        <Link to='/' className='flex items-center gap-2'>
          <img
            className='w-20 h-20'
            src='https://avatars3.githubusercontent.com/u/37439169?s=200&v=4'
            alt='Bild 1'
          />
          <h1 className='text-3xl text-[#1c2c54] font-medium'>DEV APP</h1>
        </Link>
      </div>

      {/* Navigation */}
      <div className='mb-4'>
        <ul className='flex flex-row gap-5'>
          {routes
            .filter((route) => route.showInNavigation)
            .map((route) => (
              <li
                key={route.path}
                className={
                  path === route.path
                    ? 'text-[#2050fe] uppercase font-medium border-b-2 border-[#2050fe] mb-2'
                    : 'font-medium uppercase mb-2'
                }
              >
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Profile USER INFORMATION */}
      <div className='relative cursor-pointer'>
        <div className='flex items-center gap-5' onClick={handleDropdownToggle}>
          <img
            className='w-10 h-10 rounded-full'
            src='https://files.startdeliver.com/accid-aa909493a6679e232a361e2a501179b4/611d57c1d8af8f2671ed9c25fb38331b'
            alt='Bild 1'
          />
          <div>
            <p className='font-bold'>John Zoidberg</p>
            <p className='text-sm text-[#a4aabd]'>Customer Success Hero</p>
          </div>
          <img
            src={ChevronDown}
            alt='Chevron'
            className={`h-5 w-5 transform transition-transform ${
              dropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </div>

        {dropdownOpen && (
          <div className='absolute top-12 right-0 mt-2 w-full bg-white border border-[#a4aabd] rounded shadow-lg'>
            <button
              onClick={handleLogout}
              className='block w-full text-left px-4 py-2 text-sm text-[#a4aabd] hover:bg-gray-100'
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
