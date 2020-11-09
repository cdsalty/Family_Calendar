// import React, { useState, useReducer } from 'react';

// // IT MUST NOT MUTATE THE ORIGINAL STATE.
// // Reducer => A function that accepts two parameters (state, action)
// // based on the action.type it returns a new changed state.
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state.count + action.payload;
//     case "DECREMENT":
//       return state.count - action.payload;
//     default:
//       return state;
//   }

//   // Action => An object that must have a type property (optionally has a payload property)
//   //   const increment = { type: "INCREMENT", payload: 2 };
//   //   const decrement = { type: "DECREMENT", payload: 2 };

//   // Action Creators => functions that return actions
//   const increment = (number) => ({ type: "INCREMENT", payload: number })
//   const decrement = (number) => ({ type: "DECREMENT", payload: number })

//   const Component = () => {
//     const [count, dispatch] = useReducer(reducer, 0);
//     const number = 5;

//     return (
//       <>
//         Count: {count}
//         <button onClick={() => dispatch(decrement(number))}>-</button>
//         <button onClick={() => dispatch(increment(number))}>+</button>
//       </>
//     );
//   }

//   // const Component = () => {
//   //     const [state, setState] = useState({ count: 0 });

//   //     return (
//   //       <>
//   //         Count: {state.count}
//   //         <button onClick={() => setState((prevState) => ({ count: prevState.count - 1 }))}>-</button>
//   //         <button onClick={() => setState((prevState) => ({ count: prevState.count + 1 }))}>+</button>
//   //       </>
//   //     );
// }

// export default Component
