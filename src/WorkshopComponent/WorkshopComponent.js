import React from "react";

class WorkshopComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    render() {
        return <div><h2>WorkShopComponent</h2>
            <div>{this.state.count}</div>
        <button onClick={this.clickHandler}>Increment Counter</button>
        </div>
    }

    clickHandler = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
}

// const WorkshopComponent = props => {
//     return (
//         <div>
//             {props.message}
//         </div>
//     );
// };

export default WorkshopComponent;