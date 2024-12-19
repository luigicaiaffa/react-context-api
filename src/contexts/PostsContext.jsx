import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const postsData = {
    posts: [
      {
        id: 1,
        title: "Ciambellone",
        author: "Tizio",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque blanditiis, magnam nihil iste laudantium illo.",
        image: "./src/assets/img/ciambellone.jpeg",
        category: "Dolci",
        pubblished: true,
      },
      {
        id: 2,
        title: "Cracker alla Barbabietola",
        author: "Tizio",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque blanditiis, magnam nihil iste laudantium illo.",
        image: "./src/assets/img/cracker_barbabietola.jpeg",
        category: "Snack",
        pubblished: false,
      },
      {
        id: 3,
        title: "Pane Fritto Dolce",
        author: "Tizio",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque blanditiis, magnam nihil iste laudantium illo.",
        image: "./src/assets/img/pane_fritto_dolce.jpeg",
        category: "Dolci",
        pubblished: true,
      },
      {
        id: 4,
        title: "Rigatoni alla barbabietola",
        author: "Tizio",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque blanditiis, magnam nihil iste laudantium illo.",
        image: "./src/assets/img/pasta_barbabietola.jpeg",
        category: "Primi",
        pubblished: true,
      },
      {
        id: 5,
        title: "Torta Paesana",
        author: "Tizio",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque blanditiis, magnam nihil iste laudantium illo.",
        image: "./src/assets/img/torta_paesana.jpeg",
        category: "Dolci",
        pubblished: false,
      },
    ],
  };

  return (
    <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>
  );
};

export const postsContext = () => {
  return useContext(PostsContext);
};
