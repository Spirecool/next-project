import Link from 'next/link'; // Importation du composant Link de Next.js

export default function Header() {
    return (
        <>
            <header className="bg-dark py-3">
                <nav className="container">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link href="/" className="nav-link text-white">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link text-white">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog" className="nav-link text-white">Blog</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
