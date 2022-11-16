import React from 'react'

function PlayerAbout(props) {
  return (
    <div>
        <img src={props.portrait} alt='player-portrait' style={{height: '400px', paddingTop: '4em', paddingBottom: '1em'}} />

        <div style={{backgroundColor: 'rgba(255, 255, 255, 0.9)', width: '80%', position: 'relative', left: '0', right: '0', margin: 'auto'}}>
        <div style={{fontSize: '40px', fontWeight: 'bold'}}>{props.playerName}</div>
            <div style={{color: '#000'}}>{props.blurb}</div>
        </div>
    </div>
  )
}

export default PlayerAbout