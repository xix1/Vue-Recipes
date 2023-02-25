<template>
    <a :href="href" target="_blank"
        class="px-3 py-2 rounded text-white border-2 border-red-600  bg-red-500 hover:bg-red-600  transition-colors">
        <slot></slot> <!--//通过这个slot，在不同的地方引用这个组件时，就可以改变显示的文字内容-->
    </a>
</template>

<script setup>

const props = defineProps({
    href: ''
})
</script>

<style lang="scss" scoped></style>