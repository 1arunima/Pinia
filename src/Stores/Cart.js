import { defineStore } from "pinia";

import { ref } from "vue";


const  useCartStore =defineStore("cart" ,()=>{
    const cartItems =ref([])


    const addItems=(items)=>{
        cartItems.value.push(items)
    }

    const removeItem =(id)=>{
        cartItems.value =cartItems.value.filter((x)=>x.id!==id)
    }
    return  {cartItems,addItems,removeItem}
})

export {useCartStore}