import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchAllCategories } from '../../../FAKE_API/goods'

const CategoriesCardMobile = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=> {
      setCategories(fetchAllCategories())
    },[])

    if (!categories) return <p>loading...</p>

    return (
        <ul>
            {categories.map((item)=> (
                <li key={item.id} style={{backgroundImage: `url(${item.backgroundmobile})`}}>
                    <Link href={`/catalog/${item.category}`}>
                        <a>
                            <h3>{item.title}</h3>
                        </a>
                    </Link>
                </li>                
            ))}
             <style jsx>{`
                ul {
                   display: flex;
                   flex-wrap: wrap;
                   gap: 0 15px;
                }

                li {
                    width: 140px;
                    height: 140px;
                    background-size: cover;
                    background-repeat: no-repeat; 
                    border-radius: 8px; 
                    margin-bottom: 12px;                   
                }

                a {
                    display: block;
                    width: inherit;
                    height: inherit;
                    padding-left: 16px;
                    padding-top: 14px;
                    padding-right: 10px;                     
                }

                h3 {
                    font-family: 'Din';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 120%;
                    letter-spacing: -0.02em;
                    color: #304250;
                }

                @media (max-width: 375px) {
                    ul {
                        gap: 0 12px;
                    }

                    li {
                        width: 106px;
                        height: 106px;
                    }

                    h3 {
                        font-size: 12px;
                    }

                    a {
                        padding: 8px;
                    }
                }
            `}</style>
        </ul>
    )
}

export default CategoriesCardMobile