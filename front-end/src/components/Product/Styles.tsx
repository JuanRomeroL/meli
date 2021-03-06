import styled from "styled-components";
import Product from "./Product";

const StyledProduct = styled(Product)`
  margin: 15px;
  display: flex;
  flex-direction: column;

  .col-1 {
    display: inherit;
    flex-direction: inherit;
  }

  .image {
    width: 200px;
    height: 200px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 100%;
    max-height: 200px;
    border-radius: 2px;
  }

  .row-1 {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  h3 {
    margin: 0;
  }

  #free-shipping-enabled {
    background-color: #2a9d58;
    width: 12px;
    height: 12px;
    margin: 8px;
    border-radius: 50%;
  }

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;

    .col-1 {
      flex-direction: inherit;
    }
  }
`;

export default StyledProduct;
