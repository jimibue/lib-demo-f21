import React from "react";
import useAxios from "axios-hooks";

// we have our own us axiosOnMount => data, loading, error, we can only use on mount

// use axios-hooks see if we can do somerthing similiar, but post,put (call just not on mount)

export default () => {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://reqres.in/api/users?delay=1"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <button onClick={refetch}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
