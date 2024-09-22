import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function SecondSwitcher() {
    const { i18n } = useTranslation();

    const lang = localStorage.getItem("language");

    useEffect(() => {
        if (!lang) {
            localStorage.setItem("language", "en");
        }
    }, []);

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        localStorage.setItem("language", selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className="relative max-w-[120px] text-secondary md:hidden flex">


            <select
                defaultValue={localStorage.getItem("language")}
                onChange={handleLanguageChange}
                name="selectOption"
                className="mt-1 block w-full py-1 px-2 border border-gray-300 dark:border-gren bg-transparent dark:text-oq rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-oq sm:text-sm"
            >
                <option value="uz">
                    uz
                </option>
                <option value="ru">ru</option>
                <option value="en">en</option>
            </select>
        </div>
    );
}

export default SecondSwitcher;
