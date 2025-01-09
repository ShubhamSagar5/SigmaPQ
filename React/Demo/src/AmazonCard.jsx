import Card from "./Card"

const  AmazonCard  = () => {
    
    const productsList = [{
        title:"Logitech MX Master 3S",
        desc1:"8,000 DPI",
        desc2:"5 Programmable Buttons",
        oldPice:12495,
        newPrice:8999
    },
    {
        title:"Apple Pencil(2nd Gen)",
        desc1:"Intative touch surface",
        desc2:"Designed for iPad Pro",
        oldPice:11900,
        newPrice:9199
    },
    {
        title:"zebronics Zeb-Transformer",
        desc1:"Intative touch surface",
        desc2:"Designed for iPad Pro",
        oldPice:1599,
        newPrice:899
    },
    {
        title:"Portronics Toad23 Wireless Mouse",
        desc1:"Wireless Mouse 2.4GHz",
        desc2:"Optical Orientation",
        oldPice:599,
        newPrice:278
    }
]

    return (
        <div style={{backgroundColor:"black",padding:"1rem",borderRadius:"0.5rem"}}>
            <h2>Blockbuster Deals on Computer Accessories | Shop Now</h2>
            <div style={{display:"flex"}}>
                {
                    productsList.map((item)=>{
                        return (
                            <Card title={item.title} desc1={item.desc1} desc2={item.desc2} oldPrice={item.oldPice} newPrice={item.newPrice}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AmazonCard