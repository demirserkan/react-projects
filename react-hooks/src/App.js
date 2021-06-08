import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
  });

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  
  const { data, loading } = useFetch(
    "http://numbersapi.com/" + count + "/trivia"
  );

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <div>{!data ? "loading..." : data}</div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <div>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
};

export default App;
