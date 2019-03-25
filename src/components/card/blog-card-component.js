import React, { Component } from 'react'
import './blog-card-component.css'

class BlogCardComponent extends Component {
    render() {
        const {item} = this.props
        return (
            <div className="row blue-grey-text text-darken-4">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image card-image-wrapper">
                            <img src={item.imageUrl} alt={item.cardTitle} />
                        </div>
                        <div className="card-content">
                            <div id="style-4" className="card-content-wrapper">
                                <span className="card-title">{item.cardTitle}</span>
                                <p>{item.myComments}</p>
                            </div>
                        </div>
                        <div className="card-action">
                            <a href={item.srcLink} rel="noopener noreferrer" target="_blank">Link to original post</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogCardComponent