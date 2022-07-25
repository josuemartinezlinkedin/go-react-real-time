import ChannelForm from "./ChannelForm/channel-form.component";
import ChannelList from "./ChannelList/channel-list.component";

import './channel-section.styles.css'
type nameOfChannel = {
    name: string;
}
type ChannelSectionProps = {
    addChannel: (name: string) => void;
    channelList: nameOfChannel[];
    setActiveChannel: React.Dispatch<React.SetStateAction<string>>
    activeChannel: string;
}

const ChannelSection = ({addChannel, channelList, activeChannel, setActiveChannel}:ChannelSectionProps) => {


    

return (
    <div className="channel-section">
        <div className="channel-section_header">
            <h4 className="channel-section_header-tag">Channel Section</h4>
        </div>
        <div className="channel-section_channel_list">
            <ChannelList listOfChannels={channelList} setActiveChannel={setActiveChannel} activeChannel={activeChannel}/>
            <ChannelForm addChannel={addChannel} />
        </div>
    </div> 
)
}

export default ChannelSection