import React, { Component } from 'react';
import MaskedInput from 'react-input-mask';

class InputMask extends Component {
    render() {
        let {
            mask,
            value,
            onChange,
            placeholder,
            id,
            className,
            onBlur
        } = this.props;
        return (
           <MaskedInput 
                mask={mask}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                id={id}
                className={className}
                onBlur={onBlur}
           /> 
        )
    }
}

export default InputMask;