import React, { PropTypes } from 'react';

const HelloWorld = (props) => {
  const styles = {
    helloWorld: {
      color: props.color,
      textAlign: 'center',
    },
  };
  return (
    <div
      className="hello-world"
      onClick={props.onClick}
      style={styles.helloWorld}
    >
      Hello World!!!
    </div>
  );
};

HelloWorld.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default HelloWorld;
