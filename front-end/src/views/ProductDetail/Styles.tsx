import styled from "styled-components";
import ProductDetail from "./ProductDetail";

const ProductDetailStyled = styled(ProductDetail)`
  background-color: #eeeeee;

  .main {
    margin: 10px 7%;
    padding: 10px;
    background-color: #ffff;
  }

  .row-1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    > #imagen {
      flex-grow: 1;

      img {
        width: 100%;
      }
    }

    #attributes {
      width: 226px;
      min-width: 226px;
      margin: 15px;

      > button {
        width: 100%;
        padding: 10px 20px;
        border: 0;
        border-radius: 5px;
        background-color: #3583f1;
        color: white;
      }
    }
  }

  @media (min-width: 700px) {
    .row-1 {
      flex-direction: row;
    }
  }
`;

export default ProductDetailStyled;
