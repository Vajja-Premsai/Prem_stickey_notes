import React from 'react'

export default function StickyNote(props) {

  // set a unique div ID for css
  let stickID = "sticky-note-" + props.count

  // create a new blank Refs for Title and Body
  const titleText = React.useRef('')
  const bodyText = React.useRef('')

  // set current state of Title and Body Refs from Props
  titleText.current = props.title
  bodyText.current = props.body

  // update the current state of Title Ref on each key change 
  const handleTitleChange = evt => {
    titleText.current = evt.target.value
  }

  // save the current state of Note Title Ref to the parent NoteBoard List array
  const handleTitleBlur = () => {
    console.log('note #' + props.count + ' title text:\n' + titleText.current + '\n\n')
  }

  // update the current state of Body Ref on each key change 
  const handleBodyChange = evt => {
    bodyText.current = evt.target.value
  }

  // save the current state of Note Body Ref to the parent NoteBoard List array
  const handleBodyBlur = () => {
    console.log('note #' + props.count + ' body text:\n' + bodyText.current + '\n\n')
  }

  return (
    <div id={stickID} className="sticky-note">

      <input className="sticky-title"
        type="text"
        placeholder="title"
        defaultValue={titleText.current}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
      />

      <textarea className="sticky-body"
        onBlur={handleBodyBlur}
        onChange={handleBodyChange}
        defaultValue={bodyText.current}
      >
      </textarea>

    </div>
  )
}
