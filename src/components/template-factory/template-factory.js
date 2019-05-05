import React, { Component, Fragment } from 'react'
import './template-factory.scss';

import TweakWorkTemplate1   from './templates/TweakWorkTemplate_1'
import TextMessageTemplate  from './templates/TextMessageTemplate'
class TemplateFactory extends Component {

    static templateMessages = [
        {value:'tweakWorkTemplate_1', label:'Tweak Work Template -- 1'},
        {value:'textMessageTemplate', label:'Text Message Template'}
    ]

    state = {
        selectedTemplate: '',
    }

    getRespectiveTemplateBySelctedTemplate = () => {
        const { selectedTemplate, setTemplateDef, defaultTemplateDef } = this.props
        console.log('--== getRespectiveTemplateBySelctedTemplate --== ', selectedTemplate)
        if(selectedTemplate==='tweakWorkTemplate_1'){
            return <TweakWorkTemplate1 defaultTemplateDef={defaultTemplateDef} setTemplateDef={setTemplateDef} />
        }else if(selectedTemplate==='textMessageTemplate'){
            return <TextMessageTemplate defaultTemplateDef={defaultTemplateDef} setTemplateDef={setTemplateDef} />
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