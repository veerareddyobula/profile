import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";

import { fetchBloggerPosts } from "./../../admin/actions";
import BlogCardComponent from './../card/blog-card-component'

import './blog-component.css'
class BlogComponent extends Component {

    componentWillMount() {
        this.props.fetchBloggerPosts();
    }

    render() {
        console.log('BlogComponent --==>> ', this.props)
        const { data } = this.props
        console.log('BlogComponent --==>> ', data)
        return (
            <Fragment>
                <div className="icon--row icon-block">
                    <h2 className="center light-blue-text">
                        <i className="material-icons">find_replace</i>
                    </h2>
                </div>
                <h5 className="center slash--heading">Develop the skill of setting worthy goals</h5>
                <div className="blogger--post">
                    {
                        data?(
                            Object.keys(data).map((entity, index) => {
                                return <BlogCardComponent key={index} item={data[entity]} />
                            })
                        ):(
                            <div style={{display:'grid', justifyContent:'center'}}>No Data Found</div>
                        )
                    }
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
export default connect(mapStateToProps, { fetchBloggerPosts })(BlogComponent)