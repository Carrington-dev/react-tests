import GrandChild from "./GrandChild";

function Children() {
    console.log("I am a child");
    
    return ( <>
        <h1>Hi there I am child</h1>
        <p>You know me</p>
        <GrandChild />
    </> );
}

export default Children;