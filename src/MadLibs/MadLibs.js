import { useState } from "react";
import MadLibsForm from "./MadLibsForm";
import './MadLibs.css'
import Stories from "./Stories";

const MadLibs = () => {
    // baseStory is a sentence that we'll fill with user created words
    // baseStory is set with pickStory and comes from Stories
    const [baseStory, setBaseStory] = useState();
    // controls if completed story is displayed or not
    const [isShowingStory, setIsShowingStory] = useState(false)
    // stores the string of the completed story that will be displayed
    const [storyDisplayed, setStoryDisplayed] = useState()

    // after user fills out the words they want to use for the story
    // this handles creation of that story.
    // we create an array of keys and values. 
    // inside sentence {noun} will be dynamically replaced with {${noun}}
    const createStory = (wordData) => {
        const wordValues = Object.values(wordData);
        const wordKeys = Object.keys(wordData)
        let newStory = baseStory;
        const mappedStory = wordKeys.map((key, idx) => 
            (newStory = newStory.replace(new RegExp(`{${key}}`,'g'), wordValues[idx])
            ))
        setIsShowingStory(true)
        // since map returns as array, we'll only grab the last item where
        // all placeholder values have been replaced
        setStoryDisplayed(mappedStory[mappedStory.length-1])
    }

    // restarts the Madlibs
    const restartMadlibs = () => {
        setIsShowingStory(false)
        setStoryDisplayed('')
        setBaseStory(null)
    }

    // sets base story to a string from Stories
    const pickStory = (story) => {
        setBaseStory(story)
    }

    // if there is no baseStory selected, show select menu for picking a baseStory
    // if story is not being shown, then show form for user to add their words
    // otherwise display completed story
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