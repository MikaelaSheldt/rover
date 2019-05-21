import React, { Component } from "react";
import { connect } from 'react-redux'
import { addItem } from '../store'


class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(evt) {
    if (evt.key === "Enter") {
      this.props.add(this.state.input);
      this.setState({ input: "" });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={evt => this.setState({ input: evt.target.value })}
          onKeyDown={this.handleKey}
        />
        <button
          onClick={() => {
            this.props.add(this.state.input);
            this.setState({ input: "" });
          }}>
          Add
        </button>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    add: function (text) {
      dispatch(addItem(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddItem);
