import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tarjima resurslarini import qilish
import enlayout from "./en/layout";
import rulayout from "./ru/layout";
import uzlayout from "./uz/layout";
import enName from "./en/name";
import ruName from "./ru/name";
import uzName from "./uz/name";
import enIt from "./en/it";
import ruIt from "./ru/it";
import uzIt from "./uz/it";
import enAbout from "./en/about";
import ruAbout from "./ru/about";
import uzAbout from "./uz/about";
import enSkill from "./en/myskills";
import ruSkill from "./ru/myskills";
import uzSkill from "./uz/myskills";
import enskills from "./en/skill";
import ruskills from "./ru/skill";
import uzskills from "./uz/skill";
import enPort from "./en/port";
import ruPort from "./ru/port";
import uzPort from "./uz/port";
import enContact from "./en/contact";
import ruContact from "./ru/contact";
import uzContact from "./uz/contact";

// Tarjima resurslarini sozlash
const resources = {
    en: {
        layout: enlayout,
        name: enName,
        it: enIt,
        about: enAbout,
        skill: enSkill,
        skills: enskills,
        port: enPort,
        con: enContact
    },
    ru: {
        layout: rulayout,
        name: ruName,
        it: ruIt,
        about: ruAbout,
        skill: ruSkill,
        skills: ruskills,
        port: ruPort,
        con: ruContact
    },
    uz: {
        layout: uzlayout,
        name: uzName,
        it: uzIt,
        about: uzAbout,
        skill: uzSkill,
        skills: uzskills,
        port: uzPort,
        con: uzContact
    },
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem("language") || "en", 
        fallbackLng: "en", 
        interpolation: {
            escapeValue: false, 
        },
        react: {
            useSuspense: false, 
        },
    });


i18n.on('languageChanged', (lng) => {
    localStorage.setItem("language", lng); 
});

export default i18n;
