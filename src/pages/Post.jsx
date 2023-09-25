import React, { useState, useEffect } from "react";
import "../assets/css/componentes/card.css";
import { useParams, useNavigate } from "react-router-dom";
import { buscar } from "../api/api";

const Post = ({ url }) => {
  // Definimos un estado local 'post' para almacenar los detalles del post seleccionado.
  const [post, setPost] = useState({});

  // Utilizamos 'useParams' para obtener el parámetro 'id' de la URL que identifica el post seleccionado.
  const { id } = useParams();

  // Utilizamos 'useNavigate' para navegar a otras rutas de la aplicación.
  const navigate = useNavigate();

  // Utilizamos 'useEffect' para cargar los detalles del post cuando el componente se monta o cuando el 'id' cambia.
  useEffect(() => {
    // Llamamos a la función 'buscar' de la API para obtener los detalles del post con el 'id' especificado.
    buscar(`/posts/${id}`, setPost)
      .catch(() => {
        // Si no se encuentra el post, navegamos a la página de "not-found".
        navigate("/not-found");
      });
  }, [id]);

  return (
    // Renderizamos la sección principal que mostrará los detalles del post.
    <main className="container flex flex--center">
      <article className="card post">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="text__card">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;