import { useState } from "react";

const AddCommasForm = ({addCommasToNum}) => {
    const INITIAL_STATE = {
        number:''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...formData,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addCommasToNum(formData)
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="number"
                id="number"
                placeholder="number"
                onChange={handleChange}
                value={formData.number}
            />
        <button>Add commas</button>
        </form>
    )
}

export default AddCommasForm;