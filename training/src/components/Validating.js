import React from "react";

class Validating extends React.Component {
     render() {
     	const {number1, number2} = this.props;
     	return (
<div>
{number1} + {number2} = {number1+ number2}
</div>
     		);
     }
}

 Validating.defaultProps = {
 	number1: 33,
 	number2: 3
 }

 export default Validating;