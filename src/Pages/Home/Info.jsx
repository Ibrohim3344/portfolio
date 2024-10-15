import React from 'react';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

const Info = () => {
    const { t } = useTranslation("name");

    

    return (
        <section className='bg-gray py-[50px] dark:bg-qora'>
            <div className='container flex flex-row sm:justify-between justify-center'>
                <div className='flex flex-col sm:items-start items-center gap-[40px]'>
                    <h1 className='text-2xl text-qora dark:text-oq font-bold'>{t("hello")}</h1>

                    <div className='flex flex-col sm:items-start items-center gap-[10px]'>

                        {/* md dan kichik ekranlar uchun animatsiya */}
                        <div className="hidden md:flex">
                            <TypeAnimation
                                className='text-5xl lg:text-5xl xl:text-6xl text-qora dark:text-oq font-semibold'
                                key={localStorage.getItem("language")}
                                sequence={[
                                    t("surname"),
                                    2000,
                                    "",
                                    1000,
                                    t("surname"),
                                    2000,
                                    "",
                                    1000,
                                    () => {
                                        console.log('Sequence completed');
                                    },
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </div>

                        {/* md dan katta ekranlar uchun statik matn */}
                        <span className='flex md:hidden sm:text-start text-center text-5xl lg:text-5xl xl:text-6xl text-qora dark:text-oq font-semibold'>
                            {t("surname")}
                        </span>

                        <span className='text-blue-gray-500 sm:text-2xl text-xl'>{t("info")}</span>
                    </div>

                    <div className='flex flex-row gap-[20px]'>
                        <button className='p-2 shadow-sm py-1 bg-gray dark:bg-qora dark:shadow-oq shadow-qora'>
                            <i className="fa-brands fa-github dark:text-oq text-2xl"></i>
                        </button>
                        <a href="https://t.me/user12310" target='_blank'>
                            <button className='p-2 shadow-sm py-1 bg-gray dark:bg-qora dark:shadow-oq shadow-qora'>
                                <i className="fa-brands fa-telegram dark:text-oq text-2xl"></i>
                            </button>
                        </a>
                        <a href="https://www.instagram.com/akmaljonov__i/" target='_blank'>
                            <button className='p-2 shadow-sm py-1 bg-gray dark:bg-qora dark:shadow-oq shadow-qora'>
                                <i className="fa-brands fa-instagram dark:text-oq text-2xl"></i>
                            </button>
                        </a>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </section>
    );
}

export default Info;
