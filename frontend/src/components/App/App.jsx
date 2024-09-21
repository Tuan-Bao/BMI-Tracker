import BmiForm from "../BmiForm/BmiForm";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import getHealthAdvice from "../../utils/advice";
import BmiChart from "../Chart/BmiChart";
import Table from "../Table/Table";
import convertToDate from "../../utils/convertToDate";
import Popup from "../Popup/Popup";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [bmi, setBmi] = useState(null);
  const [date, setDate] = useState(null);
  const [advice, setAdvice] = useState("");
  const [bmiHistory, setBmiHistory] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    _id: "",
    date: "",
    height: "",
    weight: "",
  });

  useEffect(() => {
    fetchBmiHistory();
  }, []);

  const fetchBmiHistory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/bmi");
      const formattedData = response.data.map((item) => ({
        _id: item._id,
        height: item.height,
        weight: item.weight,
        bmi: item.bmi,
        date: new Date(item.date).toLocaleDateString(),
      }));
      setBmiHistory(formattedData);
    } catch (err) {
      console.error("Error when getting BMI history: ", err);
    }
  };

  const formatDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear());

    return `${day}/${month}/${year}`;
  };

  const calculateBmi = () => {
    let heightMeters = heightUnit === "cm" ? height / 100 : height;
    let weightInKg = weightUnit === "pounds" ? weight * 0.453592 : weight;

    const bmiValue = weightInKg / (heightMeters * heightMeters);
    setBmi(bmiValue.toFixed(2));
    setDate(formatDate());
    setAdvice(getHealthAdvice(bmiValue.toFixed(2)));
  };

  const saveBMI = async () => {
    let heightMeters = heightUnit === "cm" ? height / 100 : height;
    let weightInKg = weightUnit === "pounds" ? weight * 0.453592 : weight;

    try {
      await axios.post("http://localhost:5000/api/bmi", {
        height: heightMeters,
        weight: weightInKg,
        bmi: bmi,
        date: date,
      });
      fetchBmiHistory();
    } catch (error) {
      console.error("Error saving BMI: ", error);
    }
  };

  const handleEdit = (item) => {
    setEditData({
      _id: item._id,
      date: convertToDate(item.date),
      height: item.height,
      weight: item.weight,
    });
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/bmi/${editData._id}`,
        editData
      );
      setEditData({ _id: "", date: "", height: "", weight: "" });
      setIsEditing(false);
      fetchBmiHistory();
    } catch (error) {
      console.error("Updating BMI error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bmi/${id}`);
      fetchBmiHistory();
    } catch (error) {
      console.error("Delete BMI error:", error);
    }
  };

  return (
    <div className="container">
      <div className="title">
        <h1>BMI Tracker</h1>
      </div>
      <div className="calculator">
        <BmiForm
          height={height}
          setHeight={setHeight}
          weight={weight}
          setWeight={setWeight}
          heightUnit={heightUnit}
          setHeightUnit={setHeightUnit}
          weightUnit={weightUnit}
          setWeightUnit={setWeightUnit}
          bmi={bmi}
          date={date}
          advice={advice}
          calculateBmi={calculateBmi}
          saveBMI={saveBMI}
        />
        <BmiChart bmiHistory={bmiHistory} />
        <Table
          bmiHistory={bmiHistory}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      {isEditing && (
        <Popup
          editData={editData}
          handleInputChange={handleInputChange}
          handleUpdate={handleUpdate}
          setEditData={setEditData}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default App;
