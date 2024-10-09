import Children from "./Children";
import Parent from "./Parent";

function MainUI() {
    return ( 
        <Parent>
            <Children />
            <Children />
        </Parent> 
     );
}

export default MainUI;