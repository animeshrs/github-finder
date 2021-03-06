import React from 'react'
import UserItem from './UserItem';
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner';

const Users = ({ loading, users }) => {
    if (loading) {
        return <Spinner />
    }
    else {
        return (
            <div style={userStyle}>
                {users.map(u => (
                    <UserItem user={u} key={u.id} />
                ))}
            </div>
        )
    }
}

Users.propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired
}


const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
