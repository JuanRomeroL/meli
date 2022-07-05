import React from "react";
import { Helmet } from "react-helmet";

function Seo({ title, description }: any) {
  return (
    <Helmet>
      <title>
        {title} {"| Mercado Libre"}
      </title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Seo;
