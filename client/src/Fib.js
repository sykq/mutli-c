import axios from 'axios';
import React, { Component } from 'react';

class Fib extends Component {
  state = {
    seenIndices: [],
    values: {},
    index: ''
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndices();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndices() {
    const seenIndices = await axios.get('/api/values/all');
    this.setState({ seenIndices: seenIndices.data });
  }

  renderSeenIndices() {
    return this.state.seenIndices.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          Index: {key} => Value: {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  handleSubmit = async event => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index
    });

    this.setState({ index: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter index:</label>
          <input
            value={this.state.index}
            onChange={event => this.setState({ index: event.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <h3>Stored indices:</h3>
        {this.renderSeenIndices()}
        <h3>Calculated values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
