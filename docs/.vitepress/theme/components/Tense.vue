<template>
  <div class="tense_main">
    <img :src="imgSrc" alt="tense diagram" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  img: String
})

const imgSrc = computed(() => withBase(props.img))
</script>

<style scoped>
.tense_main {
  text-align: center;
}
</style>