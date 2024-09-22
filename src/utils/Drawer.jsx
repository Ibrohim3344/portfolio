import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import me from "/public/me.jpg";
import { useTranslation } from "react-i18next";
import useStore from "./zustand";
import { FaSun, FaMoon } from 'react-icons/fa';
import SecondSwitcher from "./SecondSwitcher";




export function DrawerDefault() {
    const [open, setOpen] = React.useState(false);

    const { theme, toggleTheme } = useStore();


    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    const { t } = useTranslation("layout");

    const menuItems = [
        {
            key: "Contact",
            icon: "fa-solid fa-phone-volume",
        },
        {
            key: "About",
            icon: "fa-regular fa-address-card",

        },
        {
            key: "Skills",
            icon: "fa-solid fa-bolt",

        },
        {
            key: "Portfolio",
            icon: "fa-solid fa-user",

        }
    ];



    return (
        <React.Fragment>
            <i className="fa-solid text-xl fa-bars text-qora dark:text-oq md:hidden flex" onClick={openDrawer}></i>
            <Drawer open={open} onClose={closeDrawer} className="p-4 bg-gray dark:bg-qora shadow-lg shadow-qora dark:shadow-oq" placement="right">
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        <Avatar src={me} alt="avatar" />
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>


                <ul className="flex flex-col items-start text-xl gap-[20px]">
                    {menuItems.map(({ key, icon }) => (
                        <li key={key} className="w-full px-2 rounded-xl py-[5px] border-2 border-qora dark:border-oq text-qora dark:text-oq flex items-center justify-between">
                            <span>{t(key)}</span>
                            <i className={icon}></i>
                        </li>
                    ))}
                </ul>

                <br />

                <hr className="text-qora dark:text-oq" />

                <br />
                <div className="flex flex-row items-center p-4  justify-between border-2 border-qora dark:border-oq rounded-xl">



                    <div className="flex flex-row items-center gap-[10px]">

                        <div
                            onClick={toggleTheme}
                            className="cursor-pointer text-qora dark:text-oq"
                        >
                            {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
                        </div>

                        <span className="text-qora dark:text-oq">Dark Mode</span>
                    </div>

                </div>
            </Drawer>
        </React.Fragment>
    );
}
