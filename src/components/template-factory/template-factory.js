import React, { Component, Fragment } from 'react'
import './template-factory.css';

import TweakWorkTemplate1 from './templates/TweakWorkTemplate_1'
class TemplateFactory extends Component {

    state = {
        selectedTemplate: '',
    }

    getRespectiveTemplateBySelctedTemplate = () => {
        const { selectedTemplate, setTemplateDef, defaultTemplateDef } = this.props
        console.log('--== getRespectiveTemplateBySelctedTemplate --== ', selectedTemplate)
        if(selectedTemplate==='tweakWorkTemplate_1'){
            return <TweakWorkTemplate1 defaultTemplateDef={defaultTemplateDef} setTemplateDef={setTemplateDef} />
        }else if(selectedTemplate){
            return <div className="col-sm-12 d-flex justify-content-center">
                <span className="badge">Template Build In-Progress</span>
            </div>
        }

        return <div className="col-sm-12 d-flex justify-content-center">
            <span className="badge">No Template Selected</span>
        </div>
    }

    render() {
        return (
            <Fragment>
                {this.getRespectiveTemplateBySelctedTemplate()}
            </Fragment>
        )
    }
}

export default TemplateFactory