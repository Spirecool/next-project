'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// on crée un tableau d'objets, représentant les entrées du menu
const navLinks = [
  {
    name: "Accueil", href: "/"
  },
  {
    name: "Blog", href: "/blog"
  },
  {
    name: "Produits", href: "/produits"
  },
  {
    name: "Contact", href: "/contact"
  }
];

const Header2 = () => {
  const pathname = usePathname();

  return (
    <ul>
      {navLinks.map((link) => {
        // Vérification pour savoir si le lien est actif
        const isActive = link.href === pathname || (link.href === "/" && pathname === "/");
        
        return (
          <li key={link.name}>
            <Link href={link.href} className={isActive ? "text-danger" : "text-primary"}> 
              {link.name} 
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Header2;

