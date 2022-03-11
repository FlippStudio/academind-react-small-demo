import PropTypes from "prop-types";

const Todo = ({ title, onClick }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={onClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

Todo.defaultProps = {
  title: "Default Title",
};

Todo.propTypes = {
  title: PropTypes.string,
};

export default Todo;
