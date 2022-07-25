import {useState, useEffect, useRef} from 'react'
import MessageBox from './MessageBox/message-box.component'
import MessageList from './MessageList/message-list.component'

type MessagesSectionProps = {
    activeChannel: string;
    activeUser: string
}
type messages = {
    message: string;
    user: string;
    time: Date
}
let messagesMap = new Map<string, messages[]>()

function MessagesSection({activeChannel, activeUser}: MessagesSectionProps) {  
    //useState
    const [addMessage, setAddMessage] = useState<messages[]>([])
    const [messageToMap] = useState<Map<string, messages[]>>(messagesMap)
    //useRef
    const messageRef = useRef<HTMLInputElement | null> (null)


    // I could turn this into a generic
    const addMessages: (message: string, user:string, time: Date) => void = (message, user, timeNow) => {
          setAddMessage((current) => [...current, { message: message, user: user, time: timeNow  }])
          messageToMap.set(activeChannel, [...addMessage, {message: message, user:user , time: timeNow}])
    }
    // const selectChannel = activeChannel.length === 0 ? 'select a channel and user to start chatting'.toUpperCase() : activeChannel
    // const selectUser = activeUser.length === 0 ? 'select a channel and user to start chatting'.toUpperCase() : activeUser
    const selectUserAndChannel = activeUser.length !== 0 && activeChannel.length !== 0 ? activeChannel : 'select a channel and user to start chatting'.toUpperCase() 

    useEffect(()=>{
        if (messageToMap.get(activeChannel) === undefined) {
            setAddMessage([])
            //This may only be working because useEffect is running twice, console log to see
            messagesMap.set(activeChannel, addMessage) 
        } else { 
     setAddMessage(messagesMap.get(activeChannel) ?? [])
    }

    },[activeChannel])

    const inputBoxAvailability = (selectUserAndChannel === activeChannel) ? <MessageBox
     addMessages={addMessages} messageRef={messageRef} user={activeUser}/> : ''
  return (
    <div className='messages-section'>
        <div className="messages-section_header">
            <h4 className='messages_section_header-tag'>Messages</h4>
        </div>
        <div className="message-section_messages_box" >
            <h3 className='channel_name_messages'>{selectUserAndChannel}</h3>
             {inputBoxAvailability }
            <MessageList messageList={addMessage} />
        </div>
    </div>
  )
}

export default MessagesSection