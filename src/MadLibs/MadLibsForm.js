import './MadLibsForm.css'
import { useFormik } from "formik";


 // A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
const validate = values => {
    const errors = {};
    if (!values.noun) {
        errors.noun = '*Required'
    }
    if (!values.noun2) {
        errors.noun2 = '*Required'
    }
    if (!values.adjective) {
        errors.adjective = '*Required'
    }
    if (!values.color) {
        errors.color = '*Required'
    }

    return errors;
};


const MadLibsForm = ({createStory}) => {
    // formik for input validation

    // Note that we have to initialize ALL of fields with values. These
    // could come from props, but since we don’t want to prefill this form,
    // we just use an empty string. If we don’t do this, React will yell
    // at us.
    // we also pass in validate function with validators
    // and what to do on form submit
    const formik = useFormik({
        initialValues: {
            noun: '',
            noun2: '',
            adjective: '',
            color: ''
        },
        validate,
        onSubmit: values => {
            createStory(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="MadLibsForm">
            <input 
                type="text"
                id='noun'
                name='noun'
                placeholder="noun"
                value={formik.values.noun}
                onChange={formik.handleChange}
                // handles displaying errors only after use has interacted with the field otherwise without it they always display
                onBlur={formik.handleBlur}
            />
            {formik.errors.noun ? <div className="MadLibsForm-error">{formik.errors.noun}</div> : null}
            
            <input 
                type="text"
                id='noun2'
                name='noun2'
                placeholder="noun 2"
                value={formik.values.noun2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.noun2 ? <div className="MadLibsForm-error">{formik.errors.noun2}</div> : null}

            <input 
                type="text"
                id='adjective'
                name='adjective'
                placeholder="adjective"
                value={formik.values.adjective}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.adjective ? <div className="MadLibsForm-error">{formik.errors.adjective}</div> : null}

            <input 
                type="text"
                id='color'
                name='color'
                placeholder="color"
                value={formik.values.color}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.color ? <div className="MadLibsForm-error">{formik.errors.color}</div> : null }

        <button type="submit">Get Story</button>
        </form>
    )
}

export default MadLibsForm;