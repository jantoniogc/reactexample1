import React, { PropTypes } from 'react';

const SearchComponent = (props) =>
  <form>
    <input
      type="text"
      placeholder="Buscar..."
      value={props.filterText}
      onChange={props.handleOnTextChange}
    />
    <br />
    <input
      type="checkbox"
      checked={props.isStockOnly}
      onChange={props.handleOnChange}
    />
    { ' ' }
    Only show products in stock
  </form>;

SearchComponent.propTypes = {
  filterText: PropTypes.string.isRequired,
  isStockOnly: PropTypes.bool.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnTextChange: PropTypes.func.isRequired
};

export default SearchComponent;
