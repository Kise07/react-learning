import React, {useState} from 'react';

export default function Title() {
    
    const [title, updateTitle] = useState('my title');
    const [inputVal, updateInput] = useState('');

    return (
        <div>
            <h3>{title}</h3>
            <input type="text" value={inputVal} onChange={e => updateInput(e.target.value)} />
            <button onClick={() => updateTitle(inputVal)}>Click me</button>
        </div>
    )
}