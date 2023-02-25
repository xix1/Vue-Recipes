<template>
    <div class="p-8" >
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <input v-model="keyword" @change="searchMeals" type="text" 
        class="bg-white rounded border-2 border-gray-200 w-full mb-3"
            placeholder="查找食材吧！" />

        <router-link 
            :to="{
                name: 'byIngredient', 
                params: { ingredient: ingredient.strIngredient } 
            }"
            v-for="ingredient of computedIngredients"
            :key="ingredient.idIngredient"
            class="block bg-white rounded p-3 mb-3 shadow">
            <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>        
    </div>

</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import axiosClient from '../axiosClient';

const keyword = ref('');
const ingredients = ref([]);
const computedIngredients = computed(() => {
    return ingredients.value.filter(i => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    )
});

onMounted(() => {
    axiosClient.get('list.php?i=list')  //making request to server
        .then(({ data }) => {  //with the response 'data'
            ingredients.value = data.meals
        })
})
</script>

