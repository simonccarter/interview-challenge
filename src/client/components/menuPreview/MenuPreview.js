import React from "react";
import PropTypes from "prop-types";

import Item from "../item/Item";

import { items } from '../../models'

const MenuPreview = ({ selectedItems, onItemRemoval }) => (
    <div className="col-8">
        <h2>Menu preview</h2>
        <ul className="menu-preview">
            {selectedItems.map((item) => (
                <Item
                    key={item.id}
                    {...item}
                    isRemovable
                    onRemove={() => onItemRemoval(item.id)}
                />
            ))}
        </ul>
    </div>
)

MenuPreview.propTypes = {
    selectedItems: items.isRequired,
    onItemRemoval: PropTypes.func.isRequired
};

export default MenuPreview;