import React, { PropTypes } from 'react';

const RowComponent = (props) => {
  const colorfile = props.item.stocked ? props.item.name : <span style={{ color: 'red' }}>{props.item.name}</span>;
  return (
    <tr>
      <td>{colorfile}</td>
      <td>{props.item.price}</td>
    </tr>
  );
};

RowComponent.propTypes = {
  item: PropTypes.object.isRequired
};

export default RowComponent;
