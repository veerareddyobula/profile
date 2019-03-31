import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'

import { fetchBloggerPosts } from "../../actions"

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
                <div className="container-fluid mt-4">
                    <div className="d-flex justify-content-end">
                        <a href="#/profile/admin/allow/home/add" className="btn blue darken-1 white-text mr-2">
                            <i className="material-icons left">add</i>Add New Post
                        </a>
                    </div>
                </div>
                <div className="container mt-2">
                    <div className="tbl-d-grid border-top">
                        <span className="heading">#</span>
                        <span className="heading"><h5>Title</h5></span>
                        <span className="heading"><h5>Image Url</h5></span>
                        <span className="heading"><h5>Source Link</h5></span>
                        <span className="heading"><h5>Template</h5></span>
                        <span className="heading"></span>
                        {
                            Object.keys(data).map((entity, index) => {
                                const item = data[entity]
                                return (
                                    <Fragment key={`adminHomeContainers_${index}_tr`}>
                                        <span className="border-right border-top p4">{index + 1}</span>
                                        <span className="border-right border-top p4">{item.cardTitle}</span>
                                        <span className="border-right border-top p4">{item.imageUrl}</span>
                                        <span className="border-right border-top p4">{item.srcLink}</span>
                                        <span className="border-right border-top p4">{item.selectedTemplate}</span>
                                        <span className="border-top p4 cursor-pointer">
                                            <i className="material-icons left">edit</i>
                                        </span>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
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