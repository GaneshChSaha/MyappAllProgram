import './tweet.css';
export const Tweet=(props)=>{
    return(
        <div class="mainwrapper">
            <div class="wrapper">
            <p>{props.name},{props.handler}</p>
            <p>{props.message}</p>
        </div>
        </div>
    )
}