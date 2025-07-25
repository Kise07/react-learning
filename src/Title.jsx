import React, {useState, useEffect} from 'react';

export default function Title() {
    
    const [title] = useState('my title');
    const [inputVal, updateInput] = useState('');
    const [list, updateList] = useState([]);
    
    useEffect(
        () => {
            console.log('effect run')
        }, [list, inputVal]
    )

    return (
        <div>
            <h3>{title}</h3>
            <input type="text" value={inputVal} onChange={e => updateInput(e.target.value)} />
            <button onClick={() => {
                updateList([...list, inputVal]);
                updateInput('');
                }}>Click me</button>
            {
                list.map((item, i) => <div key={i}>{item}</div>)
            }
        </div>
    )
}