import React from 'react'
import './layout.css'

function Layout(props) {
    return (
        <div className="layout">
            <div id="overlay" style={{ 'display': 'none' }}>
                <div className="loader" style={{ "width": "50px" }}>
                    <img src="./img/loading.gif" alt="" />
                </div>
            </div>

            <div className="container" >
                <div className="row p-0 m-0" id="call_container_div">

                    <div className="local_class_peep" id="local_view">
                        <div id="self-view"></div>
                        <div className="self-name">Local User</div>
                    </div>

                    <div className="remote_class_peep" id="remote_view">
                        <div id="call_div"></div>
                        <div id="show_stream_div"></div>
                        <div className="remote-name">Remote User</div>
                    </div>

                    <div className="toolbar-buttons">
                        <div className="tools">
                            <div className="mute-icon" id="mute_audio" title="Mute/Unmute Audio">
                                <i className="fa fa-microphone" id="self_aMute"></i>
                            </div>
                            <div className="video-mute-icon" id="mute_video" title="Mute/Unmute Video">
                                <i className="fa fa-video" id="self_vMute"></i>
                            </div>
                            <div className="video-mute-icon" id="share_screen_btn" title="Start Share">
                                <i className="fa fa-desktop fa-fw SSicon"></i>
                            </div>
                            <div className="video-mute-icon" id="toggle_chat" title="Chat">
                                <i className="fas fa-comment-dots fa-fw CBicon" ></i>
                                <span className="tag tag-danger top" id="chat-tag">&nbsp;</span>
                            </div>
                            <div className="video-mute-icon" title="End Call">
                                <i className="fas fa-phone fa-fw CBicon" id="disconnect_call"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
