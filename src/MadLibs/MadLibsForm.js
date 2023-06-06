import { useState } from "react";
import './MadLibsForm.css'

const MadLibsForm = ({createStory}) => {
    const INITIAL_STATE = {
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    }
    const [formData, setFormData ] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createStory(formData);
        setFormData(INITIAL_STATE)
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
        <button>Get Story</button>
        </form>
    )
}

export default MadLibsForm;