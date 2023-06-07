import { useState } from "react";
import MadLibsForm from "./MadLibsForm";
import './MadLibs.css'
import Stories from "./Stories";

const MadLibs = () => {
    const [baseStory, setBaseStory] = useState();
    const [storyDisplayed, setStoryDisplayed] = useState()
    const [isShowingStory, setIsShowingStory] = useState(false)
    const createStory = (wordData) => {
        const wordValues = Object.values(wordData);
        const wordKeys = Object.keys(wordData)
        let newStory = baseStory;
        const mappedStory = wordKeys.map((key, idx) => 
            (newStory = newStory.replace(new RegExp(`{${key}}`,'g'), wordValues[idx])
            ))

        console.log(mappedStory[mappedStory.length-1])
        setIsShowingStory(true)
        setStoryDisplayed(mappedStory[mappedStory.length-1])
    }

    const restartMadlibs = () => {
        setIsShowingStory(false)
        setStoryDisplayed('')
        setBaseStory(null)
    }

    const pickStory = (story) => {
        setBaseStory(story)
    }

    return (
        <div className="MadLibs">
            <div>
                <h1>MadLibs!</h1>
                {!baseStory ? 
                    <Stories pickStory={pickStory} />
                :
                <div>
                    {!isShowingStory ?
                        <MadLibsForm createStory={createStory} />
                        :
                        <div className="MadLibs-story">
                            {storyDisplayed}
                            <div className="MadLibs-story-restart">
                                <button onClick={restartMadlibs}>Restart</button>
                            </div>
                        </div>
                    }
                </div>
            }
            </div>
        </div>
    )
}

export default MadLibs;