import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import appStyle from '../styles/styles.js';
import Header from '../components/Header.jsx';
import HelloWorld from '../components/HelloWorld.jsx';
import { changeStockOnlyCheck, changeFilterText } from '../../actions/actions';


import TableListComponent from '../components/TableListComponent.jsx';
import SearchComponent from '../components/SearchComponent.jsx';


/** Punto de entrada a la aplicación */
class App extends Component {
  render() {
    const { dispatch, data, filterText, isStockOnly } = this.props;
    return (
      <div>
        <SearchComponent
          filterText={filterText}
          isStockOnly={isStockOnly}
          handleOnChange={() => dispatch(changeStockOnlyCheck())}
          handleOnTextChange={(e) => dispatch(changeFilterText(e.target.value))}
        />
        <TableListComponent
          data={data}
          filterText={filterText}
          isStockOnly={isStockOnly}
        />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  isStockOnly: PropTypes.bool.isRequired
};

const select = state => state;

export default connect(select)(App);
