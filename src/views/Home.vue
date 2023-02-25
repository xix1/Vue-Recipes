<template>
    <div class="flex flex-col p-8 justify-center">
        
        <pre>{{ ingredients }}</pre>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js'



const ingredients = ref([])

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    console.log(response)
    ingredients.value = response.data
})
</script>

