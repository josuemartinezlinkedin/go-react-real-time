
type messages = {
  message: string;
  user: string;
  time: Date
}

function MessagesComponent({message, user, time}: messages) {
  console.log(message, user, time)
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

export default MessagesComponent