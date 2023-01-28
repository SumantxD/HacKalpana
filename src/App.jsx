import React from "react";
import AgoraRTC from "agora-rtc-sdk-ng"
import { useRef, useState, useEffect } from "react";


export default function App() {

  let options = {
    appId: "4871916f1508465c9d097ec220d87697",
    channel: "sumant",
    token: "007eJxTYJgTqXTPboX93tpM0XM3tsWZGX4o2LB6onj8yjvaziqikRsUGEwszA0tDc3SDE0NLEzMTJMtUwwszVOTjYwMUizMzSzNXZddSW4IZGQ4veQZAyMUgvhsDMWluYl5JQwMAEDsH6Q=",
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
  //we have created the remote player conatiner //and local player container manually 
  //all we need to do is to refer it

  // const remotePlayerContainer = document.createElement("div");
  const remotePlayerContainer = useRef(null);
  // const localPlayerContainer = document.createElement("div");
  const localPlayerContainer = useRef(null);

  async function startBasicCall() {

    localPlayerContainer.current.id = options.uid;
    // localPlayerContainer.current.textContent = "Local user " + options.uid;
    // Set the local video container size.
    // localPlayerContainer.current.style.width = "640px";
    // localPlayerContainer.current.style.height = "480px";
    localPlayerContainer.current.style.padding = "3px";
    // Set the remote video container size.
    // remotePlayerContainer.current.style.width = "640px";
    // remotePlayerContainer.current.style.height = "480px";
    remotePlayerContainer.current.style.padding = "3px";


    agoraEngine.on("user-published", async (user, mediaType) => {
      await agoraEngine.subscribe(user, mediaType);
      console.log("subscribe success");

      if (mediaType == "video") {
        channelParameters.remoteVideoTrack = user.videoTrack;
        channelParameters.remoteAudioTrack = user.audioTrack;
        // Save the remote user id for reuse.
        channelParameters.remoteUid = user.uid.toString();
        // Specify the ID of the DIV container. You can use the uid of the remote user.
        remotePlayerContainer.current.id = user.uid.toString();
        channelParameters.remoteUid = user.uid.toString();
        // remotePlayerContainer.current.textContent = "Remote user " + user.uid.toString();
        // Append the remote container to the page body.
        // document.body.append(remotePlayerContainer);
        // Play the remote video track.
        //inside the play we have to pass in the container where we want to play the video
        //just forget about the wrapper class and implement it hard core. ******************************
        channelParameters.remoteVideoTrack.play(remotePlayerContainer.current);
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
    // document.body.append(localPlayerContainer.current);
    // Publish the local audio and video tracks in the channel.
    await agoraEngine.publish([
      channelParameters.localAudioTrack,
      channelParameters.localVideoTrack,
    ]);
    // Play the local video track.
    channelParameters.localVideoTrack.play(localPlayerContainer.current);
    console.log("publish success!");
  };

  let leaveStream = async function () {
    channelParameters.localAudioTrack.close();
    channelParameters.localVideoTrack.close();
    // Remove the containers you created for the local video and remote video.
    // removeVideoDiv(remotePlayerContainer.id);
    // removeVideoDiv(localPlayerContainer.id);
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
        <div className=" flex bg-slate-400">
          <div ref={remotePlayerContainer} className="  bg-slate-200 w-1/2 mx-auto mt-10 h-[450px] border-2 border-dashed border-slate-700 relative left-[87px]"> 
          </div>
          <div ref={localPlayerContainer} className=" bg-slate-800 w-44 h-44 border-2 border-dashed rounded-md mt-10 relative right-[55px]">
          </div>
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