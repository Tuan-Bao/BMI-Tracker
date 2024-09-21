import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

function Table(props) {
  const { bmiHistory, handleEdit, handleDelete } = props;

  return (
    <div className="table">
      <h2>BMI History Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Height (m)</th>
            <th>Weight (kg)</th>
            <th>BMI</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bmiHistory.map((item) => (
            <tr key={item._id}>
              <td>{item.date}</td>
              <td>{item.height.toFixed(2)}</td>
              <td>{item.weight.toFixed(2)}</td>
              <td>{item.bmi}</td>
              <td>
                <div className="dropdown">
                  <button className="dropdown-btn">
                    <FontAwesomeIcon icon={faCircleChevronDown} />
                  </button>
                  <div className="dropdown-content">
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
