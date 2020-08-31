import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'

import Menu from './components/menu/Menu'
import MenuSummary from "./components/menuSummary/MenuSummary";
import MenuPreview from './components/menuPreview/MenuPreview'
import useAppHooks from "./useAppHooks";

import { items } from './models'

import { setErrorCreator, setFilterCreator, toggleItemCreator, removeItemCreator, setItemsCreator } from './store'

import "./app.css";

export const App = ({
  selectedItems,
  filteredItems,
  filter,
  isError,
  setErrorCreator,
  setFilterCreator,
  toggleItemCreator,
  removeItemCreator,
  setItemsCreator
}) => {
  useAppHooks({ setItemsCreator, setErrorCreator })
  return (
    <div className="wrapper">
      {isError && <h1> An error </h1>}
      <MenuSummary selectedItems={selectedItems} />
      <div className="container menu-builder">
        <div className="row">
          <Menu filteredItems={filteredItems} filter={filter} setFilter={setFilterCreator} onSelectionToggle={toggleItemCreator} />
          <MenuPreview selectedItems={selectedItems} onItemRemoval={removeItemCreator} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ selectedItems, filteredItems, filter, isError }) => ({
  selectedItems,
  filteredItems,
  isError,
  filter
})

const mapDispatchToProps = {
  setErrorCreator,
  setFilterCreator,
  toggleItemCreator,
  removeItemCreator,
  setItemsCreator
}

App.propTypes = {
  selectedItems: items.isRequired,
  filteredItems: items.isRequired,
  isError: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  setErrorCreator: PropTypes.func.isRequired,
  setFilterCreator: PropTypes.func.isRequired,
  toggleItemCreator: PropTypes.func.isRequired,
  removeItemCreator: PropTypes.func.isRequired,
  setItemsCreator: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
