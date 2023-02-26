<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>

        <input v-model="keyword" type="text"
            class="bg-white rounded border-2 border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full mb-3"
            placeholder="查找食材吧！" />
        <div class="inline-block align-middle grid grid-cols-1 md:grid-cols-7 gap-2 text-xl text-orange-300 ">
            <a href="#"  
                @click.prevent="openIngredient(ingredient)"
                v-for="ingredient of computedIngredients" :key="ingredient.idIngredient"
                class=" bg-white rounded p-3 mb-3 shadow tracking-wide ">
                {{ ingredient.strIngredient }}

        </a>
        </div>

    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import axiosClient from '../axiosClient';
import store from '../store';


const keyword = ref('');
const ingredients = ref([]);
const route = useRouter();
const computedIngredients = computed(() => {
    return ingredients.value.filter(i => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    )
});

function openIngredient(ingredient) {
    store.commit('setIngredient', ingredient)
    route.push({
        name: "byIngredient",
        params: {ingredient: ingredient.strIngredient}
    })
}

onMounted(() => {
    axiosClient.get('list.php?i=list')  //making request to server
        .then(({ data }) => {  //with the response 'data'
            ingredients.value = data.meals
        })
})
</script>

