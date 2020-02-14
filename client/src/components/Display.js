import React from "react";


const Display = ({ playerlist }) => {
  return (
    <div className="display">
      {playerlist.map(player => (
        <div className="player__container" key={player.id}>
          <h2 className='player__name'>{player.name}</h2>  
          <h2 className="player__country">{player.country}</h2>
          <h4 className="player__search">{player.searches}</h4>
        </div>
      ))}
    </div>
  );
};
export default Display;
