const Card = ({title,desc1,desc2,oldPrice,newPrice}) => {
    return (
        <div style={{border:"1px solid white", padding:"0.5rem", margin:"0.5rem",borderRadius:"0.5rem" }}>
            <p>{title}</p>
            <ul >
                <li>{desc1}</li>
                <li>{desc2}</li>
            </ul>
            <div style={{backgroundColor:"gray",color:"black",}}>
                <span><sup>$</sup><span style={{textDecoration: "line-through"}}>{oldPrice}</span></span>
                &nbsp;&nbsp; <span><sup>$</sup>{newPrice}</span>
            </div>
        </div>
    )
}

export default Card