import React, { PropTypes } from 'react';

import RowComponent from './RowComponent.jsx';
import CategoryRowComponent from './CategoryRowComponent.jsx';

const TableListComponent = (props) => {
  const rows = [];
  let lastCategory = '';
  const filterText = props.filterText;
  const isStockOnly = props.isStockOnly;
  props.data.forEach((item) => {
    if (item.name.indexOf(filterText) >= 0) {
      if (!isStockOnly || (isStockOnly && item.stocked)) {
        if (item.category !== lastCategory) {
          rows.push(<CategoryRowComponent name={item.category} key={item.category} />);
          lastCategory = item.category;
        }
        rows.push(<RowComponent item={item} key={item.name} />);
      }
    }
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>
  );
};

TableListComponent.propTypes = {
  filterText: PropTypes.string.isRequired,
  isStockOnly: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
};

export default TableListComponent;
