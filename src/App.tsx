import './App.css';
import {useState, useRef} from 'react'
import {ChannelSection, MessagesSection, UserSection} from './Components';

type nameOfChannel = {
  name: string;
}
type User = {
  userName: string;
  userId: number;
}

function App() {
  const users: User[] = []
  const [usersList, setUserList] = useState<User[]>(users)
  const [activeUser, setActiveUser] = useState<string>('')
  
  const channels: nameOfChannel[] = [
    // { name: 'Hardware Support' },
    // { name: 'Software Support' },
  ]
  const [channelList, setChannelList] = useState<nameOfChannel[]>(channels)
  const [activeChannel, setActiveChannel] = useState<string>("")

  const addChannel: (name: string) => void = (name) => {
    if (!channelList.some(values => values.name === name)) {
      setChannelList((current) => [...current, { name: name }])
    }
    else { alert("TRY A DIFFERENT NAME YOU TWAT!!") }
  }        
  return (

    <div className="App">
      <header className="App-header" />
      <div className='app_row'>
      <ChannelSection addChannel={addChannel} channelList={channelList} setActiveChannel={setActiveChannel} activeChannel={activeChannel}/>
        <UserSection />
      </div>
      <MessagesSection activeChannel={activeChannel} />
      <div>
      </div>
    </div>
  );
}

export default App;
