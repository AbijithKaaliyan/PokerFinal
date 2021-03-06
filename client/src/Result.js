const Result = (props) => {
    const finalinputs = props.valuelist.filter((e) => e.worth !== '?')
    var total =0;
    var count = 0;
    finalinputs.forEach(element => {
        total+=parseInt(element.worth);
        count++;
    });
    return (
      <div className="result">
          <p className="outcome">The result is : {total/count}</p>
          <button className="send" onClick={props.goback}>go back</button>
      </div>
    );
  };
  
  export default Result;
  