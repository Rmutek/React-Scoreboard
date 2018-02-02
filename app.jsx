function Application () {
  return (
    <div className="scoreboard">
      <div className="header">
        <h1>Scoreboard</h1>
      </div>

      <div className="players">
        <div className="player">

          <div className="player-name">
            Rebecca 
          </div>

          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 24 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>

        </div>
      </div>

      <div className="players">
        <div className="player">

          <div className="player-name">
            Tanya
          </div>

          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 26 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>

        </div>
      </div>

      <div className="players">
        <div className="player">

          <div className="player-name">
            Tara
          </div>

          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 25 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>

        </div>
      </div>

    </div>
    );
}

React.DOM.render(<Application />, document.getElementById('container'));