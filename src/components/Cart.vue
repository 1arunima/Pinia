<script setup>

import { useCartStore } from '../Stores/Cart';
import { storeToRefs } from 'pinia';

const stores =useCartStore()
const {removeItem}=stores
const {cartItems}=storeToRefs(stores)

</script>


<template>
    <div>
        <h1>CART PAGE</h1>
        <div v-if="cartItems.length>0">
            <div v-for="i in cartItems">
                    <h1>{{ i.title }}</h1>
                    <button @click="removeItem(i.id)">Remove</button>
            </div>
        </div>
        <main v-else>
            <h2>There is nothing in the card</h2>
        </main>
    </div>
</template>