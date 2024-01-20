import axios from 'axios';
import React, { useState } from 'react'

const Generator = () => {
    const endpoint = 'https://api-inference.huggingface.co/models/promthero/openjourney';

    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState(null);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);

        const input = e.target.elements.input.value;
        const response = await axios.post(
            endpoint,
            { inputs: input },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const blob = await response.blob();
        setOutput(URL.createObjectURL(blob));
        setLoading(false);
    };

  return (
    <section className=''>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim.</p>

        </div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='input' placeholder='Write promt' />
            <button type='submit'>Generate</button>
        </form>
        <div>
            {loading && <div>loading.....</div>}
            {!loading && output &&(
                <div>
                    <img src={output} alt="hehe" />
                </div>
            )}
        </div>
    </section>
  )
}

export default Generator