import React from 'react'
import CustomIcon from '../../utils/Palka'
import Div from '../../utils/Div'
import { useTranslation } from 'react-i18next';
import html from "/public/html.png"
import css from "/public/css.png"
import js from "/public/js.png"
import react from "/public/raect.png"
import git from "/public/git.png"
import figma from "/public/figma.png"


const Skills = () => {
    const { t } = useTranslation("skills");

    return (
        <section className='bg-gray pb-[50px] dark:bg-qora'>
            <div className='container'>
                <div className='flex flex-col items-center gap-[50px]'>
                    <CustomIcon />
                    <Div text={t("Skills")} />
                </div>

                <h1 className='text-2xl font-bold md:text-start text-center text-qora dark:text-oq py-[20px] pt-[50px]'>{t("now")}</h1>

                <div className='flex flex-row items-center md:justify-between justify-center py-[20px] flex-wrap xl:gap-0 gap-[40px]'>
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={js} alt="" />
                    <img src={react} alt="" />
                    <img src={git} alt="" />
                    <img src={figma} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Skills