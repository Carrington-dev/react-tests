// import { useState} from 'react'

function Clickables() {
    // const { clicked, setClicked } = useState(false)
    const onClickHandler = () => {
        // setClicked(!clicked)
    }
    return ( 
        <>
            <h1>Hello World!</h1>
            {/* { !clicked  && (<p>It's good to see you</p>)}
            { clicked && (<p>Good bye</p>)} */}
            <button onClick={ onClickHandler }>Click Me!</button>
        </>
     );
}

export default Clickables;