import React from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
// import Display from './components/Display';

const playerList =[
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
              playerList: e.data
              
            });
            console.log(playerList);

          })
          .catch(err => console.log(err));
      }
      
      render() {
          return (
              <div className='container'>
                <header className='header'>
                  <Navigation />
                </header>
                  <h1>Mike's World Cup Sprint</h1>

                    <div className='players'>
                      {this.state.playerlist.map(player => (
                        <div className='playercard'>
                          <p className='player' key={player.id}>
                            {player.name}
                          </p>
                          <p className='country'>
                            {player.country}
                          </p>
                          <p className='searchcount'>
                            {player.searches}
                          </p>
                        </div>           
                    ))} 
                    </div>
              </div>
          )
      }
    
}

export default App;
