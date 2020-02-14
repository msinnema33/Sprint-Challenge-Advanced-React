import React from "react";


const Display = ({ playerList }) => {
  return (
    <div className="display">
      {playerList.map(player => (
        <div className="player__container" key={player.name}>
          <h2 className='player__name'>{player.name}</h2>  
          <h2 className="player__country">{player.country}</h2>
          <h4 className="player__search">{player.search}</h4>
        </div>
      ))}
    </div>
  );
};
export default Display;
