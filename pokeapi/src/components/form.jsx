import { useState } from 'react';
import '../styles/form.css';

const Form = ({ onSubmit }) => {
    const [localInputValue, setLocalInputValue] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setLocalInputValue(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(localInputValue);
    };

    return (
        <section id='form' className='d-flex'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Insert your prompt to generate a Pokemon'
                    value={localInputValue}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Form;