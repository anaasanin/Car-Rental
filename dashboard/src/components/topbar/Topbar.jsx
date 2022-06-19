import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import './topbar.css'

const Topbar = () => {
  return (
      <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>ProCar Admin</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContiner">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContiner">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContiner">
                    <Settings/>
                </div>
                <img src="https://cdn2.f-cdn.com/contestentries/1440473/30778261/5bdd02db9ff4c_thumb900.jpg" alt="" className="topAvatar" />
            </div>
        </div>
      </div>
  )
}

export default Topbar