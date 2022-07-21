import Channel from '../Channel/channel.component'

type ChannelListProps = {
  listOfChannels: object[];
  setActiveChannel: React.Dispatch<React.SetStateAction<string>>
  activeChannel: string
}

const ChannelList = ({listOfChannels, setActiveChannel, activeChannel}: ChannelListProps) => {
  

  let channelComponents = listOfChannels.map((channelInList: any) => {

    return (<Channel activeChannel={activeChannel} setActiveChannel={setActiveChannel} 
      key={channelInList.name} channel={channelInList} />
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