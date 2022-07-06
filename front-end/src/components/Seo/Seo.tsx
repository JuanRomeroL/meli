/*NOTE: This component doesn't perform directly over UI, instead of that modifies 
some meta tags which are commonly used by some SEO crawlers such as Google Search Console */

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
