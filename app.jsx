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

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
        <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment"> + </button>
    </div>

    );
}

Counter.propTypes = {
  socre: React.PropTypes.number.isRequired,
};

function Player(props) {
  return (
      <div className="players">
        <div className="player">

          <div className="player-name">
            {props.name} 
          </div>

          <div className="player-score">
            <Counter score= {props.score} />
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

    </div>

    );
}

Application.propTypes = {
  title: React.PropTypes.string,
};

Application.defaultProps = {
  title = "Scoreboard",
};


ReactDOM.render(<Application />, document.getElementById('container'));









