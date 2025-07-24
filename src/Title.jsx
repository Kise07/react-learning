import React, {useState} from 'react';

export default function Title() {
    
    const [title, updateTitle] = useState('my title');
    const [inputVal, updateInput] = useState('');
    const [list, updateList] = useState([]);

    return (
        <div>
            <h3>{title}</h3>
            <input type="text" value={inputVal} onChange={e => updateInput(e.target.value)} />
            <button onClick={() => {
                updateList([...list, inputVal]);
                updateInput('');
                updateTitle(list); // It adds all the string from list together
                }}>Click me</button>
            {
                list.map((item, i) => <div key={i}>{item}</div>)
            }
        </div>
    )
}