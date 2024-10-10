import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ITBerries = () => {


    const { t } = useTranslation("it");
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleCollapse = () => {
        setExpanded(false);
    };


    useEffect(() => {

        AOS.init({
            duration: 500,
            offset: 100,
        });
    }, []);


    return (
        <section className='py-[100px] bg-toq bg-[url("/public/heroIT.png")] bg-no-repeat md:bg-right bg-top bg-contain'>
            <div className='container text-oq flex flex-col sm:items-start sm:text-start text-center sm:justify-start justify-center items-center gap-[30px]'>
                <h1 className='sm:text-6xl text-3xl' data-aos="fade-up" data-aos-offset="100">{t("Berries")}</h1>
                <p className='text-xl' data-aos="fade-up" data-aos-offset="100">
                    {t("Me")}
                    {expanded && (
                        t("More")
                    )}
                </p>
                {!expanded ? ( // Matn kengaytirilmagan bo'lsa, "Read more" buttonini ko'rsatamiz
                    <button
                        className="relative text-xl px-[10px] py-[5px] border-2 border-transparent text-oq group" data-aos="fade-up" data-aos-offset="100"
                        onClick={handleExpand}
                    >
                        <span className="relative z-10">{t("Read")}</span>
                        <span className="absolute inset-0 border-l-2 border-r-2 group-hover:border-none transition-all duration-300 ease-in-out"></span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-oq group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </button>
                ) : (
                    <button
                        className="relative text-xl px-[10px] py-[5px] border-2 border-transparent text-oq group"
                        onClick={handleCollapse}
                    >
                        <span className="relative z-10">{t("Close")}</span>
                        <span className="absolute inset-0 border-l-2 border-r-2 group-hover:border-none transition-all duration-300 ease-in-out"></span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-oq group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </button>
                )}
            </div>
        </section >
    );
}

export default ITBerries;
