import { Children } from "react/cjs/react.production.min";
import Parent from "./Parent";

function MainUI() {
    return ( <Parent>
        <Children />
        <Children />
    </Parent> );
}

export default MainUI;