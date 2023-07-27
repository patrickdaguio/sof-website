<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const header = ref<HTMLElement | null>(null)
const showShadow = ref(false)
const oldHeaderHeight = ref<number | null>(96)
const newHeaderHeight = ref<number | null>(oldHeaderHeight.value)

onMounted(() => {
  if (header.value) oldHeaderHeight.value = header.value.clientHeight
})


function handleScroll() {
  const currentScrollPosition = window.scrollY

  if (!header.value) return

  showShadow.value = currentScrollPosition > 0 ? true : false

  if (showShadow.value && oldHeaderHeight.value) newHeaderHeight.value = oldHeaderHeight.value - 8
  else newHeaderHeight.value = oldHeaderHeight.value
}

function handleHeaderRezise(e: Event) {
  if (!header.value) return

  const target = e.target as Window

  if (target.screen.width < 768) {
    oldHeaderHeight.value = 80
    newHeaderHeight.value = 80
  } else {
    oldHeaderHeight.value = 96
    newHeaderHeight.value = 96
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleHeaderRezise)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', handleHeaderRezise)
})

</script>

<template>
  <header
    class="sticky top-0 left-0 z-50 bg-white h-20 md:h-24 flex justify-center items-center transition-[height] duration-200"
    :class="{ 'shadow-md': showShadow }" :style="[showShadow ? { height: newHeaderHeight + 'px' } : '']" ref="header">
    <slot name="content"></slot>
  </header>
</template>