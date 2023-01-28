import React from "react";
import { useRef, useState, useEffect } from "react";
import { app,storage } from "./firebaseConfig";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { Route,Routes } from "react-router-dom";
import FindADoctor from "./components/findadoctor";
import Home from "./components/home";
import { Conference } from "./components/conference";

export default function App() {

  let options = {
    appId: "4871916f1508465c9d097ec220d87697",
    channel: "sumant",
    token: "007eJxTYJgTqXTPboX93tpM0XM3tsWZGX4o2LB6onj8yjvaziqikRsUGEwszA0tDc3SDE0NLEzMTJMtUwwszVOTjYwMUizMzSzNXZddSW4IZGQ4veQZAyMUgvhsDMWluYl5JQwMAEDsH6Q=",
    uid: 0,
  };

  

  //upload image state

  return (
    <>
    <Routes>
      <Route path="/conference" element={<Conference options={options} />}> </Route>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/finddoctor" element={<FindADoctor />}> </Route>
    </Routes>
      

    </>
  )
}