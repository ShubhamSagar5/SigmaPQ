const MessageName = ({name,text}) => {
    
    return (
        <div>
            <h3 style={{color:name.length > 3 ? text : "blue" }}>{name}</h3>
        </div>
    )
}

export default MessageName