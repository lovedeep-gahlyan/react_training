import DataTable from "./table";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../redux/postAction";
import { Link } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <h1>Api's and Redux</h1>
      <Link to="/post">
        <button>Add new Post</button>
      </Link>
      <div>
        <DataTable />
      </div>
    </div>
  );
}

export default HomePage;
