import {useState} from 'react'
import MessageBox from './MessageBox/message-box.component'
import MessageList from './MessageList/message-list.component'

type MessagesSectionProps = {
    activeChannel: string
}
type messages = {
    // userName?: string,
    message: string
}

function MessagesSection({activeChannel}: MessagesSectionProps) {
    const [addMessage, setAddMessage] = useState<messages[]>([])

    const addMessages: (message: string) => void = (message) => {
        if (!addMessage.some(values => values.message === message)) {
            setAddMessage((current) => [...current, { message: message }])
        }
        else { alert("TRY A DIFFERENT NAME YOU TWAT!!") }
    }
    const selectChannel = activeChannel.length === 0 ? 'select channel' : activeChannel
  return (
    <div className='messages-section'>
        <div className="messages-section_header">
            <h4 className='messages_section_header-tag'>Messages</h4>
        </div>
        <div className="message-section_messages_box" >
            <h3 className='channel_name_messages'>{selectChannel}</h3>
            <MessageBox addMessages={addMessages} />
            <MessageList messageList={addMessage} />
        </div>
    </div>
  )
}

export default MessagesSection