import React from "react";
import Menu from './components/menu/Menu'
import MenuSummary from "./components/menuSummary/MenuSummary";
import MenuPreview from './components/menuPreview/MenuPreview'
import useAppHooks from "./useAppHooks";

import "./app.css";

export default () => {
  const {
    error,
    filter,
    setFilter,
    filteredItems,
    onSelectionToggle,
    selectedItems,
    onItemRemoval,
  } = useAppHooks();
  return (
    <div className="wrapper">
      {error && <h1>An error loading api data occured</h1>}
      <MenuSummary selectedItems={selectedItems} />
      <div className="container menu-builder">
        <div className="row">
          <Menu filteredItems={filteredItems} filter={filter} setFilter={setFilter} onSelectionToggle={onSelectionToggle} />
          <MenuPreview selectedItems={selectedItems} onItemRemoval={onItemRemoval} />
        </div>
      </div>
    </div>
  );
};
