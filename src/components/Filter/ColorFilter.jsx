import React from "react";
import { useFilter } from "../../contexts/filter-context";

const ColorFilter = () => {
  const { filterDispatch } = useFilter();

  const handleColorChange = (e, option) => {
    let check = e.target.checked; //true or false
    filterDispatch({
      type: "COLOR",
      payload: {
        option,
        check,
      },
    });
  };

  return (
    <div className="filter-option">
      <div className="filter-section-title">Color</div>
      <div className="filter-section-options">
        <label className="filter-label">
          <input
            className="input"
            type="checkbox"
            value="Red"
            onChange={(e) => handleColorChange(e, "Red")}
          />
          <span>red</span>
        </label>
        <label className="filter-label">
          <input
            className="input"
            type="checkbox"
            value="Blue"
            onChange={(e) => handleColorChange(e, "Blue")}
          />
          <span>Blue</span>
        </label>
        <label className="filter-label">
          <input
            className="input"
            type="checkbox"
            value="Green"
            onChange={(e) => handleColorChange(e, "Green")}
          />
          <span>green</span>
        </label>
      </div>
    </div>
  );
};

export default ColorFilter;
