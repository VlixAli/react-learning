import {useState} from 'react';

function App() {
    const [count, setCount] = useState(0);

    function handleIncrease() {
        setCount(count + 1);
    }

    function handleDecrease() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>My Counter</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
}

export default App;