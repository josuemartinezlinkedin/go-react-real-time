import React from 'react'
import Channel from '../Channel/channel.component'

const ChannelList = () => {
  let channels = [
    {name:'Hardware Support'},
    {name:'Software Support'}
  ]


  let channelComponents = channels.map( (channelInList) => { 
  return ( <Channel key={channelInList.name} name={channelInList.name} />
  )}
  ) 
  return (
    <>
    <ul>
      {channelComponents}
    </ul>
    </>
  )
}

export default ChannelList