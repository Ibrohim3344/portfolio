import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

    useEffect(() => {
        if (!localStorage.getItem("language")) {
            localStorage.setItem("language", "en");
        } else {
            i18n.changeLanguage(language);
        }
    }, [language, i18n]);

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        localStorage.setItem("language", selectedLanguage);
        setLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className="relative max-w-[180px]">
            <select
                value={language}
                onChange={handleLanguageChange}
                name="selectOption"
                className="w-full py-3 px-4 bg-white/20 dark:bg-oq/30 text-gray-900 dark:text-gray-100 rounded-xl shadow-md backdrop-blur-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 transition-all duration-300 ease-in-out cursor-pointer"
            >
                <option value="uz">🇺🇿</option>
                <option value="ru">🇷🇺</option>
                <option value="en">🇬🇧</option>
            </select>
        </div>
    );
}

export default LanguageSwitcher;
