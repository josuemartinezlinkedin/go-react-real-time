
import { useState, FormEventHandler, FormEvent } from 'react'


type nameOfChannel = {
    name: string;
}
type ChannelSectionProps = {
    addChannel: (name: string) => void;
    channelList: nameOfChannel[];
    setActiveChannel: React.Dispatch<React.SetStateAction<string>>
    activeChannel: string;
}

type ChannelListProps = {
    listOfChannels: object[];
    setActiveChannel: React.Dispatch<React.SetStateAction<string>>
    activeChannel: string
}

type channel = {
    name: string
}

type ChannelProps = {
    channel: channel;
    setActiveChannel: React.Dispatch<React.SetStateAction<string>>
    activeChannel: string
}
type ChannelFormProps = {
    addChannel: (name: string) => void;
}



const Channel = ({ channel, setActiveChannel, activeChannel }: ChannelProps) => {

    const onClick: React.MouseEventHandler<HTMLLIElement> = (e: React.MouseEvent) => {
        e.preventDefault();
        return setActiveChannel(channel.name)
    }

    const active = channel.name === activeChannel ? 'channel_name-active' : 'channel_name'

    return (
        <>
            <li className='channel-list-item' onClick={onClick}>
                <a className={active}>
                    {channel.name}
                </a>
            </li>
        </>
    )
}


const ChannelList = ({ listOfChannels, setActiveChannel, activeChannel }: ChannelListProps) => {


    let channelComponents = listOfChannels.map((channelInList: any) => {

        return (<Channel activeChannel={activeChannel} setActiveChannel={setActiveChannel}
            key={channelInList.name} channel={channelInList} />
        )
    }
    )

    return (
        <div className="channel">
            <ul>
                {channelComponents}
            </ul>
        </div>
    )
}


const ChannelForm = ({ addChannel }: ChannelFormProps) => {
    const [channelName, setChannelName] = useState('')

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setChannelName(e.target.value)
    }
    // function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const onSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
        addChannel(channelName)
        setChannelName('')
        e.preventDefault()
    }


    return (
        <>
            <form className='channel-form' id="channelform" onSubmit={onSubmit}>
                <input className='channel-form_input' onChange={onChange}
                    value={channelName} placeholder="Add Channel" type="text"
                    name="addToList" id="props.name" />
                <button className='channel-form_bttn' type="submit"
                    form="channelform" value="Submit">Add Me!!</button>
            </form>
        </>
    )
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