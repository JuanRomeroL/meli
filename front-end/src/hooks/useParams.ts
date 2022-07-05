const useParams = (queryString: string) => {
  const querySearch = new URLSearchParams(queryString).get("q");
  return querySearch || "";
};

export default useParams;
