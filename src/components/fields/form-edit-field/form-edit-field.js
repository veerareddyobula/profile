import React, {Fragment} from 'react'

export const FormTextField = ({showInEditMode, labelText, valuePath,  defaultText, placeholder, handleOnChange, customClassName}) => {
    const className = customClassName?customClassName:"input-field col s12"
    return (
        <Fragment>
            {
                showInEditMode?(
                    <div className={className}>
                        <input 
                            id={`inputField_${valuePath}`}
                            type="text" 
                            className="validate" 
                            value={defaultText}
                            placeholder={placeholder} 
                            onChange={(event) => handleOnChange(valuePath, event)} />
                        <label htmlFor={`inputField_${valuePath}`}>{labelText}</label>
                    </div>
                ):(
                    <div>{(defaultText)?defaultText:'--'}</div>
                )
            }
        </Fragment>
    )
}

export const FormTextAreaField = ({showInEditMode, labelText, valuePath,  defaultText, placeholder, handleOnChange, customClassName}) => {
    const className = customClassName?customClassName:"input-field col s12"
    return (
        <Fragment>
            {
                showInEditMode?(
                    <div className={className}>
                        <textarea 
                            id={`inputField_${valuePath}`} 
                            class="materialize-textarea" 
                            value={defaultText} 
                            placeholder={placeholder}
                            onChange={(event) => handleOnChange(valuePath, event)} ></textarea>
                        <label htmlFor={`inputField_${valuePath}`}>{labelText}</label>
                    </div>
                ):(
                    <div>{(defaultText)?defaultText:'--'}</div>
                )
            }
        </Fragment>
    )
}