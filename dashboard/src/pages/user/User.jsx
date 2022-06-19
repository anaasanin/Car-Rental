import { CalendarToday, MailOutline, MapOutlined, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './user.css'

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to='/newuser'>
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://cswnn.edu.in/system/files/2021-02/female-avtar_0.png" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Ana Ašanin</span>
                        <span className="userShowUserTitle">Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">anaasanin</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">01.01.2000.</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+382 68 000 000</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">anaasanin@mail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <MapOutlined className='userShowIcon'/>
                        <span className="userShowInfoTitle">Tivat, Montenegro</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='anaasanin' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='Ana Ašanin' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='anaasanin@mail.com' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='+382 68 000 000' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='Tivat, Montenegro' className='userUpdateInput'/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://cswnn.edu.in/system/files/2021-02/female-avtar_0.png" alt="" className="userUpdateImg" />
                            <label htmlFor="file">
                                <Publish className='userUpdateIcon'/>
                            </label>
                            <input type="file" id='file' style={{display: "none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default User