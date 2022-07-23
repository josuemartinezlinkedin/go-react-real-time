import React, {useState, useEffect, useRef} from 'react'
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
    //useState
    const [addMessage, setAddMessage] = useState<messages[]>([])
    const [messageToMap] = useState<Map<string, messages[]>>(messagesMap)
    //useRef
    const messageRef = useRef<HTMLInputElement | null> (null)


    // I could turn this into a generic
    const addMessages: (message: string) => void = (message) => {
          setAddMessage((current) => [...current, { message: message }])
          messageToMap.set(activeChannel, [...addMessage, {message: message}])
    }
    const selectChannel = activeChannel.length === 0 ? 'select a channel to start chatting'.toUpperCase() : 
    activeChannel
    //active chat =  map(key=activeChannel, map messagesList)
    //const myMap = new map(activeChannel, messages[])
    //if activeChannel changes then wipe messages and start new with a push on every message
    useEffect(()=>{

    },[])    
    useEffect(()=>{
        if (messageToMap.get(activeChannel) === undefined) {
            setAddMessage([])
            messagesMap.set(activeChannel, addMessage) 
        } else { 
     setAddMessage(messagesMap.get(activeChannel) ?? [])
    }

    },[activeChannel])

    const inputBoxAvailability = selectChannel === activeChannel ? <MessageBox addMessages={addMessages} messageRef={messageRef}/> : ''
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