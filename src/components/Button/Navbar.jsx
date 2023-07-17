import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiHomeSmile } from 'react-icons/bi';
import { LuContact } from 'react-icons/lu';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { BsBook } from 'react-icons/bs';
import m5 from '../../assets/images/codetoform_abstract_backgrounds_07.png';

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState('');

  const handleClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div>
      <div
        className="h-screen w-full relative flex overflow-hidden"
        style={{
          backgroundImage: `url(${m5})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative text-white glass">
          <Link
            to="/"
            className={`h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer ${
              activeIcon === 'home'
                ? 'text-black bg-white'
                : 'hover:text-black hover:bg-white'
            } hover:duration-300 hover:ease-linear focus:bg-white active:bg-white`}
            onClick={() => handleClick('home')}
          >
            <BiHomeSmile className="text-2xl" />
          </Link>

          <Link
            to="/service"
            className={`h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer ${
              activeIcon === 'work'
                ? 'text-black bg-white'
                : 'hover:text-black hover:bg-white'
            } hover:duration-300 hover:ease-linear focus:bg-white active:bg-white`}
            onClick={() => handleClick('work')}
          >
            <MdOutlineWorkOutline className="text-2xl" />
          </Link>

          <Link
            to="/project"
            className={`h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer ${
              activeIcon === 'book'
                ? 'text-black bg-white'
                : 'hover:text-black hover:bg-white'
            } hover:duration-300 hover:ease-linear focus:bg-white active:bg-white`}
            onClick={() => handleClick('book')}
          >
            <BsBook className="text-2xl" />
          </Link>

          <Link
            to="/contact"
            className={`h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer ${
              activeIcon === 'contact'
                ? 'text-black bg-white'
                : 'hover:text-black hover:bg-white'
            } hover:duration-300 hover:ease-linear focus:bg-white active:bg-white`}
            onClick={() => handleClick('contact')}
          >
            <LuContact className="text-2xl" />
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
