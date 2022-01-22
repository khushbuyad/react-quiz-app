import "./Home.css";
import Categories from "../../Data/Categories";
import { useState } from "react";
import { useNavigate } from "react-router";
// import CategoryListItem from "./CategoryListItem";
const Home = ({ fetchQuestions }) => {
  const history = useNavigate();
  const [category, setCategory] = useState(0);
  // const handleState = async (val) => {
  //   setCategory(val);
  // };
  const handleCategory = (val) => {
    setCategory(val);
    fetchQuestions(val);
    history("quiz");
  };
  return (
    <div className="content">
      <div className="category-container">
        <span style={{ fontSize: "30", color: "white" }}>Your Dashboard</span>
        <table style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Categories</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Categories.map((cat) => {
              return (
                <tr
                  onClick={() => {
                    handleCategory(cat.value);
                  }}
                  key={cat.category}
                  value={cat.value}
                  // onChange={() => {

                  //   handleCategory(cat.value);
                  // }}
                >
                  <td>{cat.category}</td>
                  <td>{cat.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
