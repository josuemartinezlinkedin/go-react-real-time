import {useState} from 'react'

type messages = {
    // userName?: string,
    message: string
}
type MessageBoxProps = {
    addMessages: (message: string) => void
}

function MessageBox({addMessages}:MessageBoxProps) {


    const [aMessage, setAMessage] = useState('')

    

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
        <input className='message-form_input' onChange={onChange} value={aMessage} 
        placeholder="Add Message" type="text" name="addToMessages" id="props.message" />
        
        <button className='message-form_bttn' type="submit" form="channelform" 
        value="Submit">Add Me!!</button>
    </form>
    </>
  )
}

export default MessageBox