function Popup(props) {
  const {
    editData,
    handleInputChange,
    handleUpdate,
    setEditData,
    setIsEditing,
  } = props;

  return (
    <div className="popup">
      <h3>Edit BMI record</h3>
      <label>
        Date
        <input
          type="date"
          name="date"
          value={editData.date}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Height(m)
        <input
          type="number"
          name="height"
          value={editData.height}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Weight(m)
        <input
          type="number"
          name="weight"
          value={editData.weight}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleUpdate}>Update</button>
      <button
        onClick={() => {
          setEditData({ _id: "", date: "", height: "", weight: "" });
          setIsEditing(false);
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default Popup;
