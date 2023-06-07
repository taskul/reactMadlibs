import { useState } from "react";
import './MadLibsForm.css'

const MadLibsForm = ({createStory}) => {
    const INITIAL_STATE = {
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    }
    const [formData, setFormData ] = useState(INITIAL_STATE);
    const [isInvalid, setIsInvalid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    const [showError, setShowError] = useState(false);
    
    const handleChange = (e) => {
        setIsTouched(true)
        const {name, value} = e.target;
        if (value === '') {
            setIsInvalid(true)
        } else {
            setIsInvalid(false)
            setShowError(false)
        }
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isTouched && !isInvalid) {
            createStory(formData);
            setFormData(INITIAL_STATE)
        } else {
            setShowError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="MadLibsForm">
            <input 
                type="text"
                id='noun'
                name='noun'
                placeholder="noun"
                value={formData.noun}
                onChange={handleChange}
            />
            <input 
                type="text"
                id='noun2'
                name='noun2'
                placeholder="noun 2"
                value={formData.noun2}
                onChange={handleChange}
            />
            <input 
                type="text"
                id='adjective'
                name='adjective'
                placeholder="adjective"
                value={formData.adjective}
                onChange={handleChange}
            />
            <input 
                type="text"
                id='color'
                name='color'
                placeholder="color"
                value={formData.color}
                onChange={handleChange}
            />
        {isInvalid && isTouched && <p className="MadLibsForm-error">*Fillout all of the  fields</p>}
        {showError && <p className="MadLibsForm-error">*Fillout all of the  fields</p>}
        <button>Get Story</button>
        </form>
    )
}

export default MadLibsForm;