function Header(props) {
  return (     
  <div className="header">
        <h1>{props.title}</h1>
  </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

function Player(props) {
  
}

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />

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

Application.propTypes = {
  title: React.PropTypes.string,
};

Application.defaultProps = {
  title = "Scoreboard",
};


ReactDOM.render(<Application/>, document.getElementById('container'));









