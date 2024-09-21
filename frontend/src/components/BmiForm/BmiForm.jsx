import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

function BmiForm(props) {
  const {
    height,
    setHeight,
    weight,
    setWeight,
    heightUnit,
    setHeightUnit,
    weightUnit,
    setWeightUnit,
    bmi,
    date,
    advice,
    calculateBmi,
    saveBMI,
  } = props;
  return (
    <>
      <form>
        <div>
          <label>Unit system metric (cm and meters, kg and pounds)</label>
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <div>
            <input
              type="number"
              id="height"
              name="height"
              min="1"
              max="999"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <select
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
            >
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <div>
            <input
              type="number"
              id="weight"
              name="weight"
              min="1"
              max="999"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
            >
              <option value="kg">kg</option>
              <option value="pounds">pounds</option>
            </select>
          </div>
        </div>
        <div>
          <button
            id="bmi-btn"
            className="calculate-btn"
            type="button"
            onClick={calculateBmi}
          >
            <FontAwesomeIcon icon={faCalculator} /> Calculate BMI
          </button>
          <button
            id="save-bmi"
            className="save-bmi"
            type="button"
            onClick={saveBMI}
          >
            <FontAwesomeIcon icon={faFloppyDisk} /> Save Data
          </button>
        </div>
      </form>
      {bmi && (
        <div className="result">
          <h3>Your BMI is: {bmi}</h3>
          <p>{advice}</p>
        </div>
      )}
    </>
  );
}

export default BmiForm;
