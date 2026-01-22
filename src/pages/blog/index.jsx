import React from "react";
import Nav from "../../componentes/nav";
import "./blog.css";
import { Helmet } from "react-helmet-async";


function Blog() {
  return (
<>
<Helmet>
        <title>Blog | Larte Kaffi</title>
        <meta
          name="description"
          content="Blog de Larte Kafi"
        />
      </Helmet>
      
    
    </>
  );
}

export default Blog;
