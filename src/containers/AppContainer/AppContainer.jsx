import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import InputPreview from "components/InputPreview";
import setMessage from "actions/message";

class AppContainer extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.props.dispatch(setMessage(value));
  }

  render() {
    const { message } = this.props.messageReducer;
    return (
      <div>
        <Link to="/about">
          <button>About</button>
        </Link>
        <InputPreview value={message} onChange={this.onChange} />
      </div>
    );
  }
}

export default connect(state => state)(AppContainer);
