import React from 'react'
import './toolbar.css'

function Toolbar() {
    return (
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
    )
}

export default Toolbar;