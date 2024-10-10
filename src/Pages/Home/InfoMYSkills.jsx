import React, { useEffect } from 'react';
import InformationTable from '../../utils/InformationTable';
import { useTranslation } from 'react-i18next';
import design from "/public/design.png"
import CustomIcon from '../../utils/Palka';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const InfoMYSkills = () => {
    const { t } = useTranslation("skill");

    useEffect(() => {

        AOS.init({
            duration: 500,
            offset: 100,
        });
    }, []);

    return (
        <section className='bg-gray dark:bg-qora py-[50px]'>
            <div className='container'>
                <div className='flex flex-row flex-wrap xl:text-start text-center justify-center gap-[50px] items-center pb-[50px]'>
                    <InformationTable title={t("design")} desc={t("ican")} data-aos-offset="100" aos={"fade-up"}/>
                    <InformationTable title={t("devo")} desc={t("ican1")} aos={"fade-up"}/>
                    <InformationTable title={t("main")} desc={t("ican2")} aos={"fade-up"}/>
                </div>
            </div>
        </section>
    );
};

export default InfoMYSkills;
