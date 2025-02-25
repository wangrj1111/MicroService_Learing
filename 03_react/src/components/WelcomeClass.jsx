import { Component } from "react";
import PropTypes from "prop-types";

class WelcomClass extends Component {
  render() {
    return <h1>Welcome,{this.props.name}</h1>;
  }
}
WelcomClass.propTypes = {
  name: PropTypes.string.isRequired,
};

export default WelcomClass;
