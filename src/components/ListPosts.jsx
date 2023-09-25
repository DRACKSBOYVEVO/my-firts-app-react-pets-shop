import React, { useState, useEffect } from "react";
import "../assets/css/componentes/card.css";
import { buscar } from "../api/api";
import { Link } from "react-router-dom";

// Función que renderiza un elemento de la lista de publicaciones.
const renderPost = (post) => {
  const { id, title, metadescription, categoria } = post;
  return (
    <Link
      to={`/posts/${id}`}
      className={`post__card post-card--${categoria}`}
      key={id}
    >
      <article>
        <h3 className="post-card__title">{title}</h3>
        <p className="post-card__meta">{metadescription}</p>
      </article>
    </Link>
  );
};

const ListPosts = ({ url }) => {
  // Definimos un estado local 'posts' para almacenar las publicaciones del blog.
  const [posts, setPosts] = useState([]);

  // Utilizamos useEffect para cargar las publicaciones cuando el componente se monta o cuando la URL cambia.
  useEffect(() => {
    // Llamamos a la función 'buscar' de la API, que realiza una solicitud GET a la URL proporcionada
    // y actualiza el estado 'posts' con los datos recibidos del servidor.
    buscar(url, setPosts);
  }, [url]); // El efecto se ejecuta cada vez que la URL cambia.

  return (
    // Renderizamos una sección que contendrá las publicaciones del blog.
    <section className="posts container">
      {posts.map((post) => renderPost(post))}
    </section>
  );
};

export default ListPosts;