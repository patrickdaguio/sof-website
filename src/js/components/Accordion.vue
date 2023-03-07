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
  <div class="mb-8">
    <div class="pb-2.5 border-b border-zinc-900">
      <button type="button" class="w-full font-bold text-2xl flex items-center justify-between cursor-pointer"
        @click="toggleAccordion">
        <slot name="question"></slot>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="3" stroke="currentColor"
          class="text-zinc-900 w-6 h-6 transition-transform duration-500" :class="{ 'rotate-180': isOpen }">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>
    <div class="mt-2.5 mb-5 overflow-hidden transition-all duration-500 ease-in-out"
      :style="{ 'max-height': answerContainerMaxHeight + 'px' }" ref="answerContainer">
      <slot name="answer"></slot>
    </div>
  </div>
</template>