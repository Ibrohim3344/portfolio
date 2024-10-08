import React, { useState, useEffect } from 'react';
import Div from '../../utils/Div';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Button } from "@material-tailwind/react";
import Btn from '../../Btn';

const Contact = () => {
    const { t } = useTranslation("con");

    const [formData, setFormData] = useState({
        name: '',
    });

    const [Phone, setPhone] = useState({
        number: '+998',
    });

    const [Email, setEmail] = useState({
        email: '',
    });

    const [Massage, setMassage] = useState({
        massage: '',
    });

    const BOT_TOKEN = "7843884835:AAFydwGBRtbZnj4GksmuOgrm76Txuu0Yiy4";
    const MY_ID = "1672058773";

    const SendMessageBot = (e) => {
        e.preventDefault();

        if (!formData.name || !Phone.number || !Email.email || !Massage.massage) {
            alert(t("Please fill in all fields before submitting!"));
            return;
        }

        let message = "Customer:\n";

        if (formData.name) {
            message += `Name: ${formData.name}\n`;
        }
        if (Phone.number) {
            message += `Phone number: ${Phone.number}\n`;
        }
        if (Email.email) {
            message += `Email: ${Email.email}\n`;
        }
        if (Massage.massage) {
            message += `Message: ${Massage.massage}\n`;
        }

        axios
            .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                chat_id: MY_ID,
                text: message,
            })
            .then((response) => {
                console.log("Message sent:", response.data);

                setFormData({ name: '' });
                setPhone({ number: '+998' });
                setEmail({ email: '' });
                setMassage({ massage: '' });
            })
            .catch((error) => {
                console.error("Error sending message:", error);
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePhoneChange = (e) => {
        let phoneNumber = e.target.value;

        if (!phoneNumber.startsWith('+998')) {
            phoneNumber = '+998' + phoneNumber.replace(/[^0-9]/g, '').substring(0, 9);
        }

        setPhone({
            ...Phone,
            number: phoneNumber,
        });
    };

    const handleEmailChange = (e) => {
        setEmail({
            ...Email,
            email: e.target.value,
        });
    };

    const handleMassageChange = (e) => {
        setMassage({
            ...Massage,
            massage: e.target.value,
        });
    };

    return (
        <section className='bg-gray py-[50px] dark:bg-qora'>
            <div className='container mx-auto'>
                <div className='text-center flex flex-col items-center gap-[30px]'>
                    <Div text={t("con")} />
                    <p className='text-qora dark:text-oq'>
                        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra.
                        <br /> In vel urna quis libero viverra facilisis ut ac est.
                    </p>
                </div>

                <div className='w-full max-w-[700px] mx-auto py-[50px] dark:bg-gray-800 p-6 rounded-lg'>
                    <form className='text-black dark:text-white flex flex-col gap-[20px]' onSubmit={SendMessageBot}>

                        {/* Name Field */}
                        <div className="relative py-[10px]">
                            <input
                                placeholder={t("yourn")}
                                type="text"
                                name="name"
                                className='w-full text-2xl border-b-2 border-gray-300 dark:border-gray-600 bg-transparent dark:bg-gray-800 p-4 focus:outline-none placeholder-transparent peer'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label className="absolute left-0 top-1 text-gray-400 dark:text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-lg transition-all">
                                {t("yourn")}
                            </label>
                        </div>

                        {/* Email Field */}
                        <div className="relative py-[10px]">
                            <input
                                placeholder={t("email")}
                                type="email"
                                name="email"
                                className='w-full text-2xl border-b-2 border-gray-300 dark:border-gray-600 bg-transparent p-4 focus:outline-none placeholder-transparent peer'
                                value={Email.email}
                                onChange={handleEmailChange}
                                required
                                style={{
                                    minWidth: '0',
                                    width: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            />
                            <label className="absolute left-0 top-1 text-gray-400 dark:text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-lg transition-all">
                                {t("email")}
                            </label>
                        </div>

                        {/* Phone Field */}
                        <div className="relative py-[10px]">
                            <input
                                placeholder={t("phone")}
                                type="tel"
                                name="phone"
                                className='w-full text-2xl border-b-2 border-gray-300 dark:border-gray-600 bg-transparent p-4 focus:outline-none placeholder-transparent peer'
                                value={Phone.number}
                                onChange={handlePhoneChange}
                            />
                            <label className="absolute left-0 top-1 text-gray-400 dark:text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-lg transition-all">
                                {t("phone")}
                            </label>
                        </div>

                        {/* Message Field */}
                        <div className="relative py-[10px]">
                            <input
                                placeholder={t("mass")}
                                name="message"
                                className='w-full text-2xl border-b-2 border-gray-300 dark:border-gray-600 bg-transparent p-4 focus:outline-none placeholder-transparent peer'
                                value={Massage.massage}
                                onChange={handleMassageChange}
                                rows="4"
                                required
                            />
                            <label className="absolute left-0 top-1 text-gray-400 dark:text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-lg transition-all">
                                {t("mass")}
                            </label>
                        </div>

                        <div className='flex items-center justify-center'>
                            <button className="relative text-xl px-[10px] py-[5px] border-2 font-semibold border-transparent dark:text-oq text-qora group" type='submit'>
                                <span className="relative z-10">{t("sub")}</span>
                                <span className="absolute inset-0 border-l-2 border-r-2 group-hover:border-none transition-all duration-300 ease-in-out"></span>
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] dark:bg-oq bg-qora group-hover:w-full transition-all duration-300 ease-in-out"></span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
