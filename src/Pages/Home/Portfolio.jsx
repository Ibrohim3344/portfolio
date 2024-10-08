import React from 'react'
import { useTranslation } from 'react-i18next';
import Div from '../../utils/Div';

const Portfolio = () => {

    const { t } = useTranslation("port");
    return (
        <section id='port' className='bg-[url("/public/hero.png")] py-[70px] bg-no-repeat bg-cover'>
            <div className='container'>
                <Div text={t("port")}/>
            </div>
        </section>
    )
}

export default Portfolio