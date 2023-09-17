import React, { useReducer } from "react";
const reducer = (state, action) => {
   let ans=[] ;
  switch (action) {
    case "BJP":
      ans=[...state] ;
      ans[0]=ans[0]+1 ;
      return ans ;
    case "AAP":
      ans=[...state] ;
      ans[1]=ans[1]+1 ;
      return ans ;
    case "BSP":
      ans=[...state] ;
      ans[2]=ans[2]+1 ;
      return ans ;
    case "NPP":
      ans=[...state] ;
      ans[3]=ans[3]+1 ;
      return ans ;
    default:
      return state;
  }
};
const VotingCount = () => {
  const [voteCount, dispatch] = useReducer(reducer, [0, 0, 0, 0]);

  return (
    <>
      <div className="mainCart two">
        <div>
          <div className="vote">BJP</div>
          <button onClick={() => dispatch("BJP")}>Vote For BPJ</button>
        </div>
        <div>
          <div className="vote">AAP</div>
          <button
            onClick={() => {
              dispatch("AAP");
            }}
          >
            Vote For AAP
          </button>
        </div>

        <div>
          <div className="vote">BSP</div>
          <button
            onClick={() => {
              dispatch("BSP");
            }}
          >
            Vote For BSP
          </button>
        </div>

        <div>
          <div className="vote">NPP</div>
          <button
            onClick={() => {
              dispatch("NPP");
            }}
          >
            Vote For NPP
          </button>
        </div>
      </div>

      <div>
        <p>Total Vote For BJP : {voteCount[0]}</p>
        <p>Total Vote For AAP : {voteCount[1]}</p>
        <p>Total Vote For BSP : {voteCount[2]}</p>
        <p>Total Vote For NPP : {voteCount[3]}</p>
      </div>
    </>
  );
};

export default VotingCount;
