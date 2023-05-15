import React from 'react';


const TypeFilter = () => {
  return (
    <div className="filter-option">
    <div className="filter-section-title">Type</div>
    <div className="filter-section-options">
      <label className="filter-label" >
        <input className="input" type="checkbox" value="hoodie" />
        <span>hoodie</span>
      </label>
      <label className="filter-label" >
        <input className="input" type="checkbox" value="polo" />
        <span>polo</span>
      </label>
      <label className="filter-label" >
        <input className="input" type="checkbox" value="round" />
        <span>round</span>
      </label>
        </div>
      </div>
  );
};

export default TypeFilter;
