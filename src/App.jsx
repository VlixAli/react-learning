function Greeting(props) {
    return <h1>Hello, {props.name}! You are {props.age} years old.</h1>;
}

function App() {
    return (
        <div>
            <Greeting name="Ali" age={25} />
            <Greeting name="Ahmed" age={30} />
        </div>
    );
}

export default App;