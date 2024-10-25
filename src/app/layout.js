

import Header2 from "./components/Header2";
// import Footer, {LogosFooter} from "./components/Footer";
import Footer from "./components/Footer";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import '../../globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <Head> 
                <Link rel="preconnect" href="https://fonts.googleapis.com"/>
                <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
                <Link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

            </Head>
            <body className="d-flex flex-column min-vh-100">
                <Header2 />
                <main className="flex-grow-1">{children}</main>
                <Footer />
                {/* <LogosFooter/> */}
            </body>
        </html>
    );
}



