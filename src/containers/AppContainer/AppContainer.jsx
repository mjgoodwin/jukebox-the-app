import React, { Component } from "react";
import { connect } from "react-redux";
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
    return <InputPreview value={message} onChange={this.onChange} />;
  }
}

export default connect(state => state)(AppContainer);
