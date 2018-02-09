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
  return (
      <div className="players">
        <div className="player">

          <div className="player-name">
            {props.name} 
          </div>

          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> {props.score} </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>

        </div>
      </div>

    );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  socre: React.PropTypes.number.isRequired,
};

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />

      <div className="players">
        <Players name="Rebecca" score={24} />
        <Players name="Tanya" score={27} />
        <Players name="Tara" score={28} />
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









