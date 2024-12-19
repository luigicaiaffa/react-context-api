import { useEffect, useState } from "react";

import { postsContext } from "../../contexts/PostsContext";

import TableRow from "./TableRow";

export default function PostsTable() {
  // * Posts Data
  const { posts } = postsContext();

  const [postsCategory, setPostCategory] = useState([]);

  function fetchPostsCategory() {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        const categories = data.map((post) => ({
          id: post.id,
          category: post.category,
        }));

        const newPostsData = { ...postsCategory, categories };
        console.log(newPostsData);

        setPostCategory(newPostsData);
      });
  }

  useEffect(() => {
    fetchPostsCategory();
  }, []);

  console.log(postsCategory);

  return (
    <>
      <table className="table table-hover table-striped table-bordered">
        {/* Table Head */}
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Titolo</th>
            <th scope="col">Autore</th>
            <th scope="col">Categoria</th>
            <th scope="col">Stato Pubblicazione</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {posts &&
            posts.map((post) => {
              return (
                <TableRow
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                  image={post.image}
                  category={post.category}
                  pubblished={post.pubblished}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
}
