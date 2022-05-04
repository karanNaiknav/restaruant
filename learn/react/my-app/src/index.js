import React from "react";
import ReactDOM from "react-dom";

class MenuItem extends React.Component {
    render() {
        return (
            <tr>
                <td><label>{this.props.Cost}</label></td>
                <td><label>{this.props.Name}</label></td>
            </tr>
        )
    }
}

class Menu extends React.Component {
    render() {
        return (
            <div>
                <table border="1">
                  <th>Item</th>
                  <th>Cost</th>
                    <MenuItem Name="ap1" Cost="2" />
                    <MenuItem Name="ap3" Cost="3" />
                </table>
            </div>
        )
    }
}

ReactDOM.render(<Menu />, document.getElementById("root"));
