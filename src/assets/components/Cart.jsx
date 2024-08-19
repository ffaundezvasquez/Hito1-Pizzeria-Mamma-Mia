import React from 'react'
import { useState } from 'react'
import { clp } from "../../utils/total";

export default function Cart({productos}) {

    const [carrito,setCarrito] = useState([])
    let total = carrito.reduce((acumulador, producto)=> acumulador +=producto.count ,0)
    let totalPagar = carrito.reduce((acumulador,producto)=> acumulador += (producto.price * producto.count),0)

    const agregar =(producto)=>{
        let coincidencia = carrito.findIndex(item => item.id === producto.id)
        let nuevoProducto = {id:producto.id, name:producto.name, img:producto.img, count:1, price:producto.price}
        if (coincidencia >=0 ){
            carrito[coincidencia].count++
            setCarrito([...carrito])
        } else {
            setCarrito([...carrito, nuevoProducto])
        }
    }

    const disminuir = (producto)=>{
        let coincidencia = carrito.findIndex(item => item.id === producto.id)
        if (coincidencia>=0){
            if (carrito[coincidencia].count>0){
                carrito[coincidencia].count--
                setCarrito([...carrito])
            }
        } else {
            setCarrito(carrito.filter(item=> item.id !== producto.id))
        }
    }

    const obtenerCantidad =(id) =>{
        const productoEnCarrito = carrito.find(item => item.id ===id)
        return productoEnCarrito ? productoEnCarrito.count : 0
    }

  return (
    <div className='detail'>
        <br></br>
        <h2>Detalles de tu pedido</h2>
        <hr></hr>
        <br></br>       
        <h3>Cantidad de Productos: {total}</h3>
        <div className='d-flex text-align-center justify-content-center'>
            <h3>Total a pagar $ {clp(totalPagar)}</h3>
            <button className='btn btn-outline-success m-2'>Pagar</button>
        </div>
        <hr></hr>
        <div className='p3'>
            {productos.map((producto)=>

                <div className='align-items-center' key={producto.id}>
                    <div className='titulo'>
                        <img src={producto.img} alt="" className=''/>
                    </div>
                    <div className='descripcion'>
                        <p><strong>{producto.name}</strong></p>
                        <p>Precio: <strong>${clp(producto.price)}</strong></p>
                        <p>Cantidad:{obtenerCantidad(producto.id)}</p>
                    </div>
                        
                    <div className='botones'>
                        <button className='btn btn-success m-2'onClick={()=>agregar(producto)}>+</button>
                        <button className='btn btn-success m-2'onClick={()=>disminuir(producto)}>-</button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
