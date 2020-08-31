import React from "react";
import PropTypes from "prop-types";

import Item from "../item/Item";

import { items } from '../../models'

const Menu = ({ filteredItems, filter, setFilter, onSelectionToggle }) => (
  <div className="col-4">
    <div className="filters">
      <input
        className="form-control"
        id="filter"
        placeholder="Name"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
    <ul className="item-picker">
      {filteredItems.map((item) => (
        <Item
          {...item}
          key={item.id}
          isSelectable
          onSelect={() => onSelectionToggle(item.id)}
        />
      ))}
    </ul>
  </div>
);

Menu.propTypes = {
  filteredItems: items.isRequired,
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  onSelectionToggle: PropTypes.func.isRequired
};

export default Menu;
