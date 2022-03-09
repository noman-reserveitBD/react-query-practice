import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:3004/superheroes");
};

const SuperHerosRQ = () => {
  const { isLoading, isError, error, data, refetch } = useQuery(
    "superheros",
    fetchSuperHeros,
    {
      cacheTime: 30000,
      staleTime: 0,
      enabled: false,
      // staleTime: 10000,
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true,
    }
  );
  // console.log(data);

  if (isLoading) {
    return <h2>Loading.......</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>React Query super hero page</h2>
      {data?.data.map((d) => (
        <>
          <h1>{d.name}</h1>
        </>
      ))}
      <button onClick={refetch}>refetch data</button>
    </div>
  );
};

export default SuperHerosRQ;
