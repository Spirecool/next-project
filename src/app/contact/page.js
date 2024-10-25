'use client'

import { useRouter} from "next/navigation";

export default function Contact() {
    const router = useRouter();
    const handleSendContactForm = () => {
        console.log('Formulaire de contact envoyé')
        // Rediriger l'utilisateur vers l'accueil
        router.push('/');
    }
    return (
        <>
            <h1> Page de contact </h1>
            <p> Laissez-nous un message</p>
            <button onClick = { handleSendContactForm }>
                Valider
            </button>
        </>
    )
}

