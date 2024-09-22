import React from 'react'
import { useTranslation } from 'react-i18next';


const Info = () => {
    const { t } = useTranslation("name");

    return (
        <section className='bg-gray py-[50px] dark:bg-qora'>
            <div className='container flex flex-row sm:justify-between justify-center'>
                <div className='flex flex-col sm:items-start items-center gap-[40px]'>
                    <h1 className='text-2xl text-qora dark:text-oq font-bold'>{t("hello")}</h1>

                    <div className='flex flex-col sm:items-start items-center gap-[10px]'>
                        <h1 className='sm:text-6xl sm:text-start text-center text-3xl text-qora dark:text-oq font-semibold'>{t("surname")}</h1>
                        <span className='text-blue-gray-500 sm:text-2xl text-xl'>{t("info")}</span>
                    </div>


                    <div className='flex flex-row gap-[20px]'>
                        <button className='p-2 shadow-sm py-1 bg-siu dark:bg-qora dark:shadow-oq shadow-qora'><i class="fa-brands fa-github dark:text-oq text-2xl"></i></button>
                        <a href="https://t.me/user12310" target='_blank'><button className='p-2 shadow-sm py-1 bg-siu dark:bg-qora dark:shadow-oq shadow-qora'><i class="fa-brands fa-telegram dark:text-oq text-2xl"></i></button></a>
                        <a href="https://www.instagram.com/akmaljonov__i/" target='_blank'><button className='p-2 shadow-sm py-1 bg-siu dark:bg-qora dark:shadow-oq shadow-qora'><i class="fa-brands fa-instagram dark:text-oq text-2xl"></i></button></a>
                    </div>
                </div>

                <div>
                    
                </div>
            </div>
        </section>
    )
}

export default Info