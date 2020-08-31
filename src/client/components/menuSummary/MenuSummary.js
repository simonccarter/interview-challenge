import React from "react";
import { items } from '../../models'

export const countItemsMatchingDietaryRequirement = (selectedItems) => (requirement) =>
  selectedItems.filter((item) => item.dietaries.includes(requirement)).length;

const MenuSummary = ({ selectedItems }) => (
  <div className="menu-summary">
    <div className="container">
      <div className="row">
        <div className="col-6 menu-summary-left">
          <span>{selectedItems.length} items</span>
        </div>
        <div className="col-6 menu-summary-right">
          {countItemsMatchingDietaryRequirement(selectedItems)("ve")}x{" "}
          <span className="dietary">ve</span>
          {countItemsMatchingDietaryRequirement(selectedItems)("v")}x{" "}
          <span className="dietary">v</span>
          {countItemsMatchingDietaryRequirement(selectedItems)("n!")}x{" "}
          <span className="dietary">n!</span>
        </div>
      </div>
    </div>
  </div>
);


MenuSummary.propTypes = {
  selectedItems: items.isRequired,
};

export default MenuSummary;
