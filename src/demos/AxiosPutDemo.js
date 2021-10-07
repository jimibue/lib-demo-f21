import React from "react";
import useAxios from "axios-hooks";
import { useForm } from "react-hook-form";

// we have our own us axiosOnMount => data, loading, error, we can only use on mount

// use axios-hooks see if we can do somerthing similiar, but post,put (call just not on mount)

const user = {
  data: {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  support: {
    url: "https://reqres.in/#support-heading",
    text: "To keep ReqRes free, contributions towards server costs are appreciated!",
  },
};

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // what es6 thing going here?
  } = useForm();

  const [{ data: putData, loading, error }, excutePut] = useAxios(
    {
      url: "https://reqres.in/api/users/1",
      method: "POST",
    },
    { manual: true }
  );

  const onSubmit = (data) => {
    console.log(data);
    excutePut({
      data: {
        ...user.data,
        ...data,
        updatedAt: new Date().toISOString(),
        newAttribute: "yo",
      },
    });
  };

  const renderUser = () => {
    if (error) return <p>Error</p>;
    if (loading) return <p>Loading</p>;
    if (putData)
      return (
        <pre>
          <p>this is the putData</p>
          <code>{JSON.stringify(putData)}</code>
        </pre>
      );
    return <pre>update yo</pre>;
  };
  return (
    <div>
      <h1>axios put</h1>
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <p>favorite food</p>
          <input defaultValue="test" {...register("favorite_food")} />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div>
          <p>age</p>
          <input {...register("age", { required: true, min: 18 })} />
          {/* errors will return when field validation fails  */}
          {errors?.age?.type === "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          {errors?.age?.type === "min" && (
            <span style={{ color: "red" }}>Must be 18 or older</span>
          )}
          <div>
            <p>email</p>
            <input
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors?.email?.type === "required" && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
            {errors?.email?.type === "pattern" && (
              <span style={{ color: "red" }}>Not a valid email</span>
            )}
          </div>
        </div>
        <input type="submit" />
      </form>
      {renderUser()}
    </div>
  );
};
