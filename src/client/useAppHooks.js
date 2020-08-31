import React, { useState, useEffect } from "react";

const useAppHooks = () => {
  const [items, setItems] = useState([]); // original items retrieved from api. Kept as used to reset filtered items on filter value clear
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  // load initial list of items
  useEffect(() => {
    const fetchItems = async () => {
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      };

      try {
        const data = await fetch("/api/items", options);
        const items = await data.json();
        const mappedItems = items.items.map((item) => ({
          ...item,
          isSelected: false,
        }));
        setItems(mappedItems);
        setFilteredItems(mappedItems);
      } catch (err) {
        setError(true);
      }
    };

    fetchItems();
  }, [setItems]);

  // filter items on filter value change  
  useEffect(() => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [filter, items]);

  const onSelectionToggle = (id) => () => {
    const selectedItem = items.find((item) => item.id === id);
    const isSelected = !!selectedItems.find((item) => item.id === id);
    selectedItem.selected = !isSelected;
    setSelectedItems(items.filter((item) => item.selected));
  };

  const onItemRemoval = (id) => () => {
    const newSelectedItems = selectedItems.filter((item) => item.id !== id);
    const newItems = items.filter((item) => item.id !== id);
    setSelectedItems(newSelectedItems);
    setItems(newItems);
  };

  return { error, filter, setFilter, filteredItems, selectedItems, onSelectionToggle, onItemRemoval };
};

export default useAppHooks;
