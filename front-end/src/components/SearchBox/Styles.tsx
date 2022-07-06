import styled from "styled-components";
import SearchBox from "./SearchBox";

const SearchBoxStyled = styled(SearchBox)`
  padding: 20px 5%;
  background-color: #fff159;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 20px;
  }

  form {
    width: 100%;
    display: inherit;
    justify-content: space-between;
    margin-left: 15px;
    background-color: #ffffff;
    border: 0 rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    font-size: 16px;
  }

  input {
    width: 100%;
    outline: 0;
    border: 0;
    margin: 10px;
  }

  button {
    padding: 5px 10px;
    outline: 0;
    border: 0;
    background-color: #ebecee;
  }
`;

export default SearchBoxStyled;
