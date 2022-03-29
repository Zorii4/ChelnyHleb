import Link from "next/link"
import { useEffect, useState } from "react"
import { useTypedSelector } from "../hooks/useTypeSelector"
import { fetchAllGoods, fetchAllCategories } from '../FAKE_API/goods'


const CategoriesCard = ({ numberOfColumn }) => {

    // const {categories} = useTypedSelector(state => state.categories)

    const [categories, setCategories] = useState([])


  useEffect(()=> {
    setCategories(fetchAllCategories())
  },[])

    return (
        <ul>
            {categories.map((item)=> (
                <li key={item.id} style={{backgroundImage: `url(${item.background})`}}>
                    <Link href={`/catalog/${item.category}`}>
                        <a>
                            <h3>{item.title}</h3>
                        </a>
                    </Link>
                </li>                
            ))}
            <style jsx>{`
                ul {
                   display:flex;
                   flex-wrap: wrap;
                }

                li {
                    width: 347px;
                    height: 187px;
                    background-size: cover;
                    background-repeat: no-repeat; 
                    border-radius: 12px; 
                    margin-bottom: 12px;                   
                }

                a {
                    display: block;
                    width: inherit;
                    height: inherit;
                    padding-left: 16px;
                    padding-top: 14px;                     
                }
                
                li:not(:nth-child(${numberOfColumn}n)) {
                    margin-right: 12px;
                }
                
                h3 {
                    width: 240px;
                    font-family: 'Golos';
                    font-weight: normal;
                    font-size: 22px;
                    line-height: 120%;
                    color: #304250;
                }
            
            `}</style>
        </ul>
    )
}
export default CategoriesCard