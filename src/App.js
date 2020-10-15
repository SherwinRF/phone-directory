import React, { Component } from 'react';
import Header from './Header'
import './App.css';
class App extends Component {



  render() {

    let subscribers = [
      {
        id: 1,
        name: "Sherwin Fernandes",
        phone: "1234567890"
      },
      {
        id: 2,
        name: "Shilpa Bhat",
        phone: "0987654321"
      }
    ]

  return (
    <div >
      <Header />
      <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            subscribers.map(sub => {
              return <div key={sub.id} className="grid-container">
              <span className="grid-item"> {sub.name} </span>
              <span className="grid-item"> {sub.phone} </span>
            </div>
            })
          }

      </div>

    </div>

    );
  }
}

export default App;
