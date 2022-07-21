type Props = {}

export default function UserSection({}: Props) {
  return (
      <div className='user-section'>
          <div className="user-section_header">
              <h4 className='user_section_header-tag'>Users</h4>
          </div>
          <div className="user-section_messages_box" >
              <h3 className='user_name_messages'>User Section</h3>
          </div>
      </div>
  )
}