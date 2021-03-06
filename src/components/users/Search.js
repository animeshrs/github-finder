import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searhUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
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
        const { showClear, clearUsers } = this.props;

        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search..."
                        value={this.state.text} onChange={this.onChange} />
                    <input type="submit" className="btn btn-dark btn-block" />
                </form>
                {showClear &&
                    (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear Users</button>)
                }
            </div>
        )
    }
}

export default Search
