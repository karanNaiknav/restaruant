import React from "react";
import ReactDOM from "react-dom";
import './index.css'

class MenuItem extends React.Component {
    render() {
        return (
            <tr>
                <td><label>{this.props.menuitem.name}</label></td>
                <td><label>{this.props.menuitem.Cost}</label></td>
            </tr>
        )
    }
}

class Menu extends React.Component {

    constructor(props) {
        super(props)
        console.log('Menu consturctor.')
        this.state = {
            loading: true,
            menuitems: []
        }
    }
    
    componentDidMount() {
        console.log('Menu componentDidMount.')
        const apiUrl = 'https://korjh504sg.execute-api.us-east-1.amazonaws.com/Public/restaurant/menu/appetizers'
        fetch(apiUrl)
            .then(async (response) => {
                console.log('Got the data.')
                this.setState({ loading: false, menuitems: await response.json() });
            });
    }

    render() {
        console.log('Menu render.')
        if (this.state.loading) {
            return (<label>loading...</label>)
        }
        return (
            <div>
                    <table align='center'>
                        <th>Item</th>
                        <th>Cost</th>
                        {this.state.menuitems.map((item) =>
                            <MenuItem menuitem={item} />
                        )}
                    </table>
            </div>
        )
    }
}

ReactDOM.render(<Menu />, document.getElementById("root"));