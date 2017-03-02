import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            image: 'https://dummyimage.com/400x400/5c5c5c/ffffff.jpg',
            title: 'Some title',
            text: 'Some text'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(propertyName, event) {
        const product = this.state;
        product[propertyName] = event.target.value;
        this.setState({product: product});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Text</th>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={this.state.image} onChange={this.handleChange.bind(this, 'image')}></input>
                            </td>
                            <td>
                                <input type="text" value={this.state.title} onChange={this.handleChange.bind(this, 'title')}></input>
                            </td>
                            <td>
                                <input type="text" value={this.state.text} onChange={this.handleChange.bind(this, 'text')}></input>
                            </td>
                        </tr>
                    </table>
                </form>
                <img src={this.state.image}></img>
                <h1>{this.state.title}</h1>
                <text>{this.state.text}</text>
            </div>
        );
    }
}

render(
    <App/>, document.getElementById('campaign'));
