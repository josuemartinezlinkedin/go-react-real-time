
type User = {
    userName: string;
    userId: string;
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



const UsersComponent = ({ name, setActiveUser, activeUser }: UsersComponentProps ) => {
    const onClick: React.MouseEventHandler<HTMLLIElement> = (e: React.MouseEvent) => {
        e.preventDefault();
        alert("i've been clicked");
        return setActiveUser(name)
    }
    const active = name === activeUser ? 'channel_name-active' : 'channel_name'
    return (
        <>
            <li className='channel-list-item' onClick={onClick}>
                <a>
                    {name}
                </a>
            </li>
        </>
    )
}



const UserList = ({ userList, activeUser, setActiveUser}: UserListProps) => {

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
export default UserList