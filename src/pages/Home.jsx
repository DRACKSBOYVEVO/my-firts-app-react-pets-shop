import ListCategories from "../pages/ListCategories"
import ListPosts from "../components/ListPosts"
import React from 'react';

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">¡Descubre el mundo de las Mascotas!</h2>
      </div>
      <section className="container flex flex--center">
      <ListCategories/>
      <ListPosts url={"/posts"} />
      </section>
    </main>
  );
};

export default Home
