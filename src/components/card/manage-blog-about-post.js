import React, { Fragment } from 'react'
import TemplateFactory from './../../components/template-factory/template-factory'

export const ManageBlogAboutPost = ({ blogPost, handleOnChange, setTemplateDef }) => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="input-field col s12">
                        <input id="cardTitle" type="text" className="validate" value={blogPost.cardTitle} onChange={(event) => handleOnChange('cardTitle', event)} />
                        <label htmlFor="cardTitle">Title</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="imageUrl" type="text" className="validate" value={blogPost.imageUrl} onChange={(event) => handleOnChange('imageUrl', event)} />
                        <label htmlFor="imageUrl">Header Image Url</label>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="input-field col s12">
                        <input id="srcLink" type="text" className="validate" value={blogPost.srcLink} onChange={(event) => handleOnChange('srcLink', event)} />
                        <label htmlFor="srcLink">Content Source Link</label>
                    </div>
                    <div className="input-field col s12">
                        <select value={blogPost.selectedTemplate} onChange={(event)=>handleOnChange('selectedTemplate', event)}>
                            <option value="">Select Template</option>
                            {
                                TemplateFactory.templateMessages.map((entity)=>{
                                    return <option value={entity.value}>{entity.label}</option>
                                })
                            }
                        </select>
                        <label>Select Comments Template</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <TemplateFactory selectedTemplate={blogPost.selectedTemplate} setTemplateDef={setTemplateDef} />
            </div>
        </Fragment>
    )
}