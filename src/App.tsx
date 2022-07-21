import './App.css';
import {useState, useRef} from 'react'
import {ChannelSection, MessagesSection} from './Components';

type nameOfChannel = {
  name: string;
}

function App() {
  
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
      <header className="App-header"/>
        <ChannelSection addChannel={addChannel} channelList={channelList} setActiveChannel={setActiveChannel} activeChannel={activeChannel}/>
      <MessagesSection activeChannel={activeChannel} />
    </div>
  );
}

export default App;
