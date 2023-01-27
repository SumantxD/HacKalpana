import React from "react";
import AgoraRTC from "agora-rtc-sdk-ng"
import { useRef, useState, useEffect } from "react";


export default function App() {

  let options = {
    appId: "4871916f1508465c9d097ec220d87697",
    channel: "sumant",
    token: "007eJxTYLjAUqQeWxz813F62+k7Jf6NEUz8oR5PTk+U1tIzN5Y2CFFgMLEwN7Q0NEszNDWwMDEzTbZMMbA0T002MjJIsTA3szSvDb+S3BDIyMBe7M3CyACBID4bQ3FpbmJeCQMDAGAoG68=",
    uid: 0,
  };

  let channelParameters = {
    localAudioTrack: null,
    localVideoTrack: null,
    remoteAudioTrack: null,
    remoteVideoTrack: null,
    remoteUid: null,
  };

  //we will create our refs here

  const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  const remotePlayerContainer = document.createElement("div");
  const localPlayerContainer = document.createElement("div");

  async function startBasicCall() {

    localPlayerContainer.id = options.uid;
    localPlayerContainer.textContent = "Local user " + options.uid;
    // Set the local video container size.
    localPlayerContainer.style.width = "640px";
    localPlayerContainer.style.height = "480px";
    localPlayerContainer.style.padding = "15px 5px 5px 5px";
    // Set the remote video container size.
    remotePlayerContainer.style.width = "640px";
    remotePlayerContainer.style.height = "480px";
    remotePlayerContainer.style.padding = "15px 5px 5px 5px";


    agoraEngine.on("user-published", async (user, mediaType) => {
      await agoraEngine.subscribe(user, mediaType);
      console.log("subscribe success");

      if (mediaType == "video") {
        channelParameters.remoteVideoTrack = user.videoTrack;
        channelParameters.remoteAudioTrack = user.audioTrack;
        // Save the remote user id for reuse.
        channelParameters.remoteUid = user.uid.toString();
        // Specify the ID of the DIV container. You can use the uid of the remote user.
        remotePlayerContainer.id = user.uid.toString();
        channelParameters.remoteUid = user.uid.toString();
        remotePlayerContainer.textContent = "Remote user " + user.uid.toString();
        // Append the remote container to the page body.
        document.body.append(remotePlayerContainer);
        // Play the remote video track.
        channelParameters.remoteVideoTrack.play(remotePlayerContainer);
      }

      if (mediaType == "audio") {
        channelParameters.remoteAudioTrack = user.audioTrack;
        channelParameters.remoteAudioTrack.play();
      }

      agoraEngine.on("user-unpublished", (user) => {
        console.log(user.uid + "has left the channel");
      });

    });

    //will will have to remove teh window.onload //as we do not need it in react
    //then we have to extract all the function out from it
    //then use the normal event handlers to handle the events as in normal react code
  }



  let joinStream = async function () {
    await agoraEngine.join(
      options.appId,
      options.channel,
      options.token,
      options.uid
    );
    channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    channelParameters.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
    // Append the local video container to the page body.
    document.body.append(localPlayerContainer);
    // Publish the local audio and video tracks in the channel.
    await agoraEngine.publish([
      channelParameters.localAudioTrack,
      channelParameters.localVideoTrack,
    ]);
    // Play the local video track.
    channelParameters.localVideoTrack.play(localPlayerContainer);
    console.log("publish success!");
  };

  let leaveStream = async function () {
    channelParameters.localAudioTrack.close();
    channelParameters.localVideoTrack.close();
    // Remove the containers you created for the local video and remote video.
    removeVideoDiv(remotePlayerContainer.id);
    removeVideoDiv(localPlayerContainer.id);
    // Leave the channel
    await agoraEngine.leave();
    console.log("You left the channel");
    // Refresh the page for reuse
    window.location.reload();
  };

  useEffect(() => {
    startBasicCall();
  }, []);


  // Remove the video stream from the container. //this is when we trigger the leave event
  function removeVideoDiv(elementId) {
    console.log("Removing " + elementId + "Div");
    let Div = document.getElementById(elementId);
    if (Div) {
      Div.remove();
    }
  }

  return (
    <>
      <div className=" bg-slate-300 h-16 mt-14 flex justify-center">
        <button onClick={() => {joinStream()}} className='border-2 border-slate-700 rounded-md p-2 m-2 text-slate-700 font-mono font-semibold bg-slate-400'>join stream</button>
      </div>

      <div className=" flex-col">
          <div className="  bg-slate-200 w-1/2 mx-auto mt-10 h-[450px] border-2 border-dashed border-slate-700"> 
          </div>

          <div className=" bg-slate-300 w-1/2 mx-auto mt-2 flex justify-around">

              <button onClick={() => {leaveStream()}} className='border-2 border-slate-700 rounded-md p-2 m-2 text-slate-700 font-mono font-semibold bg-slate-400'>Leave stream</button>
              <button className='border-2 border-slate-700 rounded-md p-2 m-2 text-slate-700 font-mono font-semibold bg-slate-400'>Mic On</button>
              <button className='border-2 border-slate-700 rounded-md p-2 m-2 text-slate-700 font-mono font-semibold bg-slate-400'>Camera On</button>

          </div>
      </div>

    </>
  )
}