
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
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





const resources = {
    en: {
        layout: enlayout,
        name: enName,
        it: enIt,
        about: enAbout,
        skill: enSkill,
        skills: enskills
    },
    ru: {
        layout: rulayout,
        name: ruName,
        it: ruIt,
        about: ruAbout,
        skill: ruSkill,
        skills: uzskills

    },
    uz: {
        layout: uzlayout,
        name: uzName,
        it: uzIt,
        about: uzAbout,
        skill: uzSkill,
        skills: uzskills

    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
