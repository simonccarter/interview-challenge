import React from "react";
import PropTypes from "prop-types";

import DietaryIcon from "../icon/Icon";

const Item = ({
  name,
  dietaries,
  onSelect,
  isSelectable,
  isSelected,
  isRemovable,
  onRemove,
}) => (
    <li className="item">
      <h2>{name}</h2>
      {isSelectable && (
        <button onClick={onSelect}>{isSelected ? "deselect" : "select"}</button>
      )}
      <p>
        {dietaries.map((dietary) => (
          <DietaryIcon text={dietary} key={dietary} />
        ))}
      </p>
      {isRemovable && (
        <button className="remove-item" onClick={onRemove}>
          x
        </button>
      )}
    </li>
  );

Item.propTypes = {
  name: PropTypes.string.isRequired,
  dietaries: PropTypes.arrayOf(PropTypes.string).isRequired,
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  selectable: PropTypes.bool,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func,
};

export default Item;
