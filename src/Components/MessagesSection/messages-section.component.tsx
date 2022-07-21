import React from 'react'
import MessageBox from './MessageBox/message-box.component'

type MessagesSectionProps = {
    activeChannel: string
}

function MessagesSection({activeChannel}: MessagesSectionProps) {
    const selectChannel = activeChannel.length === 0 ? 'select channel' : activeChannel
  return (
    <div className='messages-section'>
        <div className="messages-section_header">
            <h4 className='messages_section_header-tag'>Messages</h4>
        </div>
        <div className="message-section_messages_box" >
            <h3 className='channel_name_messages'>{selectChannel}</h3>
        </div>
        <MessageBox/>
    </div>
  )
}

export default MessagesSection