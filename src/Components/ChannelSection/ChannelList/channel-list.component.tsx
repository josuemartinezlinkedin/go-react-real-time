import React from 'react'
import Channel from '../Channel/channel.component'
import ChannelForm from '../ChannelForm/channel-form.component'

const ChannelList = ({list}) => {
  

  let channelComponents = list.map( (channelInList) => { 
  return ( <Channel key={channelInList.name} name={channelInList.name} />
  )}
  )

  return (
    <div className="channel">
      <ul>
        {channelComponents}
      </ul>
    </div>
  )
}

export default ChannelList