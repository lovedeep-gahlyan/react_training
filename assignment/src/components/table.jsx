import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DataTable() {
  const postData = useSelector((state) => state.postData);
  return (
    <table>
      <tbody>
        <tr>
          <td>Id</td>
          <td>User Id</td>
          <td>Title</td>
        </tr>
        {postData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.userId}</td>
            <td>{item.title}</td>
            <td>
              {/* <Link to="/edit-form"> */}
              <button>Edit</button>
              {/* </Link> */}
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
