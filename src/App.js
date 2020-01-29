import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Sogeti Employee Directory</h1>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/getSogetiEmployees')
      .then(employees => employees.json())
      .then(employees => {
        this.setState({
          employees: employees
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App container">
        <h1>Random Sogeti Employee Directory</h1>
        <div className="row">
          {this.state.employees.map((empl, index) => {
            return (
              // <li key={index}>{empl.name}</li>
              <div className="media mb-4 directory-entry">
                <img class="mr-3 directory-image" src={empl.image} alt="..." />
                <div className="media-body">
                  <h5 className="mt-0">{empl.name}</h5>
                  {empl.location}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
