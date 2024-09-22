import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Loader from '../utils/Loader';

const Layout = ({ children }) => {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    }, [])

    return (
        <>
            {loader ? (<Loader />) : (<>
                <Header />

                {children}

                <Footer />
            </>)}
        </>
    )
}

export default Layout