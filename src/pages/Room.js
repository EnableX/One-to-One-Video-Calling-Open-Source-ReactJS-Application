import React, { useState, useEffect } from 'react';
import {
    useParams
} from "react-router-dom";
import './room.css'
let EnxRtc = window.EnxRtc;

export default function Room(props) {
    let { token } = useParams();
    let ATList = [];
    let audio_muted = false;
    let video_muted = false;
    let video_type = "SD";

    let room = null;
    let SubscribedStreamMap = new Map();
    let localStream,
        remote_view,
        sAMute = true,
        sVMute = true,
        rAmute = true,
        rVMute = true;

    let optionsLocal;
    let remoteOptions;
    let isModerator;
    let VideoSize = {
        'HD': [320, 180, 1280, 720],
        'SD': [640, 480, 640, 480],
        'LD': [80, 45, 640, 360]
    };
    let config = {
        video: true,
        audio: true,
        data: true,
        videoSize: VideoSize[video_type],
    };

    optionsLocal = {
        player: {
            height: "150px",
            width: "150px",
            minHeight: "150px",
            minWidth: "150px",
        },
        toolbar: {
            displayMode: false,
        },
        resizer: false,
    };
    remoteOptions = {
        player: {
            height: "100%",
            width: "100%",
        },
        resizer: false,
        toolbar: {
            displayMode: false,
        },
    };

    useEffect(() => {
        joinRoom()
    }, []);


    let enableMuteButton = (muteUnmuteBtn) => {
        muteUnmuteBtn.removeAttribute("disabled");
        muteUnmuteBtn.style.cursor = "pointer";
        muteUnmuteBtn.style.pointerEvents = "auto";
    }


    let joinRoom = () => {
        console.log('joining the room...');
        document.querySelector("#local_view").classList.add("local_class_peep");
        document.querySelector("#remote_view").classList.add("remote_class_peep");
        let muteUnmuteBtn = document.querySelector("#self_vMute");
        EnxRtc.Logger.setLogLevel(0);
        localStream = EnxRtc.joinRoom(token, config, function (success, error) {

            if (error && error == null) {
                document.querySelector(".error_div").innerHTML = "Room connection error." + error.message;
            }
            // if room connects successfully
            if (success && success !== null) {

                //play local view
                localStream.play("self-view", optionsLocal);

                // assigning room object to a variable
                room = success.room;
                // check if the user joined as moderator or participant
                isModerator = room.me.role === "moderator" ? true : false;
                var ownId = success.publishId;
                for (var i = 0; i < success.streams.length; i++) {
                    room.subscribe(success.streams[i]);
                }
                // Active talkers handling
                room.addEventListener("active-talkers-updated", function (event) {
                    console.log("Active Talker List :- " + JSON.stringify(event));
                    var video_player_len = document.querySelector("#call_div").childNodes;

                    ATList = event.message.activeList;

                    if (
                        event.message &&
                        event.message !== null &&
                        event.message.activeList &&
                        event.message.activeList !== null
                    ) {
                        if (ATList.length === 0) {
                            document.querySelector("#call_div").innerHTML = "";
                            document.querySelector(".remote-name").innerText = "";
                        }
                        if (SubscribedStreamMap.size > 0) {

                            if (video_player_len.length >= 1) {
                                return;
                            } else {
                                for (var stream in room.remoteStreams.getAll()) {
                                    var st = room.remoteStreams.getAll()[stream];
                                    for (var j = 0; j < ATList.length; j++) {
                                        if (ATList[j].streamId === st.getID()) {
                                            remote_view = st;
                                            document.querySelector(".self-name").innerHTML = room.me.name;
                                            st.play("call_div", remoteOptions);
                                            document.querySelector(".remote-name").innerHTML = ATList[j].name;
                                        }
                                    }
                                }
                            }
                        }
                    }
                });

                // room recording start  notification
                room.addEventListener("room-record-on", function () {
                    document.querySelector("#rec_notification").style.display = 'block';
                });
                // room recording stop  notification
                room.addEventListener("room-record-off", function () {
                    document.querySelector("#rec_notification").style.display = 'none';
                });

                room.addEventListener("stream-subscribed", function (streamEvent) {
                    if (streamEvent.stream.getID() !== ownId) {
                        SubscribedStreamMap.set(
                            streamEvent.stream.getID(),
                            streamEvent.stream
                        );
                    }
                });


                // user disconnection notification
                room.addEventListener("user-disconnected", function (streamEvent) {
                    document.querySelector("#call_div").innerHTML = "";
                    document.querySelector(".remote-name").innerText = "";
                });
                // room disconnected notification
                room.addEventListener("room-disconnected", function (streamEvent) {
                    window.location.href = "/";
                });
            }
        });

        // self stream audio mute/unmute  function
        document.querySelector("#self_aMute").addEventListener('click', function (e) {
            if (audio_muted) {
                if (room.mute) {
                    console.log("Your audio is muted by moderator");
                } else {
                    localStream.unmuteAudio(function (arg) {
                        document.querySelector("#self_aMute").classList.remove("fa-microphone-slash");
                        document.querySelector("#self_aMute").classList.add("fa-microphone");
                        audio_muted = false;
                    });
                }
            } else {
                localStream.muteAudio(function (arg) {
                    document.querySelector("#self_aMute").classList.remove("fa-microphone");
                    document.querySelector("#self_aMute").classList.add("fa-microphone-slash");
                    audio_muted = true;
                });
            }
        });

        document.querySelector("#disconnect_call").addEventListener("click", function () {
            room.disconnect();
        });

        document.querySelector('#mute_video').addEventListener('click', function () {
            muteUnmuteBtn.style.cursor = "wait";
            muteUnmuteBtn.style.pointerEvents = "none";
            muteUnmuteBtn.disabled = true;
            muteUnmuteBtn.setAttribute("disabled", "disabled");

            if (video_muted) {
                localStream.unmuteVideo(function (res) {
                    if (res.result === 0) {
                        document.querySelector("#self_vMute").classList.remove("fa-video-slash");
                        document.querySelector("#self_vMute").classList.add("fa-video");
                        video_muted = false;
                        enableMuteButton(muteUnmuteBtn);
                    } else if (res.result === 1140) {
                        console.error(res.error);
                        enableMuteButton(muteUnmuteBtn);
                    }
                });
            } else {
                localStream.muteVideo(function (res) {
                    if (res.result === 0) {
                        document.querySelector("#self_vMute").classList.remove("fa-video");
                        document.querySelector("#self_vMute").classList.add("fa-video-slash");
                        video_muted = true;
                        enableMuteButton(muteUnmuteBtn);
                    } else if (res.result === 1140) {
                        enableMuteButton(muteUnmuteBtn);
                    }
                });
            }
        });

    }

    return (
        <div>
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
                                {/* <div className="video-mute-icon" id="share_screen_btn" title="Start Share">
                                    <i className="fa fa-desktop fa-fw SSicon"></i>
                                </div> */}
                                {/* <div className="video-mute-icon" id="toggle_chat" title="Chat">
                                    <i className="fas fa-comment-dots fa-fw CBicon" ></i>
                                    <span className="tag tag-danger top" id="chat-tag">&nbsp;</span>
                                </div> */}
                                <div className="video-mute-icon end-call" title="End Call">
                                    <i className="fas fa-phone fa-fw CBicon" id="disconnect_call"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



