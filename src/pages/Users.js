import { SentimentSatisfied } from "@material-ui/icons";
import React, { useContext, useEffect } from "react";
import axios from "axios";

import { Context } from "../store/Store";

const Users = (props) => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    fetch(
      "https://nuxt-dashboard-25a89.firebaseio.com/nuxt-dashboard-25a89.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const arr = [];
        for (let key in data) {
          arr.push(data[key]);
        }
        dispatch({ type: "SET_POSTS", payload: arr });
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error });
      });
  }, []);

  const addPost = (e) => {
    const newPost = {
      name: "Stefan",
      age: 26,
    };
    fetch(
      "https://nuxt-dashboard-25a89.firebaseio.com/nuxt-dashboard-25a89.json",
      {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => {
        const postsData = response.data;
        dispatch({ type: "ADD_POST", payload: newPost });
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error });
      });
  };

  // let posts = <p>Loading...</p>;

  // if (state.error) {
  //   posts = (
  //     <p>
  //       Something went wrong: <span>{state.error}</span>
  //     </p>
  //   );
  // }

  // if (!state.error && state.posts) {
  //   posts = state.posts.map((post) => {
  //     return <li key={post.id}>{post.title}</li>;
  //   });
  // }

  return (
    <div>
      {JSON.stringify(state.posts.length)}

      <button onClick={() => addPost()}>get users</button>
    </div>
  );
};

export default Users;
