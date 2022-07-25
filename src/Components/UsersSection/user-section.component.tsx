import UserForm from './UserForm/user-form.component'
import UserList from './UserList/user-list.component'

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
          <div className="user-section_messages_box" >
              <h3 className='user_name_messages'>{activeUser === ''? 'log in' :activeUser}</h3>
              <UserList userList={userList} activeUser={activeUser} setActiveUser={setActiveUser}/>
              <UserForm addUser={addUser}/>
          </div>
      </div>
  )
}
export default UserSection;