import { useState, FormEventHandler, FormEvent } from 'react'
import React from 'react'

type ChannelFormProps = {
  addChannel: (name: string) => void;
}

const ChannelForm = ({addChannel}: ChannelFormProps) => {
  const [channelName, setChannelName] = useState('')
 
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
  setChannelName(e.target.value)
}
  // function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  const onSubmit:FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
      addChannel(channelName)
      setChannelName('')
      e.preventDefault()
  }
  

  return (
    <>
    <form className='channel-form' id="channelform" onSubmit={onSubmit}>
        <input className='channel-form_input' onChange={onChange} 
        value={channelName} placeholder="Add Channel" type="text" 
        name="addToList" id="props.name" />
        <button className='channel-form_bttn' type="submit" 
        form="channelform" value="Submit">Add Me!!</button>
    </form>
    </>
  )
}

export default ChannelForm
