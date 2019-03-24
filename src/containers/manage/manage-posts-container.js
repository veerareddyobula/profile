import React, { Component } from 'react'
import { connect } from "react-redux"
import 'bootstrap/dist/css/bootstrap.css'

import { addNewBloggerPost } from "./../../actions"
class ManagePostsContainer extends Component {

    state = {
        blogPost: {

        }
    }

    handleCompleteClick = blogPost => {
        const { addNewBloggerPost } = this.props
        addNewBloggerPost(blogPost)
    }

    componentWillReceiveProps(newProps) {
        console.log('--== componentWillReceiveProps --== ', newProps)
        if (newProps.curd && newProps.curd.status === 200) {
            const { history } = this.props
            history.push('/profile/admin/allow/home')
        }
    }

    handleOnChange = (name, event) => {
        const val = event.target.value
        const { blogPost } = this.state
        blogPost[name] = val

        this.setState({ blogPost }, (resp) => {
            console.log('--== handleOnChange --== ', resp)
        })
    }

    render() {
        const { blogPost } = this.state
        return (
            <div className="container mt-4">
                <div className="card">
                    <div className="card-header">
                        <span className="card-title">Add New Post</span>
                    </div>
                    <div className="card-content">
                        <div className="d-flex justify-content-between">
                            <div style={{ width: '100vw' }}>
                                <div className="input-field col s12">
                                    <input id="cardTitle" type="text" className="validate" value={blogPost.cardTitle} onChange={(event) => this.handleOnChange('cardTitle', event)} />
                                    <label htmlFor="cardTitle">Title</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="imageUrl" type="text" className="validate" value={blogPost.imageUrl} onChange={(event) => this.handleOnChange('imageUrl', event)} />
                                    <label htmlFor="imageUrl">Header Image Url</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="srcLink" type="text" className="validate" value={blogPost.srcLink} onChange={(event) => this.handleOnChange('srcLink', event)} />
                                    <label htmlFor="srcLink">Content Source Link</label>
                                </div>
                            </div>
                            <div style={{ width: '100vw' }}>
                                <div className="input-field col s12">
                                    <textarea id="myComments" className="materialize-textarea" value={blogPost.myComments} onChange={(event) => this.handleOnChange('myComments', event)}  ></textarea>
                                    <label htmlFor="myComments">Comments</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-between">
                            <a href="#/profile/admin/allow/home" className="btn blue-grey darken-2 white-text mr-2">
                                <i className="material-icons left">cancel</i>Cancel
                            </a>
                            <a href="#/profile/admin/allow/home" className="btn blue darken-1 white-text mr-2" onClick={() => this.handleCompleteClick(blogPost)}>
                                <i className="material-icons left">check</i>Publish
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ curd }) => {
    return {
        curd
    }
}
export default connect(mapStateToProps, { addNewBloggerPost })(ManagePostsContainer)