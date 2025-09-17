import { useEffect, useState } from "react";

import styles from '../../styles/Cardapio.module.css'

import MainLayout from "../Components/MainLayout";
import MenuCard from "../Components/Menu/MenuCard";
import Loading from "../Components/Layout/Loading";

export default function Cardapio() {
  const [menu, setMenu] = useState();

  useEffect(() => {
    setTimeout(()=> {
      fetch(`http://localhost:3000/api/pizzas` , {
        method : 'GET',
        headers : {
          'Content-Type' : 'aplication/json',
        }
      })
      .then((resp) => resp.json())
      .then((data) => {
        const menuData = data.pizzasData
        setMenu(menuData)
      })
      .catch((err) => console.log(err))
    } , 3000)
    
  }, [])


  return (
    <MainLayout>
      <div className={styles.menu_container}>
        {menu ? menu.map((pizzas)=>(
            <MenuCard 
            name={pizzas.name}
            price={pizzas.price}
            ingredients={pizzas.ingredients}
            key={pizzas.id}
            />
          )) : (
            <div className={styles.menu_container}>
              <Loading />
            </div>
          )}
      </div>   
    </MainLayout>
  );
}
