import "./sidebar.css"
import { RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School} from "@mui/icons-material"
import CloseFriend from "../closeFriend/closeFriend"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/Authcontext"
import {Link} from "react-router-dom"
export default function Sidebar() {
  const {user} = useContext(AuthContext)
  const [Users,setUsers] = useState(user.followings)
  
  // console.log(user)
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <Chat className="sidebarIcon" />
              
            <Link to="/messenger" style={{textDecoration:"none",color:"black"}} >
              <span className="sidebarListItemText">Chats</span>
              </Link>
          </li>
          {/* <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li> */}
        </ul>
        {/* <button className="sidebarButton">Show More</button> */}
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        <h4 className="sidebarTitle">Friends</h4>
          {Users?Users.map((u)=>(<CloseFriend key={u.id} user={u}/>)):null}
        </ul>
      </div>
    </div>
  )
}
