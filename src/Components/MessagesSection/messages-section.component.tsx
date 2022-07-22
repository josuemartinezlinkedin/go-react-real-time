import {useState, useEffect} from 'react'
import MessageBox from './MessageBox/message-box.component'
import MessageList from './MessageList/message-list.component'

type MessagesSectionProps = {
    activeChannel: string
}
type messages = {
    // userName?: string,
    message: string;
}
let messagesMap = new Map<string, messages[]>()

function MessagesSection({activeChannel}: MessagesSectionProps) {  

    const [addMessage, setAddMessage] = useState<messages[]>([])
    const [messageToMap, setMessageToMap] = useState<Map<string, messages[]>>(messagesMap)

    
    const addMessages: (message: string) => void = (message) => {
        if (!addMessage.some(values => values.message === message)) {
            setAddMessage((current) => [...current, { message: message }])
            setMessageToMap(messageToMap.set(activeChannel, addMessage))
            console.log(messageToMap)
        }
        else { alert("TRY A DIFFERENT NAME YOU TWAT!!") }
    }
    const selectChannel = activeChannel.length === 0 ? 'select a channel to start chatting'.toUpperCase() : activeChannel
    //active chat =  map(key=activeChannel, map messagesList)
    //const myMap = new map(activeChannel, messages[])
    //if activeChannel changes then wipe messages and start new with a push on every message
    
    useEffect(()=>{
    messagesMap.get(activeChannel) === undefined ? 
    messagesMap.set(activeChannel, addMessage) 
    : setAddMessage(messagesMap.get(activeChannel) ?? []) 
    setMessageToMap(messagesMap)
    console.log(messagesMap)
    },[activeChannel])

    const inputBoxAvailability = selectChannel === activeChannel ? <MessageBox addMessages={addMessages} /> : ''
  return (
    <div className='messages-section'>
        <div className="messages-section_header">
            <h4 className='messages_section_header-tag'>Messages</h4>
        </div>
        <div className="message-section_messages_box" >
            <h3 className='channel_name_messages'>{selectChannel}</h3>
             {inputBoxAvailability }
            <MessageList messageList={addMessage} />
        </div>
    </div>
  )
}

export default MessagesSection