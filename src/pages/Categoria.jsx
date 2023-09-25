import { useState, useEffect } from 'react'
import "../assets/css/blog.css"
import { buscar } from '../api/api'
import ListCategories from '../pages/ListCategories'
import ListPosts from '../components/ListPosts'
import SubCategoria from './SubCategoria'
import { useParams, Routes, Route, Link, useResolvedPath } from 'react-router-dom'

const Categoria = () => {
    // Estado local para almacenar las subcategorías de la categoría actual.
    const [subcategorias, setSubcategorias] = useState([]);
    
    // Obtener el parámetro 'id' de la URL usando 'useParams' de React Router.
    const { id } = useParams();

    // Obtener la URL resuelta actual.
    const url = useResolvedPath("").pathname;

    // Utilizamos 'useEffect' para cargar las subcategorías cuando el 'id' cambia.
    useEffect(() => {
        // Realizamos una solicitud a la API para obtener las subcategorías de la categoría actual.
        buscar(`/categorias?id=${id}`, (response) => {
            setSubcategorias(response[0].subcategorias);
        });
    }, [id]);

    return (
        <>
            <div className='container'>
                <h2 className='title-page'>Pet Noticias</h2>
            </div>
            
            {/* Renderizamos el componente 'ListCategories' para mostrar la lista de categorías. */}
            <ListCategories />

            <ul className='category-list container flex'>
                {
                    subcategorias.map(subcategoria => (
                        <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                            {/* Enlazamos a las subcategorías usando 'Link' de React Router. */}
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            
            <Routes>
                {/* Ruta para mostrar los posts de la categoría actual. */}
                <Route path='/' element={<ListPosts url={`/posts?categoria=${id}`} />} />
                
                {/* Ruta para mostrar las subcategorías. */}
                <Route path='/:subcategoria' element={<SubCategoria />} />
            </Routes>
        </>
    );
}

export default Categoria