export const metadata = {
    title: 'Accueil - Mon site',
    description: 'Bienvenue sur la page d\'accueil de notre site web.',
    }

import styles from "./page.module.css";


export default function Home() {
    return (
        <>

            <main className={styles.main}>
                <h1 className={`${styles.title} ${styles.italic}`}> Page d'accueil </h1>
            </main>
        </>
    );
}

