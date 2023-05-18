<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const answerContainer = ref<HTMLDivElement>()
const answerContainerMaxHeight = ref(0)

function toggleAccordion(): void {
  if (!answerContainer.value) return

  isOpen.value = !isOpen.value

  if (isOpen.value) answerContainerMaxHeight.value = answerContainer.value.scrollHeight
  else answerContainerMaxHeight.value = 0
}
</script>

<template>
  <div class="md:mb-10 mb-6">
    <div class="md:pb-5 pb-2.5 border-b border-gray-dark">
      <button type="button"
        class="w-full font-extrabold text-gray-dark text-xl md:text-3xl flex items-center justify-between cursor-pointer text-left"
        @click="toggleAccordion">
        <slot name="question"></slot>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor"
          class="md:w-7 md:h-7 w-5 h-5 transition-transform duration-500" :class="{ 'rotate-90': isOpen }">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
    <div class="md:my-5 my-3 overflow-hidden transition-all duration-500 ease-in-out text-sm md:text-xl font-medium"
      :style="{ 'max-height': answerContainerMaxHeight + 'px' }" ref="answerContainer">
      <slot name="answer"></slot>
    </div>
  </div>
</template>