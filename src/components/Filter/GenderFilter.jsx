import { useFilter } from "../../contexts/filter-context";
import React from "react";

const GenderFilter = () => {
  const { filterDispatch } = useFilter();

  const handleGenderChange = (option) => {
    filterDispatch({
      type: "GENDER",
      payload: option,
    });
  };

  return (
    <div className="filter-option">
      <div className="filter-section-title">Gender</div>
      <div className="filter-section-options">
        <label className="filter-label">
          <input
            className="input"
            type="radio"
            name="gender"
            value="all"
            onChange={() => handleGenderChange("all")}
          />
          <span>all</span>
        </label>
        <label className="filter-label">
          <input
            className="input"
            type="radio"
            name="gender"
            value="Men"
            onChange={() => handleGenderChange("Men")}
          />
          <span>male</span>
        </label>
        <label className="filter-label">
          <input
            className="input"
            type="radio"
            name="gender"
            value="Women"
            onChange={() => handleGenderChange("Women")}
          />
          <span>female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderFilter;
