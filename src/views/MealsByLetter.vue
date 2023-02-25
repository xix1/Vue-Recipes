<template>
    <div class="flex justify-center gap-2 mt-2">
        <router-link 
        :to="{ name: 'byLetter', params: { letter } }" 
        v-for="letter of letters" :key="letter"
        >
            {{ letter }}
        </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue'

const route = useRoute();

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
//access the data from the store state
const meals = computed(() => store.state.mealsByLetter)


//监听route的变化，否则点击letter后只有刷新页面才会显示
watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})
onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
    
})
</script>

<style lang="scss" scoped></style>