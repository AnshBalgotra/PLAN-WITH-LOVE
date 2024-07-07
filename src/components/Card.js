import { useState } from "react";

function Card({id,name,info,price,image,removeTour}){
    function ReadmoreHandler(){
        setRead(!readmore)
    }
    const[readmore,setRead]=useState(false);
    const discription= readmore ? info:`${info.substring(0,200)}....`
    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
            <div className="tour-details">
                
                <h4 className="tour-price">₹{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="discription">{discription}
            <span className="read-more" onClick={ReadmoreHandler}>
                {readmore ? `show less`:`Read More`};
            </span>
            </div>
            <button className="btn-red" onClick={()=>removeTour(id)}> Not Interested</button>

            </div>
        </div>
    );
}

export default Card;