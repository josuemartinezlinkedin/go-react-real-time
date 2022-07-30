import {useState, useEffect, useRef} from 'react'


type messages = {
    message: string;
    user: string;
    time: Date
}
type MessagesSectionProps = {
    activeChannel: string;
    activeUser: string
}
type MessageBoxProps = {
    addMessages: (message: string, user: string, time: Date) => void;
    // messagesMap: Map<string, messages[]>;
    messageRef: React.RefObject<HTMLInputElement> | null;
    user: string;
}
type MessageListProps = {
    messageList: messages[]
}

let messagesMap = new Map<string, messages[]>()




function MessagesComponent({ message, user, time }: messages) {
    return (
        <div className='message-container message-sent'>
            <p className="message_name">
                <span><b>{user}</b></span>
                {' ' + time.toString()}
            </p>
            <p className="message">
                <i>
                    {message}
                </i>
            </p>
        </div>
    )
}


const MessageList = ({ messageList }: MessageListProps) => {

    let messageText = messageList.map((messageInList: messages) => {
        return (<MessagesComponent
            key={messageInList.message} message={messageInList.message} user={messageInList.user} time={messageInList.time} />
        )
    }
    )
    return (
        <div>
            <ul>
                {messageText}
            </ul>
        </div>
    )
}



function MessageBox({ addMessages, messageRef, user }: MessageBoxProps) {


    const [aMessage, setAMessage] = useState('')



    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAMessage(e.target.value)
    }
    // function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent) => {
        e.preventDefault()
        const timeNow = new Date()
        addMessages(aMessage, user, timeNow)
        setAMessage('')
    }

    return (
        <>
            <form className='message-form' id="message-form" onSubmit={onSubmit}>
                <input ref={messageRef} className='message-form_input' onChange={onChange} value={aMessage}
                    placeholder="Add Message" type="text" name="addToMessages" id="props.message" />

                <button className='message-form_bttn' type="submit" form="message-form"
                    value="Submit" >Add Me!!</button>
            </form>
        </>
    )
}


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