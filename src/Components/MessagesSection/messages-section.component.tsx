import React from 'react'
type MessagesSectionProps = {
    activeChannel: string
}

function MessagesSection({activeChannel}: MessagesSectionProps) {
  return (
    <div className='messages-section'>
        <div className="messages-section_header">
            <h4 className='messages_section_header-tag'>Messages</h4>
        </div>
        <div className="message-section_messages_box" >
            <h3 className='channel_name_messages'>{activeChannel}</h3>
        </div>
    </div>
  )
}

export default MessagesSection

    // < div className = "channel-section_channel_list" >
    //         <ChannelList listOfChannels={channelList} setActiveChannel={setActiveChannel} activeChannel={activeChannel}/>
    //         <ChannelForm addChannel={addChannel} />
    //     </div >