import React from 'react'
import { useTranslation } from 'react-i18next';
import ing from "/public/eng.png"
import esp from "/public/ispan.png"

const OtherSkill = () => {
    const { t } = useTranslation("skills");


    return (
        <section className='bg-gray pb-[50px] dark:bg-qora'>
            <div className='container'>
                <h1 className='text-2xl font-bold md:text-start text-center text-qora dark:text-oq py-[20px] sm:pt-[50px] pt-0'>{t("other")}</h1>
                

                <div className='pt-[20px] flex flex-row items-center sm:gap-[100px] gap-[40px] flex-wrap'>
                    <img src={ing} alt="" />
                    <img src={esp} alt="" />
                </div>
            </div>
        </section>
    )
}

export default OtherSkill