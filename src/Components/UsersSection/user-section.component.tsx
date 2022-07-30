import { useState, FormEventHandler, FormEvent } from 'react'
import React from 'react'

type User = {
    userName: string;
    userId: string;
}
type UserSectionProps = {
    activeUser: string;
    setActiveUser: React.Dispatch<React.SetStateAction<string>>;
    userList: User[];
    setUserList: React.Dispatch<React.SetStateAction<User[]>>;
}

type UserFormProps = {
    addUser: (name: string) => void;
}


type UsersComponentProps = {
    name: User['userName'];
    activeUser: string;
    setActiveUser: React.Dispatch<React.SetStateAction<string>>

}
type UserListProps = {
    userList: User[];
    activeUser: string;
    setActiveUser: React.Dispatch<React.SetStateAction<string>>
}



const UsersComponent = ({ name, setActiveUser, activeUser }: UsersComponentProps) => {
    const onClick: React.MouseEventHandler<HTMLLIElement> = (e: React.MouseEvent) => {
        e.preventDefault();
        alert("i've been clicked");
        return setActiveUser(name)
    }
    const active = name === activeUser ? 'user_name-active' : 'user_name'
    return (
        <>
            <li className='user-list-item' onClick={onClick}>
                <a className={active}>
                    {name}
                </a>
            </li>
        </>
    )
}



const UserList = ({ userList, activeUser, setActiveUser }: UserListProps) => {

    const userName = userList.map((usersInList: User) => {
        return (<UsersComponent setActiveUser={setActiveUser} activeUser={activeUser}
            key={usersInList.userId} name={usersInList.userName} />
        )
    }
    )
    return (
        <div>
            <ul>
                {userName}
            </ul>
        </div>
    )
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

const UserSection = ({ activeUser, setActiveUser, userList, setUserList}: UserSectionProps) => { 
    // addUserFunction
    const addUser: (name: string) => void = (name) => {
        if (!userList.some(values => values.userName === name)) {
            setUserList((current) => [...current, { userName: name, userId: name }])
        }
        else { alert("TRY A DIFFERENT NAME YOU TWAT!!") }
    }

  return (
      <div className='user-section'>
          <div className="user-section_header">
              <h4 className='user_section_header-tag'>Users</h4>
          </div>
          <div className="user-section_area" >
              <h3 className='user_name_header'>{activeUser === ''? 'log in' :activeUser}</h3>
              <UserList userList={userList} activeUser={activeUser} setActiveUser={setActiveUser}/>
              <UserForm addUser={addUser}/>
          </div>
      </div>
  )
}
export default UserSection;