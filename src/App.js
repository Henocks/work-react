import React, { Component } from 'react';

import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];

class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return this.firstname + ' ' + this.lastname;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
    }

    this.onDismiss = this.onDismiss.bind(this);

  }

  onDismiss(id) {

    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);

    this.setState({ list: updatedList });

  }

  render() {
    const robin = new Developer('Robin', 'Wieruch');
    console.log(robin.getName());

    return (
      <div className="App">
        {this.state.list.map(item =>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  dismiss
                </button>
              </span>
            </div>
        )}
      </div>
    );
  }
}

export default App;
