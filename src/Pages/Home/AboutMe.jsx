import React from 'react'
import Div from '../../utils/Div'
import { useTranslation } from 'react-i18next';
import Btn from '../../Btn';
import CustomIcon from '../../utils/Palka';

const AboutMe = () => {
    const { t } = useTranslation("about");

    return (
        <section id='qw' className='bg-gray py-[50px] dark:bg-qora'>
            <div className='container'>
                <div className='flex flex-col items-center gap-[50px]'>
                    <Div text={t("about")} />
                    <p className='text-qora text-center dark:text-oq'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed <br /> viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
                    <Btn Text={t("Read")} />
                    <CustomIcon />
                </div>
            </div>
        </section>
    )
}

export default AboutMe