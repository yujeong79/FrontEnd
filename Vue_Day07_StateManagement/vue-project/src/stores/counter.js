import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export를 통해서 내보냈기 때문에 App.vue에서 사용할 수 있게 됨
export const useCounterStore = defineStore('counter', () => { // defineStore(이름, 콜백함수)
  const count = ref(7) // state
  const doubleCount = computed(() => count.value * 2) // getter
  function increment() { // action
    count.value++
  }

  return { count, doubleCount, increment }
})
