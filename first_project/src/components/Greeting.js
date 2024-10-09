function Greeting({ title = "Hi Sir", message = "How are you?" }) {
    return ( <>
    <h1>{title}</h1>
    <p>{message}</p>
    </> );
}

export default Greeting;