import { useParams } from "react-router-dom"
import ListPosts from "../components/ListPosts"

const SubCategoria = () => {
    // Obtener el parámetro 'subcategoria' de la URL usando 'useParams' de React Router.
    const { subcategoria } = useParams();

    return (
        // Renderizamos el componente 'ListPosts' para mostrar los posts de la subcategoría actual.
        <ListPosts url={`/posts?subcategoria=${subcategoria}`} />
    );
};

export default SubCategoria