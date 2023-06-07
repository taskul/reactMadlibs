import AddCommasForm from "./addCommasForm";
import addCommas from "./addCommas";
import { useState } from "react";
import './addCommas.css'

const AddCommasDisplay = () => {
    const [num, setNum] = useState(0);

    const addCommasToNum = (numString) => {
        const result = addCommas(numString.number)
        setNum(result)

    }

    return (
        <div className="AddCommas">
            <h3>Number: {num}</h3>
            <AddCommasForm addCommasToNum={addCommasToNum}/>
        </div>
    )
}

export default AddCommasDisplay;