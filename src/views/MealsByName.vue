<template>
    <div class="p-8 pb-0">
        <input v-model="keyword" @change="searchMeals" type="text" 
        class="rounded border-2 border-gray-200 w-full"
            placeholder="查找食谱吧！" />

    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div 
            v-for="meal of meals" 
            :key="meal.idMeal" 
            class="bg-white shadow rounded-xl"
        >
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
                <img 
                    :src="meal.strMealThumb" 
                    alt="strMeal" 
                    class="rounded-t-xl w-full h-48 object-cover"
                />
            </router-link>
            
            <div class="p-3">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4 line-clamp-3">
                    {{ meal.strInstructions}}
                </p>
                <div class="flex items-center justify-between">
                   <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import YouTubeButton from '../components/YouTubeButton.vue';

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