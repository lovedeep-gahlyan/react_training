import { Link } from "react-router-dom";

export default function DataForm() {
  return (
    <div>
      <Link to="/">All Posts</Link>
      <form>
        <label>
          Id
          <input type="number" placeholder="id" />
        </label>
        <label>
          UserId
          <input type="number" placeholder="userId" />
        </label>
        <label>
          Title
          <input type="text" placeholder="title" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
