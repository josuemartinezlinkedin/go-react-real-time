import { useState } from 'react'
import React from 'react'

const ChannelForm = ({addChannel}) => {
  const [channelName, setChannelName] = useState('')
 
function onChange (e) {
  setChannelName(e.target.value)
}
function onSubmit(e) {
  addChannel(channelName)
  setChannelName('')
  e.preventDefault()
}

  return (
    <>
    <form onSubmit={onSubmit}>
        <input onChange={onChange} value={channelName} type="text" name="addToList" id="props.name" />
    </form>
    </>
  )
}

export default ChannelForm