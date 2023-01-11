import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const CategoriesApi = () => {
  let [Categories, SetCategories] = useState([{ id: "", name: "" }]);

  useEffect(() => {
    fetch(`http://localhost:5286/Category`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => SetCategories(response.categories));
  }, []);

  return (
    <div className="dropdown-drop">
      {Categories.map((category) => (
        <>
          <a
            href={`/events/category/${category.id}`}
            className="dropdown-categories"
          >
            {category.name}
          </a>
        </>
      ))}
    </div>
  );
};
export default CategoriesApi;
