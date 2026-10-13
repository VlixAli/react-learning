import {useState} from 'react';

function App() {
    const [count, setCount] = useState(0);

    function handleIncrease() {
        setCount(previousCount => previousCount + 1);
    }

    function handleDecrease() {
        setCount(previousCount => previousCount - 1);
    }

    function handleIncreaseByThree() {
        setCount(previousCount => previousCount + 1);
        setCount(previousCount => previousCount + 1);
        setCount(previousCount => previousCount + 1);
    }

    return (
        <div>
            <h1>My Counter</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleIncreaseByThree}>Increase by 3</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
}

export default App;