import { ChangeEventHandler, useState } from 'react'
import React from 'react'

type ChannelFormProps = {
  addChannel: (name: string) => void;
}

const ChannelForm = ({addChannel}: ChannelFormProps) => {
  const [channelName, setChannelName] = useState('')
 
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
  setChannelName(e.target.value)
}
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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