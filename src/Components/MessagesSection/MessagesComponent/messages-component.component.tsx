
type messages = {
  // userName?: string,
  message: string
}

function MessagesComponent({message}: messages) {
  return (
    <>
      <li className='channel-list-item'>
        <a>
          {message}
        </a>
      </li>
    </>
  )
}

export default MessagesComponent