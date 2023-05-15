import React from 'react';


const PriceFilter = () => {
    return (
      <div className="filter-option">
      <div className="filter-section-title">Price</div>
      <div className="filter-section-options">
        <label className="filter-label" >
          <input className="input" type="checkbox" value="0-200" />
          <span>0-200</span>
        </label>
        <label className="filter-label" >
          <input className="input" type="checkbox" value="200-400" />
          <span>200-400</span>
        </label>
        <label className="filter-label" >
          <input className="input" type="checkbox" value="400-600" />
          <span>Roadster</span>
        </label>
          </div>
        </div>
    );
};

export default PriceFilter;
