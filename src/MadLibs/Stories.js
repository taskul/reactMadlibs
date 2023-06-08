import { useState } from "react"

const storyList = [
    {name:"forest",
    story: "There was a {noun} in the forest that liked {adjective} {noun2}, and {color} {noun2}"},
    {name:"far away",
    story: "Far away in a {noun} land the sun was always {color} color, and {adjective} {noun2} never slept"},
    {name:"space",
    story: "Space was known for {noun} with the galaxy shimmering in {color} lights with {adjective} {noun2}, and {color} {noun2}"}
]

const Stories = ({pickStory, stories=storyList}) => {
    // set a story index that we'll use to retrieve a story from an array
    const [storyIdx, setStoryIdx] = useState(0);

    // on change we'll which ever item is selected will be saved as story index
    const handleChange = (e) => {
        setStoryIdx(e.target.value)
    }

    return (
        <div>
            <h1>Select a story</h1>
            <select onChange={handleChange}>
                {/* map over stories array to display all array items as 
                    options in select input field
                */}
                {stories.map((story, idx) => (
                    <option key={idx} value={idx}>
                        {story.name}
                    </option>
                ))}
            </select>
            {/* use parent provided function pickStory to select story from the array
             */}
            <button onClick={() => pickStory(stories[storyIdx].story)}>
                Select
            </button>
        </div>
    )
}

export default Stories;