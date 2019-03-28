import React, { Component } from 'react'
import TemplateFactory from './../../components/template-factory/template-factory'
import './blog-card-component.css'

class BlogCardComponent extends Component {
    render() {
        const {item} = this.props
        return (
            <div className="row blue-grey-text text-darken-4">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img className="card-image-wrapper" src={item.imageUrl} alt={item.cardTitle} />
                        </div>
                        <div className="card-content">
                            <div className="d-flex flex-column">
                                <div className="d-flex justify-content-center border-bottom mb-3">
                                    <a href={item.srcLink}><h5>{item.cardTitle}</h5></a>
                                </div>
                                <div><TemplateFactory selectedTemplate={item.selectedTemplate} defaultTemplateDef={item.templateDef} /></div>
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