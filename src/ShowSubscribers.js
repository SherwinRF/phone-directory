import React, { Component } from 'react';
import Header from './Header'
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {

// constructor(){
//   super();
//   this.state = {
//     subscriberListToShow: []
//   }
// }

  render() {

    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Sherwin Fernandes",
    //     phone: "1234567890"
    //   },
    //   {
    //     id: 2,
    //     name: "Shilpa Bhat",
    //     phone: "0987654321"
    //   }
    // ]

  return (
    <div >
      
      <Header heading="Phone Directory" />
      <div className="component-body-container">
          <Link to="/add"><button className="custom-btn add-btn">Add</button></Link> 

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            this.props.subscribersList.map(sub => {
              return <div key={sub.id} className="grid-container">
              <span className="grid-item"> {sub.name} </span>
              <span className="grid-item"> {sub.phone} </span>
              <button className="custom-btn del-btn">Delete</button>
            </div>
            })
          }

      </div>

    </div>

    );
  }
}

export default ShowSubscribers;
