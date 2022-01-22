import "./Home.css";

const CategoryListItem = ({ cat }) => {
  return (
    <tr>
      <td>{cat.category}</td>
      <td>
        {/* <Link to={"/edit/" + props.id}>Edit</Link> |
        <button
          // href="/view"
          onClick={() => {
            props.deleteRecord(props.id);
          }}
        >
          Delete
        </button> */}
        {cat.value}
      </td>
    </tr>
  );
};

export default CategoryListItem;
