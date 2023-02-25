<template>
    <div class="p-8 pb-0">
        <input v-model="keyword" @change="searchMeals" type="text" 
        class="rounded border-2 border-gray-200 w-full"
            placeholder="查找食谱吧！" />

    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue'


const keyword = ref('');
//access the data from the store state
const meals = computed(() => store.state.searchedMeals);

const route = useRoute();

function searchMeals() {
    store.dispatch('searchMeals', keyword.value) //call action of the store
}

onMounted(() => {
    keyword.value = route.params.name  //把url中的name值也绑定到keyword
    if (keyword.value) {
        searchMeals()
    }
})
</script>



<style lang="scss" scoped></style>