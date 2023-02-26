<template>
   <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Ingredient</h1>

    </div>
   <Meals :meals="meals"/>
   
</template>

<script setup>
import { computed, onMounted,watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue'


const route = useRoute();


const meals = computed(() => store.state.mealsByIngredient)


onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})


</script>

