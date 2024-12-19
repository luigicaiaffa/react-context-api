import { NavLink } from "react-router-dom";

export default function TableRow({
  id,
  title,
  author,
  image,
  category,
  pubblished,
  handleShow,
  setSelectedPostId,
}) {
  return (
    <tr>
      <th scope="row">
        <img src={image} alt="img" width="65" />
      </th>
      <td>{title}</td>
      <td>
        <i>&#45; {author}</i>
      </td>
      <td>
        <span className="badge text-bg-primary">{category}</span>
      </td>
      <td>
        {pubblished ? (
          <i className="fa-solid fa-square-check text-success"></i>
        ) : (
          <i className="fa-solid fa-square-xmark text-danger"></i>
        )}
      </td>
    </tr>
  );
}
