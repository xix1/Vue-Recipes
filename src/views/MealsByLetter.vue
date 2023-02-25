<template>
    <div class="flex justify-center gap-2 mt-2">
        <router-link 
        :to="{ name: 'byLetter', params: { letter } }" 
        v-for="letter of letters" :key="letter"
        >
            {{ letter }}
        </router-link>
    </div>
    <Meals :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue'

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