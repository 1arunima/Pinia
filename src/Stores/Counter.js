import { defineStore } from "pinia"; 

import { ref } from "vue";


const count = ref(0)
const useCounterStore = defineStore('counter', () => {
  
    function increment() {
      count.value++
    }
  
    return { count, increment }
  }

)




export { useCounterStore };