import React, { useEffect } from "react";

const useAppHooks = ({ setItemsCreator, setErrorCreator }) => {
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
        setItemsCreator(mappedItems);
      } catch (err) {
        console.error(err)
        setErrorCreator(true)
      }
    };

    fetchItems();
  }, []);
};

export default useAppHooks;
