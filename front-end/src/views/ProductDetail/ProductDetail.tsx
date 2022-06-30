import React from "react";
import "./ProductDetail.css";
import logo from "../../assets/shoesLogo.webp";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SearchBox from "../../components/SearchBox/SearchBox";

function ProductDetail() {
  return (
    <div className="product-detail">
      <SearchBox />
      <Breadcrumb />
      <div className="detail-area">
        <div className="row-1">
          <img src={logo} alt="..." height={500}></img>
          <div className="product-attrs">
            <small>Usado - 14 vendidos</small>
            <h4>
              Nombre y descripción del producto a ser vendido Nombre y
              descripción del producto a ser vendido Nombre y descripción del
              producto a ser vendido
            </h4>
            <h1>$45.000</h1>
            <button>COMPRAR</button>
          </div>
        </div>
        <div>
          <h3>Descripción del producto</h3>
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
            blanditiis, nemo illum placeat nobis exercitationem. Voluptatum
            numquam officiis cupiditate at perspiciatis vero nam ducimus quaerat
            deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dicta sint inventore magnam ut laboriosam sed minus? Vitae hic ea
            similique, aspernatur corporis ipsam, illo molestias nisi a quaerat
            reprehenderit voluptate. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Alias officiis aut dignissimos exercitationem quas
            debitis in molestias neque id earum aliquid hic pariatur eos
            incidunt praesentium sapiente dolor, nesciunt sequi! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Corrupti minus,
            ducimus incidunt vero reprehenderit, provident voluptatibus enim
            aut, repellendus dolore eligendi atque repudiandae vitae. Nesciunt
            expedita adipisci ipsa quaerat iusto? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Sed sapiente soluta nostrum quam
            blanditiis, nemo illum placeat nobis exercitationem. Voluptatum
            numquam officiis cupiditate at perspiciatis vero nam ducimus quaerat
            deserunt!
          </small>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
