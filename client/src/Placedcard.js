const Placedcard = ({ value,name}) => {
    return (
      <div className="placedcard">
        <span className="value">{value}</span>
        <div className="playernames">
          <p>{name}</p>
        </div>
      </div>
    );
  };
  
  export default Placedcard;
  