import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', ()=>{
  let id = 1;
  
  const products = ref([
    {id: id++, title: 'Product1', body: '상품1'},
    {id: id++, title: 'Product2', body: '상품2'},
    {id: id++, title: 'Product3', body: '상품3'},
  ]);

  return { products };
});