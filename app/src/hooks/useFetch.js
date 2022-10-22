import { useQuery } from "react-query";

const fetchData = async ({ queryKey }) => {
  const response = await fetch(queryKey[1]);  
  return await response?.json();
};

const useFetch = (type) => {
  let url = `http://localhost:3000/${type}`;  
  const {data, status } = useQuery(["fetchData", url], fetchData);
  return { data, status};
};

export default useFetch;