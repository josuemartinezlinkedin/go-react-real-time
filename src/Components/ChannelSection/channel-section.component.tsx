import ChannelForm from "./ChannelForm/channel-form.component";
import ChannelList from "./ChannelList/channel-list.component";
import { useEffect, useState} from "react";

import './channel-section.styles.css'
type nameOfChannel = {
    name: string;
}
type ChannelSectionProps = {
    addChannel: (name: string) => void;
    channelList: nameOfChannel[]
}

const ChannelSection = ({addChannel, channelList}:ChannelSectionProps) => {


    

return (
    <div className="channel-section">
        <div className="channel-section_header">
            <h4 className="channel-section_header-tag">Channel Section</h4>
        </div>
        <div className="channel-section-area">
            <ChannelList list={channelList} />
            <ChannelForm addChannel={addChannel} />
        </div>
    </div> 
)
}

export default ChannelSection