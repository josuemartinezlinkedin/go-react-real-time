import React from 'react'
import Channel from '../Channel/channel.component'
import ChannelForm from '../ChannelForm/channel-form.component'

type ChannelListProps = {
  list: object[]
}

const ChannelList = ({list}: ChannelListProps) => {
  

  let channelComponents = list.map((channelInList: any) => {

  return ( <Channel key={channelInList.name} channel={channelInList} />
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