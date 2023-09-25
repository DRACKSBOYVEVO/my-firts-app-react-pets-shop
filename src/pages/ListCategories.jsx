import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { buscar } from "../api/api";
import "../assets/css/blog.css"

const ListCategories = () => {
    // Definimos un estado local 'categories' para almacenar la lista de categorías.
    const [categories, setCategories] = useState([]);
  
    // Utilizamos 'useEffect' para cargar la lista de categorías cuando el componente se monta.
    useEffect(() => {
      // Llamamos a la función 'buscar' de la API para obtener la lista de categorías.
      buscar('/categorias', setCategories);
    }, []);
  
    return (
      // Renderizamos una lista de categorías en forma de enlaces.
      <ul className="category-list container flex">
        {categories.map(category => (
          <Link to={`/categoria/${category.id}`} key={category.id}>
            <li className={`category-list__category category-list__category--${category.id}`}>
              {category.nombre}
            </li>
          </Link>
        ))}
      </ul>
    );
  };
  
  export default ListCategories;