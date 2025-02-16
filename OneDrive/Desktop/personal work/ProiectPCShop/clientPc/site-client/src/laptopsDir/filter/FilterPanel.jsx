import React from 'react';
import filterIcon from '../filter/filterAssets/filter.svg';
import "../filter/filterPanelStyle.css";

function FilterPanel({ price, laptopType, rating, processorType, videoCardType, onFilterChange }) {
  const handlePriceChange = (e) => {
    onFilterChange(e.target.value, laptopType, rating, processorType, videoCardType);
  };

  const handleLaptopTypeChange = (e) => {
    onFilterChange(price, e.target.value, rating, processorType, videoCardType);
  };

  const handleRatingChange = (e) => {
    onFilterChange(price, laptopType, e.target.value, processorType, videoCardType);
  };

  const handleProcessorTypeChange = (e) => {
    onFilterChange(price, laptopType, rating, e.target.value, videoCardType);
  };

  const handleVideoCardTypeChange = (e) => {
    onFilterChange(price, laptopType, rating, processorType, e.target.value);
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3 className="filterText">Filter</h3>
        <img className="filter-logo" src={filterIcon} alt="filter Icon" />
      </div>
      <div className="filter-body">
        <div className="price-filter">
          <label>Price: {price}</label>
          <input
            type="range"
            min="600"
            max="5000"
            value={price}
            onChange={handlePriceChange}
          />
          <div className="price-labels">
            <span>600</span>
            <span>5000</span>
          </div>
        </div>

        <div className="dropdown-filter">
          <label>Laptop Type</label>
          <select value={laptopType} onChange={handleLaptopTypeChange}>
            <option value="">Select</option>
            <option value="business">Business</option>
            <option value="gaming">Gaming</option>
          </select>
        </div>

        <div className="rating-filter">
          <label>Minimum Rating</label>
          <input
            type="number"
            min="0"
            max="5"
            step="0.5"
            value={rating}
            onChange={handleRatingChange}
          />
        </div>

        <div className="processor-filter">
          <label>Processor Type</label>
          <select value={processorType} onChange={handleProcessorTypeChange}>
            <option value="">Select</option>
            <option value="Intel">Intel</option>
            <option value="AMD">AMD</option>
          </select>
        </div>

        <div className="video-card-filter">
          <label>Video Card Type</label>
          <select value={videoCardType} onChange={handleVideoCardTypeChange}>
            <option value="">Select</option>
            <option value="NVIDIA">NVIDIA</option>
            <option value="AMD">AMD</option>
            <option value="Intel">Intel</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
