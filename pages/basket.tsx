import BasketListItem from "../components/BasketListItem/BasketListItem"
import { useEffect, useState } from "react"
import { fetchAllGoods } from "../FAKE_API/goods"


const Basket: React.FC = () => {

    const [goods, setGoods] = useState()

    useEffect(()=> {
      setGoods(fetchAllGoods())
    },[])

    return (
        <>
          <BasketListItem props={goods}/>  
        </>
    )
}

export default Basket