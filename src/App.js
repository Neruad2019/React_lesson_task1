import React from 'react'
import Nav from './Views/Nav'
import Footer from './Views/Footer'
import Content from './Views/Content'

function App() {
  const [Items, setItems] = React.useState([
    {id: 1, name: 'Iphone', price: 900, isBasketed: false, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1604021663000'},
    {id: 2, name: 'Samsung', price: 600, isBasketed: false, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6t1Fk90T5AfAjEC5Y2OgxGFP0zjBKmR1pA&usqp=CAU'},
    {id: 3, name: 'Xiaomi', price: 700, isBasketed: false, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA-LqAA8ljGHCDXC5aGi7Jna9GKGfrF8h9w&usqp=CAU'},
    {id: 4, name: 'OPPO', price: 500, isBasketed: false, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTk4yfv6K6Erlyc5WD0ALYRsdx6BGx6aSlQ&usqp=CAU'}
  ])

  const User = [
    {id: 1, fullname: "Dauren Absattarov", email: "Dauren@gmail.com", password: "qweqwe"},
    {id: 2, fullname: "Adminbek", email: "Admin@gmail.com", password: "qweqwe"}
  ]

  const [isOnline, setIsOnline] = React.useState({id:0,isOnline:false})

  function changeBasket(id){
   setItems(Items.map(item=>{
      if(item.id===id){
        item.isBasketed=!item.isBasketed
      }
      return item
    }))
  }


  return (
  <div>
    <Nav/>

    <Content Items={Items} onClick={changeBasket} Users={User}/>

    <Footer/>
  </div>
  )
}

export default App;
