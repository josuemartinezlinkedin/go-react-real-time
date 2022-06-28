import ChannelForm from "./ChannelForm/channel-form.component";
import ChannelList from "./ChannelList/channel-list.component";
import { useState, useEffect } from "react";


const ChannelSection = () => {
    let channels = [
        { name: 'Hardware Support', new:"uniform" },
        { name: 'Software Support', new: "school" },
    ]

    const [channelList, setChannelList] = useState(channels)

    function addChannel (name) {
        // let filteredName = channelList.filter(channel => channel.name !== name);
        // setChannelList(
        //     () => [...filteredName, {name:name}]
        // )
        setChannelList((current) => [...current,{name: name}])
        console.log(channelList) 
    }        // setChannelList((current) => [...current,{name: name}])

    

return (
    <div>
        <ChannelList list={channelList}/>
        <ChannelForm addChannel={addChannel} />
    </div>
)
}

export default ChannelSection