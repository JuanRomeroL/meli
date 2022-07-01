import React from "react";
import logo from "../../assets/shoesLogo.webp";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SearchBox from "../../components/SearchBox";
import stylingProps from "../../interfaces";

function ProductDetail({ className }: stylingProps) {
  return (
    <div className={className}>
      <SearchBox />
      <Breadcrumb />
      <div className="main">
        <div className="row-1">
          <div id="imagen">
            <img src={logo} alt="..." />
          </div>
          <div id="attributes">
            <small>Usado - 14 vendidos</small>
            <h3>Nombre y descripción del producto a ser vendido</h3>
            <h1>
              $45.000<small>75</small>
            </h1>
            <button>Comprar</button>
          </div>
        </div>
        <div>
          <h2>Descripción del producto</h2>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint
            inventore magnam ut laboriosam sed minus? Vitae hic ea similique,
            aspernatur corporis ipsam, illo molestias nisi a quaerat
            reprehenderit voluptate. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Alias officiis aut dignissimos exercitationem quas
            debitis in molestias neque id earum aliquid hic pariatur eos
            incidunt praesentium sapiente dolor, nesciunt sequi! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Corrupti minus,
            ducimus incidunt vero reprehenderit, provident voluptatibus enim
            aut, repellendus dolore eligendi atque repudiandae vitae. Nesciunt
            expedita adipisci ipsa quaerat iusto? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Sed sapiente soluta nostrum quam
            blanditiis, nemo illum placeat nobis exercitationem.
          </small>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
