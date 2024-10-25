export const generateMetadata = ({ params }) => {
    return { title: `Produit numéro ${params.id}` };
};

export default function ProductDetails({ params }) {
    return <h1> Détail du produit numéro {params.id} </h1>;
}


