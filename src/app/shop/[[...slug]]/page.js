export default function Shop({ params }) {
    if (params.slug?.length === 2) {
        return (
            <h1> Catégorie : {params.slug[0]} / {params.slug[1]}</h1>
        )
    }
        else if(params.slug?.length === 1) {
            return <h1> Catégorie : {params.slug[0]} </h1>
        }
        return (
            <h1> Page d'acceuil du Magasin </h1>
        )
}

