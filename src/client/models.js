import PropTypes from "prop-types";

export const items = PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        dietaries: PropTypes.arrayOf(PropTypes.string),
        isSelected: PropTypes.bool,
    })
)