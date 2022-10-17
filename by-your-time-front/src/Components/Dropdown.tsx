import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css"

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
    <div className="dropdown">
      {Categories.map((category) => (
        <>
          <a key={category.id} href={`/events/category/${category.id}`}>
            <br />
            {category.name}
          </a>
        </>
      ))}
    </div>
  );
};
export default CategoriesApi;


// href={`/category/${category.id}`}