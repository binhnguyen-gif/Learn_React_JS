import React from "react";

const Welcome = function(props) {
  return (
    <div>
      <h1>Welcome ! I am a functional component {props.name}</h1>
    </div>
  )
}
 
export default Welcome;