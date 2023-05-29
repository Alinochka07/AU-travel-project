import React, {useState, useEffect} from "react";



export default function FetchReviewedPrices() {
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:3000/items")
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result)
            }
        )
    }, []);

    return(
        <div>
            {/* <div>{items.map((item) => (
                <p key={item.id}>{items[1].destination[0].price}</p>
            ))}</div> */}
            <div>
                <p>{items[1].destination[0].price}</p>
            </div>
        </div>
    )
}


