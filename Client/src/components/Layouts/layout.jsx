import react from 'react';
import Nav from './Header';
import Footer from './Footer';
import { Helmet } from "react-helmet";

import { Toaster } from "react-hot-toast";

const Layout = ({children , title, description, keywords, author}) => {

    return(
        <>
    <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />
        <title>{title}</title>
    </Helmet>

    <Nav></Nav>
        <main>
    <Toaster />

    {children}
    </main>
    <Footer/>

        </>
    )
}


Layout.defaultProps = {
    title: "Kart_el",
    description: "Mern Stack",
    keywords: "mern, stack, react, node",
    author: "Rocky",
}


export default Layout;