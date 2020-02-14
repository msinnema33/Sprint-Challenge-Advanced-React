import React from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
// import Display from './components/Display';
// import Display from './components/Display';

const playerlist =[
  {
    name: '',
    country: '',
    searches: '',
    id: ''
  }
];

class App extends React.Component {
    // constructor() {
    //     super();
        state = {
            playerlist: []
        };
    // }

    componentDidMount(){
        axios
          .get('http://localhost:5000/api/players')
          .then(e => {
            console.log('list: ', e);
            this.setState({
              playerlist: e.data
              
            });
          })
          .catch(err => console.log(err));
      }
      
      render() {
          return (
              <div className='container'>
                <header className='header'>
                  <Navigation />
                </header>
                  <h1 data-testid='app-h1'>Mike's World Cup Sprint</h1>

                    <div className='players'>

                      {/* <Display playerlist = {playerlist}/> */}
                      {this.state.playerlist.map(player => (
                        <div className='playercard'>
                          <p className='player' key={player.id}>
                            Name: {player.name}
                          </p>
                          <p className='country'>
                            Country: {player.country}
                          </p>
                          <p className='searchcount'>
                          Number of Searches: {player.searches}
                          </p>
                        </div>           
                    ))} 
                    </div>
            </div>
          )
      }
    
}

export default App;
