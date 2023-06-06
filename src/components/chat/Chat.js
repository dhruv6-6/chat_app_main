import React ,{ useState , useEffect} from "react";
import {useSearchParams } from "react-router-dom"
import io from 'socket.io-client';

import './Chat.css';
import InfoBar from '../infoBar/InfoBar';
import Input from '../input/Input';
import Messages from '../messages/Messages';

let socket;

const Chat = () =>{
    const[name , setName]  = useState("");
    const[room , setRoom] = useState("");
    const[messages , setMessages] = useState([]);
    const[message , setMessage] = useState("");
    const [urlParam] = useSearchParams();
    const ENDPOINT ='https://chat-app-server-dhruv6-6.onrender.com';

    useEffect(() => {
        const tname = urlParam.get("name");
        const troom = urlParam.get("room");

        socket = io(ENDPOINT);

        setName(tname);
        setRoom(troom);

        return () => {
            socket.off();
        };
    }, [ENDPOINT , urlParam]);

    useEffect(() => {
        if(name && room){
            socket.emit( 'join' , ({name:name , room:room}) , (error)=>{
                if(error){
                    alert(error);
                }
            });
        }
    }, [name , room]);

    useEffect(() =>{
        socket.on('message' , (message) =>{
            setMessages([...messages , message]);
        })
    } , [messages]);

    const sendMessage = (event) =>{
        event.preventDefault();

        if(message){
            socket.emit('sendMessage' , message , () => setMessage(""));
        }
    }


    return(   
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages = {messages} name = {name} />
                <Input message = {message} setMessage = {setMessage} sendMessage = {sendMessage}/>
            </div>
        </div>
    )
};

export default Chat;
