import React from 'react';
import InformationTable from '../../utils/InformationTable';
import { useTranslation } from 'react-i18next';
import design from "/public/design.png"
import CustomIcon from '../../utils/Palka';


const InfoMYSkills = () => {
    const { t } = useTranslation("skill");

    return (
        <section className='bg-gray dark:bg-qora py-[50px]'>
            <div className='container'>
                <div className='flex flex-row flex-wrap xl:text-start text-center justify-center gap-[50px] items-center pb-[50px]'>
                    <InformationTable title={t("design")} desc={t("ican")} />
                    <InformationTable title={t("devo")} desc={t("ican")} />
                    <InformationTable title={t("main")} desc={t("ican")} />
                </div>
            </div>
        </section>
    );
};

export default InfoMYSkills;
