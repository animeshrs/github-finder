import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => {
        this.setState({
            // text: e.target.value
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.searhUsers(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search..."
                        value={this.state.text} onChange={this.onChange} />
                    <input type="submit" className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}

export default Search
