import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import M from "materialize-css";

import { FormTextField } from './../../../fields/form-edit-field/form-edit-field'
import './../template-factory.css';

class TweakWorkTemplate1 extends Component {

    state = {
        templateDef: {
            comments: null,
            blockQuoteItems: [],
        },
        editTemplate: false,
        showInReadOnly: false,
    }

    componentDidMount() {
        console.log('--== componentDidMount --== ', this.props)
        const { setTemplateDef, defaultTemplateDef } = this.props
        if (!setTemplateDef && defaultTemplateDef) {
            this.setState({ templateDef: defaultTemplateDef, showInReadOnly: true })
        }
    }

    handleEditTemplate = () => {
        console.log('--== handleEditTemplate --== ')
        let { editTemplate } = this.state
        editTemplate = !editTemplate
        this.setState({ editTemplate }, () => {
            M.AutoInit();
            if (!editTemplate) {
                const { setTemplateDef } = this.props
                const { templateDef } = this.state
                setTemplateDef(templateDef)
            }
        })
    }

    handleOnChange = (valuePath, event) => {
        const { templateDef } = this.state
        _.set(templateDef, valuePath, event.target.value)
        console.log('--- handleOnChange --==>> ', valuePath, event)
        this.setState({ templateDef })
    }

    handleBlockQuoteOnChange = (valuePath, event) => {
        const { templateDef } = this.state
        templateDef.blockQuoteItems[valuePath] = event.target.value
        console.log('--- handleBlockQuoteOnChange --==>> ', valuePath, event)
        this.setState({ templateDef })
    }

    addNewBlockQuote = (event) => {
        const { templateDef } = this.state
        templateDef.blockQuoteItems.push('')
        console.log('--- addNewBlockQuote --==>> ', event)
        this.setState({ templateDef })
    }

    deleteBlockQuoteItem = (index, event) => {
        const { templateDef } = this.state
        templateDef.blockQuoteItems.splice(index, 1)
        console.log('--- deleteBlockQuoteItem --==>> ', index, event)
        this.setState({ templateDef })
    }

    render() {
        const { editTemplate, templateDef, showInReadOnly } = this.state
        return (
            <Fragment>
                <div className="container">
                    <div className="d-flex flex-column">
                        {
                            !showInReadOnly && (<div className="d-flex justify-content-between div-border-bottom mb-3">
                                <div className="flow-text">Text Message Template</div>
                                {
                                    editTemplate ? (
                                        <div onClick={this.handleEditTemplate} className="cursor-pointer"><i className="material-icons right">check</i></div>
                                    ) : (
                                            <div onClick={this.handleEditTemplate} className="cursor-pointer"><i className="material-icons right">edit</i></div>
                                        )
                                }
                            </div>)
                        }
                        <div>
                            <div className="d--grid--TweakWorkTemplate">
                                <div className="d--grid--TweakWorkTemplate-labels"><h5>Comments</h5></div>
                                <div>
                                    <FormTextField
                                        showInEditMode={editTemplate}
                                        labelText="Comments"
                                        valuePath="comments"
                                        defaultText={templateDef.comments}
                                        placeholder='Add comments'
                                        handleOnChange={this.handleOnChange} />
                                </div>
                            </div>
                            <div className="d--grid--TweakWorkTemplate">
                                <div className="d--grid--TweakWorkTemplate-labels">
                                    {editTemplate && (
                                        <div className="col s12 d-flex justify-content-end">
                                            <button className="btn amber darken-2" onClick={this.addNewBlockQuote}><i className="material-icons right">add</i>Add New Item</button>
                                        </div>
                                    )}
                                </div>
                                <blockquote>
                                    {(!templateDef.blockQuoteItems || templateDef.blockQuoteItems.length === 0) && <div className="col s12 p-4 d-flex justify-content-center">No Records Found</div>}
                                    <ol>
                                        {
                                            templateDef.blockQuoteItems && templateDef.blockQuoteItems.map((entity, index) => {
                                                return (
                                                    <li key={`blockQuoteItems_${index}_li`}>
                                                        <div className="d-flex">
                                                            <FormTextField
                                                                showInEditMode={editTemplate}
                                                                labelText="Add/Edit Block Quote"
                                                                valuePath={index}
                                                                defaultText={entity}
                                                                placeholder='Add a Block Quote'
                                                                handleOnChange={this.handleBlockQuoteOnChange}
                                                                customClassName="input-field col s8" />
                                                            <div>{editTemplate && <span className="cursor-pointer" onClick={(event) => this.deleteBlockQuoteItem(index, event)}><i className="material-icons right">delete_forever</i></span>}</div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ol>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default TweakWorkTemplate1;