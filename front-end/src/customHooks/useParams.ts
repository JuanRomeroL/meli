import { useLocation } from "react-router-dom";

const useParams = () => {
  const querySearch = new URLSearchParams(useLocation().search).get("q");
  return querySearch;
};

export default useParams;
