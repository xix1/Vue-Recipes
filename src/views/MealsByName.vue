<template>
    <div class="p-8 pb-0">
        <input v-model="keyword" @change="searchMeals" type="text" 
        class="bg-white rounded border-2 border-gray-200 w-full"
            placeholder="查找食谱吧！" />

    </div>
    <Meals :meals="meals"/>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue'


const keyword = ref('');
//access the data from the store state
const meals = computed(() => store.state.searchedMeals);

const route = useRoute();

function searchMeals() {
    if (keyword.value){
        store.dispatch('searchMeals', keyword.value) //call action of the store
    }
    else {
        store.commit("setSearchedMeals", [])
    }
    
}

onMounted(() => {
    keyword.value = route.params.name  //把url中的name值也绑定到keyword
    if (keyword.value) {
        searchMeals()
    }
})
</script>



<style lang="scss" scoped></style>