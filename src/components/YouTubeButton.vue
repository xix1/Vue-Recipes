<template>
    <a :href="href" target="_blank"
        class="px-3 py-2 rounded text-white border-2 border-orange-600  bg-orange-500 hover:bg-orange-600  transition-colors">
        <slot>YouTube</slot> <!--//通过这个slot，在不同的地方引用这个组件时，就可以改变显示的文字内容-->
    </a>
</template>

<script setup>

const props = defineProps({
    href: ''
})
</script>

<style lang="scss" scoped></style>