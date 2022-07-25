import MessagesComponent from '../MessagesComponent/messages-component.component'

type messages = {
    message: string;
    user: string;
    time: Date
}
type MessageListProps = {
    messageList: messages[]
}

const MessageList = ({messageList}:MessageListProps) => {

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

export default MessageList