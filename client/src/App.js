import React from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
import Display from './components/Display';


// import './components/TodoComponents/Todo.css';

const playerList =[];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            playerlist: []
        };
    }

    componentDidMount(){
        axios
          .get('http://localhost:5000/api/players')
          .then(e => {
            console.log('data: ', e);
            this.setState({
              playerList: e.data
            });
          })
          .catch(err => console.log(err));
      }

      render() {
          return (
              <div className='container'>
                  <h1>Mike's World Cup Sprint</h1>
                <Navigation />
                <Display playerList = {playerList} />
              </div>
          )
      }
    
}

export default App;
