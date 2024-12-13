import PostsTable from "../components/PostsTable";

export default function PostsPage() {
  // #
  // const [postsData, setPostsData] = useState([]);

  // useEffect(() => {
  //   fetchPostsData();
  // }, []);

  // const fetchPostsData = () => {
  //   fetch("http://localhost:3000/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPostsData(data);
  //     });
  // };

  // const fetchDeletePost = (id) => {
  //   fetch(`http://localhost:3000/posts/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res)
  //     .then(() => {
  //       fetchPostsData();
  //     });
  // };

  // const handleDeleteButton = (id) => {
  //   handleClose();
  //   fetchDeletePost(id);
  // };

  return (
    <>
      <div className="container">
        <h1 className="mt-5">Lista dei Post</h1>
        <PostsTable />
        <div className="p-3"></div>
      </div>
    </>
  );
}
