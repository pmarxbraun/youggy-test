import React, { useState, useEffect, useRef } from "react"
import "./tagsInput.css"

const TagsInput = (props) => {
  // Using the State hook to declare our tags variable and setTags to update the variable.
  const { defaultTags, useMissionFormData, title } = props

  const [tags, setTags] = useState(defaultTags || [])
  const [missionData, setMissionData] = useMissionFormData
  const inputComp = useRef()

  const removeTag = (i) => {
    const newTags = [...tags]
    newTags.splice(i, 1)

    // Call the defined function setTags which will replace tags with the new value.
    setTags(newTags)
  }

  const inputKeyDown = (e) => {
    const val = e.target.value
    if (e.key === "Enter" && val) {
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return
      }
      setTags([...tags, val])
      inputComp.current.value = null
      inputComp.current.placeholder = ""
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1)
    }
  }

  useEffect(
    () => setMissionData({ ...missionData, [title]: [...tags] }),
    [tags]
  )

  return (
    <div className="input-tag">
      <ul className="input-tag__tags">
        {tags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button
              type="button"
              onClick={() => {
                removeTag(i)
              }}
            >
              +
            </button>
          </li>
        ))}
        <li className="input-tag__tags__input">
          <input type="text" onKeyDown={inputKeyDown} ref={inputComp} />
        </li>
      </ul>
    </div>
  )
}

export default TagsInput
