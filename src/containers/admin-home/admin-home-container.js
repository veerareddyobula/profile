import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'

import { fetchBloggerPosts } from "./../../actions";

class AdminHomeContainer extends Component {

    componentWillMount() {
        this.props.fetchBloggerPosts();
    }

    render() {
        console.log('AdminHomeContainer --==>> ', this.props)
        const { data } = this.props
        console.log('AdminHomeContainer --==>> ', data)
        return (
            <Fragment>
                <div className="container mt-4">
                    <div className="d-flex justify-content-end">
                        <a href="/profile/admin/allow/home/add" className="btn blue darken-1 white-text mr-2">
                            <i className="material-icons left">add</i>Add New Post
                    </a>
                    </div>
                </div>
                <table className="highlight centered responsive-table">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>cardTitle</td>
                            <td>Image Url</td>
                            <td>Source Link</td>
                            <td>My Comments</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data ? (
                                Object.keys(data).map((entity, index) => {
                                    const item = data[entity]
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.cardTitle}</td>
                                            <td>{item.imageUrl}</td>
                                            <td>{item.srcLink}</td>
                                            <td>{item.myComments}</td>
                                            <td></td>
                                        </tr>
                                    )
                                })
                            ) : (
                                    <tr>
                                        <td colSpan="6">No Data Found</td>
                                    </tr>
                                )

                        }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ data }) => {
    return {
        data
    }
}
export default connect(mapStateToProps, { fetchBloggerPosts })(AdminHomeContainer);