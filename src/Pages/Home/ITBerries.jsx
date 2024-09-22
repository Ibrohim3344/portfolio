import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ITBerries = () => {
    const { t } = useTranslation("it");
    const [expanded, setExpanded] = useState(false); 

    const handleExpand = () => {
        setExpanded(true); 
    };

    const handleCollapse = () => {
        setExpanded(false); 
    };

    return (
        <section className='py-[100px] bg-toq bg-[url("/public/heroIT.png")] bg-no-repeat md:bg-right bg-top bg-contain'>
            <div className='container text-oq flex flex-col sm:items-start sm:text-start text-center sm:justify-start justify-center items-center gap-[30px]'>
                <h1 className='sm:text-6xl text-3xl'>{t("Berries")}</h1>
                <p>
                    Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros.
                    {expanded && (
                        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque sapien ut tincidunt cursus. Donec accumsan dui nec leo efficitur gravida. Proin lobortis mi nec enim tempor dapibus. Ut non libero et justo dapibus tincidunt. Praesent viverra lorem nec scelerisque accumsan. Aenean aliquet malesuada justo, at fermentum enim interdum sit amet. Mauris vel arcu at nisl mollis efficitur."
                    )}
                </p>
                {!expanded ? ( // Matn kengaytirilmagan bo'lsa, "Read more" buttonini ko'rsatamiz
                    <button 
                        className="relative text-xl px-[10px] py-[5px] border-2 border-transparent text-oq group"
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
