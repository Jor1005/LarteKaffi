import React from "react";
import Nav from "../../componentes/nav";
import "./blog.css"; 

function Blog() {
  return (
    <section className="blog">
      <Nav />
      <section className="container-main">
      <div className="cards">
        <img src="img/blog 2.png" alt="Imagen de blog 1" />
        <h1>Blog 1</h1>
        <p>Aqui ira un texto acerca de esta carta, pues tiene que ser lo suficientemente largo como para que ya tu sae</p>
      </div>
      <div className="cards">
        <img src="img/latte.png" alt="Imagen de blog 2" />
        <h1>Blog 2</h1>
        <p>Aqui ira un texto acerca de esta carta, pues tiene que ser lo suficientemente largo como para que ya tu sae</p>
      </div>
      <div className="cards">
        <img src="img/blog 3.png" alt="Imagen de blog 3" />
        <h1>Blog 3</h1>
        <p>Aqui ira un texto acerca de esta carta, pues tiene que ser lo suficientemente largo como para que ya tu sae</p>
      </div>
      </section>   
      </section>

  );
}

export default Blog;