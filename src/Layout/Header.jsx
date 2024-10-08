import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon } from 'react-icons/fa';
import LanguageSwitcher from '../utils/SwitchLanguage';
import useStore from '../utils/zustand';
import { Button } from '@material-tailwind/react';
import { Avatar } from "@material-tailwind/react";
import me from "/public/me.jpg";
import { DrawerDefault } from '../utils/Drawer';
import SecondSwitcher from '../utils/SecondSwitcher';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      offset: 100, 
    });
  }, []);

  const { theme, toggleTheme } = useStore();
  const { t } = useTranslation("layout");

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

    // Scroll eventini kuzatamiz
    window.addEventListener('scroll', handleScroll);

    // Component unmounted bo'lganda event listener'ni olib tashlaymiz
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-gray py-[20px] dark:bg-qora font-nun sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md shadow-qora dark:shadow-oq' : ''}`}>
      <div className='container flex flex-row justify-between items-center'>
        
        {/* SM dan kichik ekranlar uchun fade-down animatsiyasi */}
        <div className="sm:hidden">
          <Avatar src={me} alt="avatar" />
        </div>

        {/* SM dan katta ekranlar uchun fade-up animatsiyasi */}
        <div className="hidden sm:block" data-aos="fade-right" data-aos-offset="100">
          <Avatar src={me} alt="avatar" />
        </div>

        <div className='lg:flex hidden flex-row items-center gap-[30px]'>
          <div
            onClick={toggleTheme}
            className="md:flex hidden cursor-pointer text-qora dark:text-oq"
          >
            {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
          </div>

          <ul className='md:flex hidden flex-row items-center gap-[30px]'>
            <li className='cursor-pointer text-qora font-semibold dark:text-oq relative 
                            before:content-[""] before:absolute before:h-[2px] before:w-0 before:bg-qora dark:before:bg-oq before:top-[-10px] before:left-0
                            after:content-[""] after:absolute after:h-[2px] after:w-0 hover:after:duration-300 after:bg-qora dark:after:bg-oq after:bottom-[-10px] after:right-0
                            hover:before:w-full hover:after:w-full hover:before:duration-300 transition-all duration-500'>
              <a href="#qw">{t("About")}</a>
            </li>
            <li className='cursor-pointer text-qora font-semibold dark:text-oq relative 
                            before:content-[""] before:absolute before:h-[2px] before:w-0 before:bg-qora dark:before:bg-oq before:top-[-10px] before:left-0
                            after:content-[""] after:absolute after:h-[2px] after:w-0 hover:after:duration-300 after:bg-qora dark:after:bg-oq after:bottom-[-10px] after:right-0
                            hover:before:w-full hover:after:w-full hover:before:duration-300 transition-all duration-500'>
              <a href="#skill">{t("Skills")}</a>
            </li>
            <li className='cursor-pointer text-qora font-semibold dark:text-oq relative 
                            before:content-[""] before:absolute before:h-[2px] before:w-0 before:bg-qora dark:before:bg-oq before:top-[-10px] before:left-0
                            after:content-[""] after:absolute hover:after:duration-300 after:h-[2px] after:w-0 after:bg-qora dark:after:bg-oq after:bottom-[-10px] after:right-0
                            hover:before:w-full hover:after:w-full hover:before:duration-300 transition-all duration-500'>
              <a href="#port">{t("Portfolio")}</a>
            </li>
          </ul>

          <a href="tel:+998990182008">
            <Button className="rounded-full bg-qora text-oq dark:bg-gray dark:text-qora md:flex hidden" color='qora'>
              {t("Contact")}
            </Button>
          </a>

          <LanguageSwitcher />
        </div>

        <div className='flex-row items-center gap-[20px] lg:hidden flex'>
          <SecondSwitcher />
          <DrawerDefault />
        </div>
      </div>
    </header>
  );
};

export default Header;
