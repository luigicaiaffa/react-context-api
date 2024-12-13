import { createContext, useContext } from "react";

const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const postsData = {
    posts: [
      {
        id: 1,
        title: "Ciambellone",
        author: "Tizio",
        content: "ciambellone classico",
        image: "http://localhost:3000/img/ciambellone.jpeg",
        category: "Dolci",
        pubblished: true,
      },
      {
        id: 2,
        title: "Cracker alla Barbabietola",
        author: "Tizio",
        content: "cracker alla barbabietola ai 5 semi",
        image: "http://localhost:3000/img/cracker_barbabietola.jpeg",
        category: "Snack",
        pubblished: true,
      },
      {
        id: 3,
        title: "Pane Fritto Dolce",
        author: "Tizio",
        content: "pane fritto con aggiunta di zucchero",
        image: "http://localhost:3000/img/pane_fritto_dolce.jpeg",
        category: "Dolci",
        pubblished: true,
      },
      {
        id: 4,
        title: "Rigatoni alla barbabietola",
        author: "Tizio",
        content: "rigatoni con crema di barbabietola e granella di pistacchi",
        image: "http://localhost:3000/img/pasta_barbabietola.jpeg",
        category: "Primi",
        pubblished: true,
      },
      {
        id: 5,
        title: "Torta Paesana",
        author: "Tizio",
        content: "torta al cioccolato con mandorle",
        image: "http://localhost:3000/img/torta_paesana.jpeg",
        category: "Dolci",
        pubblished: true,
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
