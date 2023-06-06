import { useState } from "react";
import MadLibsForm from "./MadLibsForm";
import { v4 as uuidv4 } from 'uuid';
import './MadLibs.css'

const MadLibs = () => {
    const [words, setWords] = useState([])
    const [story, setStory] = useState()
    const [isShowingStory, setIsShowingStory] = useState(false)
    const createStory = ({noun, noun2, adjective, color}) => {
        setIsShowingStory(true)
        setStory(`There is a secret swamp hidden in ${noun}, among the living creatures there was
        a ${adjective} ${noun2}. ${noun2} loves ${color} apples.`)
    }

    const restartMadlibs = () => {
        setIsShowingStory(false)
        setStory('')

    }


    return (
        <div className="MadLibs">
            <h1>MadLibs!</h1>
            {isShowingStory ?
                <div className="MadLibs-story">
                    {story}
                    <div className="MadLibs-story-restart">
                        <button onClick={restartMadlibs}>Restart</button>
                    </div>
                </div>
                
                :
                <MadLibsForm createStory={createStory} />
            }
        </div>
    )
}

export default MadLibs;