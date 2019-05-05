import React, { Component } from 'react'
import $ from "jquery";
import M from "materialize-css";
import { connect } from "react-redux"
import 'bootstrap/dist/css/bootstrap.css'

import { addNewBloggerPost } from "../../actions"
import {ManageBlogAboutPost} from './../../../components/card/manage-blog-about-post'

import './manage-posts-container.scss'

class ManagePostsContainer extends Component {

    state = {
        blogPost: {
            templateDef: {}
        },
        isValidTemplateAdded: false,
    }

    handleCompleteClick = blogPost => {
        const { addNewBloggerPost } = this.props
        console.log('--- handleCompleteClick --== ', blogPost)
        addNewBloggerPost(blogPost)
        // "#/profile/admin/allow/home" 
    }

    componentDidMount() {
        const templateSelectOption = $('select');
        M.FormSelect.init(templateSelectOption);
        // .material_select();
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

    setTemplateDef = templateDef => {
        const {blogPost} = this.state
        blogPost.templateDef = templateDef
        this.setState({blogPost, isValidTemplateAdded:true})
    }

    render() {
        const { blogPost, isValidTemplateAdded } = this.state
        return (
            <div className="container-fluid mt-4">
                <div className="card" style={{ boxShadow: 'none' }}>
                    <div className="card-content">
                        <div className="d-flex flex-column">
                            <ManageBlogAboutPost blogPost={blogPost} handleOnChange={this.handleOnChange} setTemplateDef={this.setTemplateDef} />
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-between">
                            <a href="#/profile/admin/allow/home" className="btn blue-grey darken-2 white-text mr-2">
                                <i className="material-icons left">cancel</i>Cancel
                            </a>
                            <button
                                className="btn blue darken-1 white-text mr-2"
                                disabled={!isValidTemplateAdded} 
                                onClick={() => this.handleCompleteClick(blogPost)}>
                                <i className="material-icons left">check</i>Publish
                            </button>
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