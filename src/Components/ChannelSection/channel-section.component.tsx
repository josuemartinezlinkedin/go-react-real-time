import ChannelForm from "./ChannelForm/channel-form.component";
import ChannelList from "./ChannelList/channel-list.component";
import { useState, useEffect, FC, SetStateAction } from "react";


const ChannelSection = () => {
    let channels = [
        { name: 'Hardware Support'},
        { name: 'Software Support'},
    ]

    const [channelList, setChannelList] = useState<object[]>(channels)
    const addChannel: (name: string) => void = (name) => {
        // let filteredName = channelList.filter(channel => channel.name !== name);
        // setChannelList(
        //     () => [...filteredName, {name:name}]
        // )
        setChannelList((current) => [...current, { name: name }])
    }        // setChannelList((current) => [...current,{name: name}])

    

return (
    <div>
        <ChannelList list={channelList}/>
        <ChannelForm addChannel={addChannel} />
    </div>
)
}

export default ChannelSection