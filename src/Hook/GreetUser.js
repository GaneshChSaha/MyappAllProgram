import React, {useState} from 'react';


export default function GreetUser() {
    let [userName, setUserName]=useState('');
    let greetingMessage='';

    if(userName !=''){
        greetingMessage=<h1>Greetings {userName}</h1>
    }
    return (
        <div>
            <input onChange={(eventInfo)=>{setUserName(eventInfo.target.value)}}
                placeholder="Enter Your NAme"></input>
                {greetingMessage}
        </div>
    )
}
