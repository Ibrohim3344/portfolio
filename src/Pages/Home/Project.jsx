import React from 'react'
import { useTranslation } from 'react-i18next';
import polar from "/public/polar.png"
import med from "/public/medion.png"
import cer from "/public/certo.png"
import dark from "/public/darkCoffee.png"


const Project = () => {
    const { t } = useTranslation("port");

    return (
        <section className='bg-toq py-[30px]'>
            <div className='container'>
                <h1 className='text-oq dark:text-oq text-3xl text-center relative after:content-[""] after:block after:h-[2px] after:w-[150px] after:bg-oq after:mt-2 after:mx-auto'>
                    {t("al")}
                </h1>


                <div className='pt-[50px] flex items-center xl:justify-between justify-center gap-[40px] flex-wrap'>
                    <a href="https://6627f17b42c34f24c20cb325--inspiring-melba-f55138.netlify.app/" target='_blank'><img src={polar} alt="" width={350} className='rounded-lg'/></a>
                    <a href="https://662a45f547cdd89e18fa7372--iridescent-biscochitos-c784f4.netlify.app/" target='_blank'><img src={med} alt="" width={350} className='rounded-lg'/></a>
                    <a href="https://ibrohims-project.netlify.app/" target='_blank'><img src={cer} alt="" width={350} className='rounded-lg'/></a>
                    <a href="https://dark-coffee.vercel.app/" target='_blank'><img src={dark} alt="" width={350} className='rounded-lg'/></a>
                </div>

                <h1 className='text-xl text-oq pt-[30px] text-center'>{t("more")}</h1>
            </div>
        </section>
    )
}

export default Project;
