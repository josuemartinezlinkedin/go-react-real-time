import { useState, FormEventHandler, FormEvent } from 'react'
import React from 'react'




type UserFormProps = {
    addUser: (name: string) => void;
}

const UserForm = ({ addUser }: UserFormProps) => {
    const [userName, setUserName] = useState('')

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUserName(e.target.value)
    }
    // function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const onSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
        addUser(userName)
        setUserName('')
        e.preventDefault()
    }


    return (
        <>
            <form className='user-form' id="userform" onSubmit={onSubmit}>
                <input className='user-form_input' onChange={onChange}
                    value={userName} placeholder="Add User" type="text"
                    name="addToList" id="props.name" />
                <button className='user-form_bttn' type="submit"
                    form="userform" value="Submit">Add Me!!</button>
            </form>
        </>
    )
}
export default UserForm