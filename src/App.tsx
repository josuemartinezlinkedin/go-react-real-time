import './App.css';
import {useState} from 'react'
import ChannelSection from './Components';

function App() {
  type nameOfChannel = {
    name: string;
  }
  const channels: nameOfChannel[] = [
    { name: 'Hardware Support' },
    { name: 'Software Support' },
  ]
  const [channelList, setChannelList] = useState<nameOfChannel[]>(channels)
  const addChannel: (name: string) => void = (name) => {
    // let filteredName = channelList.filter(channel => channel.name !== name);
    // setChannelList(
    //     () => [...filteredName, {name:name}]
    // )
    //some function to check array items
    if (!channelList.some(values => values.name === name)) {
      setChannelList((current) => [...current, { name: name }])
    }
    else { alert("TRY A DIFFERENT NAME YOU TWAT!!") }
  }        // setChannelList((current) => [...current,{name: name}])
  return (

    <div className="App">
      <header className="App-header"/>
        <ChannelSection addChannel={addChannel} channelList={channelList}/>
    </div>
  );
}

export default App;
