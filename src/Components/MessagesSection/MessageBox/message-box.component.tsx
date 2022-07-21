import {useState} from 'react'
type messages = {
    userName?: string;
    message: string;
}
type MessageBoxProps = {
    messageBox: messages[];
}

function MessageBox() {
    const [addMessage, setAddMessage] = useState<messages[]>([])
    const [aMessage, setAMessage] = useState('')

    const addMessages: (message: string) => void = (message) => {
        if (!addMessage.some(values => values.message === message)) {
            setAddMessage((current) => [...current, { message: message }])
        }
        else { alert("TRY A DIFFERENT NAME YOU TWAT!!") }
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAMessage(e.target.value)
    }
    // function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent) => {
        e.preventDefault()
        addMessages(aMessage)
        setAMessage('')
    }
  return (
    <>
    <form className='message-form' id="message-form" onSubmit={onSubmit}>
        <input className='message-form_input' onChange={onChange} value={aMessage} placeholder="Add Message" type="text" name="addToMessages" id="props.message" />
        <button className='message-form_bttn' type="submit" form="channelform" value="Submit">Add Me!!</button>
    </form>
        
        
    </>
  )
}

export default MessageBox