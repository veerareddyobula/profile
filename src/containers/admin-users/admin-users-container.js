import React, {Component, Fragment} from 'react'

class AdminUsersContainer extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mt-4">
                    <div className="d-flex justify-content-end">
                        <a href="#/profile/admin/allow/users/add" className="btn blue darken-1 white-text mr-2">
                            <i className="material-icons left">add</i>Add New User
                        </a>
                    </div>
                </div>
                <div className="container mt-2">
                    <div className="tbl-d-grid border-top">
                        <span className="heading">#</span>
                        <span className="heading"><h5>First Name</h5></span>
                        <span className="heading"><h5>Last Name</h5></span>
                        <span className="heading"><h5>Email</h5></span>
                        <span className="heading"><h5>Mobile</h5></span>
                        <span className="heading"></span>
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AdminUsersContainer