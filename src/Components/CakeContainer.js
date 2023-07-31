import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
import HooksCakeContainer from "./HooksContainer";

const CakeContainer = (props) => { 
  return (
    <div>
      <h2>
         number of cakes - {props.numOfCakes}
      </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <HooksCakeContainer/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()), 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer); 
