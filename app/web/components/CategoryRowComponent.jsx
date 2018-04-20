import React, { PropTypes } from 'react';

const CategoryRowComponent = (props) =>
  <tr>
    <td colSpan="2">
      {props.name}
    </td>
  </tr>;

CategoryRowComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export default CategoryRowComponent;
