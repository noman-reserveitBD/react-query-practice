import React from "react";
import axios from "../axiosInstance";

const Home = () => {
  // Display loding text or sprinter on display.
  const [loading, isLoading] = React.useState(true);
  // data store from server.
  const [data, setData] = React.useState([]);
  console.log(data);

  React.useEffect(() => {
    // return a promise
    axios
      .get("/posts")
      //   .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        isLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(data);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <h1>Home compoent</h1>
      {data?.data.map((data) => (
        <>
          <h1>{data.title}</h1>
        </>
      ))}
    </div>
  );
};

export default Home;
