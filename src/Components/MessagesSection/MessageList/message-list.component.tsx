import React from 'react'
import MessagesComponent from '../MessagesComponent/messages-component.component'

type messages = {
    // userName?: string,
    message: string
}
type MessageListProps = {
    messageList: messages[]
}

const MessageList = ({messageList}:MessageListProps) => {
    
    let messageText = messageList.map((messageInList: messages) => {
        console.log(messageInList)

        return (<MessagesComponent
            key={messageInList.message} message={messageInList.message} />
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

export default MessageList