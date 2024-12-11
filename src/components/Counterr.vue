<script setup>
import { useCounterStore } from '../Stores/Counter';

const Counter =useCounterStore()

// Counter.count++

// Counter.increment()
</script>


<template>
    <div>
        Current Count:{{ Counter.count }} 
        <button @click="Counter.increment()">Increment</button>
    </div>


</template>