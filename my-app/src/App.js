import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.ArrList = [];
    this.Content = '';
    this.state = {
      status: false
    }
  }


  handleChange = (event) => {
    this.Content = event.target.value
  }

  handleAdd = () => {
    this.ArrList.push(this.Content)
    this.setState({
      status: true
    })
    console.log(this.ArrList)
  }
  render() {
    return (
      <div className="todo-list">
        <h2>Todo-List</h2>
        <div>
          <input type="text" onChange={this.handleChange} />
          <button type="button" onClick={this.handleAdd}>Add</button>
        </div>
        <table>
          <tbody>
            {this.ArrList.map((item) => {
              return (
                <tr>
                  <td>{item}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;