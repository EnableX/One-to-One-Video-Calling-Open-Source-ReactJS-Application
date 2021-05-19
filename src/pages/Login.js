import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { createRoom as createRoomApi, joinRoom } from '../service/api.js'
import LoginHeader from '../components/LoginHeader'
import './login.css'

const Login = (props) => {

    const [user, setUser] = useState({ name: '', room: '', role: '' });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const enterRoom = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log('Enter room....');
        let joinData = {
            name: user.name,
            role: user.role,
            roomId: user.room,
            user_ref: user.name,
        };

        joinRoom(joinData)
            .then(response => {
                window.location = "/room/" + response.token;
            })
            .catch(err => {
                console.log(err)
            });
    }

    const createNewRoom = (e) => {
        e.preventDefault();
        setLoading(true);
        createRoomApi()
            .then(resp => {
                if (resp.result === 0) {
                    setUser({ ...user, room: resp.room.room_id });
                    setLoading(false);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <main>
            <LoginHeader />
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-12 col-xl-6 col-lg-6 form-hedding">
                        <h1>1-To-1 Video Call</h1>
                        <p>This Sample Code showcases how EnableX Video Service may be used to create a 1-to-1 Video Call
                        Application. The Login Screen explains all basic information is needed to get a EnableX Token to get
                        you connected to a Live Video Session. You may need to create your Access Processes to give a
                    EnableX Token to your User.</p>
                        <h4>Tech Specs</h4>
                        <p>
                            <strong>Web Toolkit: </strong > v<span id="version_num">1.5</span> <br />
                            <strong>Client Application:</strong> HTML5, CSS, JavaScript <br />
                            <strong>Application Server:</strong> NodeJS
                            </p>
                    </div>
                    <div className="col-12 col-md-12 col-xl-5 col-lg-5 offset-md-1">
                        <div className="form-bg login_join_div" style={{ display: 'block', paddingBottom: '25px' }}>
                            <h2 className="text-center">Start a Video Call</h2>
                            <div style={{ display: 'none' }} className="loading text-center">Loading....</div>
                            <form className="mt-4" id="login_form" onSubmit={enterRoom}>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <input type="text" className="form-control" id="nameText" name="nameText" placeholder="Name"
                                            onChange={e => setUser({ ...user, name: e.target.value })}
                                            value={user.name}
                                            required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control" id="roomName" name="roomName"
                                            onChange={e => setUser({ ...user, room: e.target.value })}
                                            value={user.room}
                                            placeholder="Room ID" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <select className="selectpicker show-menu-arrow form-control" id="attendeeRole"
                                            onChange={e => setUser({ ...user, role: e.target.value })}
                                            value={user.role}
                                            name="attendeeRole" required>
                                            <option value="">Select Role</option>
                                            <option value="participant">Join as Participant</option>
                                            <option value="moderator">Join as Moderator</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <input type="checkbox" name="agree" style={{ height: '15px', width: '15px' }} defaultChecked required />
                                        <label>I
                                    agree to <a target="_blank" rel="noopener noreferrer" href="https://www.enablex.io/legals/tou/">Terms of
                                        Use</a> and
                                        <a target="_blank" rel="noopener noreferrer"
                                                href="https://www.enablex.io/legals/privacy-policy/">Privacy Policy</a>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-row justify-content-start">
                                    <div className="form-group col-12 checkbox-sec">
                                        <div>
                                            <div>
                                                {/* <input type="submit" value="Sign In" className="btn btn-primary" id="joinRoom" /> */}

                                                <button className="btn btn-primary" id="joinRoom">
                                                    {loading ? 'Wait...' : 'Sign In'}
                                                </button>

                                            </div>
                                            <div id="create_room_div">
                                                <hr />
                                                <p className="text-center">
                                                    Don't have a Room-ID?
                                                        <a href="#" onClick={createNewRoom} id="create_room">
                                                        {loading ? 'Wait...' : 'Create One'}

                                                    </a>
                                                </p>
                                            </div>
                                            <br />
                                            <span id="message" style={{ color: 'red' }}></span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <ul className="footerUl">
                                <li><a href="https://www.enablex.io/legals/tou/">Terms</a></li>
                                <li><a href="https://www.enablex.io/legals/privacy-policy/">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="footer-p">Copyright © VCLOUDX PTE LTD. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default Login
