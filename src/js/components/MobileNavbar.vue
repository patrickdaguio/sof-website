<script setup lang="ts">
import { computed, ref } from 'vue'

interface Link {
  title: string,
  link: string
}

const navOpen = ref(false)
const showListItems = ref(false)

function isLinkActive(link: string) {
  const currentPage = window.location.pathname

  if (link === currentPage) return true
  else return false
}

const navBarLinks: Link[] = [{
  title: 'Home',
  link: '/'
}, {
  title: 'About',
  link: '/about'
}, {
  title: 'Connect',
  link: '/connect'
}, {
  title: 'Watch',
  link: '/https://www.facebook.com/shieldofaith'
}, {
  title: 'Plan a Visit',
  link: '/contact'
}]

function openNavbar() {
  showListItems.value = !showListItems.value
  if (!navOpen.value) navOpen.value = true
  else setTimeout(() => navOpen.value = false, 300)
}
console.log(window.location.pathname)
</script>

<template>
  <div class="flex justify-between md:hidden items-center h-28">
    <button type="button" @click="openNavbar">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-7 h-7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
    <a class="" href="/">
      <img src="/static/logo.svg" class="sm:w-16 sm:h-16 h-12 w-12" />
    </a>
    <div class="w-7 h-7"></div>
  </div>

  <Transition name="fade" mode="out-in">
    <div v-if="navOpen"
      class="outer md:hidden block absolute h-[calc(100vh-112px)] top-28 left-0 bg-white w-full container z-50">
      <nav class="mt-10 text-zinc-900">
        <TransitionGroup appear name="list" tag="ul" class="space-y-8">
          <template v-if="showListItems">

            <li class="text-4xl font-bold" :class="{ 'underline': isLinkActive(link.link) }" appear
              v-for="link, index in navBarLinks" :key="link.link" :style="{ transitionDelay: `${index * 50}ms` }"><a
                :href="link.link">{{ link.title }}</a></li>
          </template>
        </TransitionGroup>
      </nav>
    </div>
  </Transition>
</template>


<style scoped>
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.list-leave-active,
.list-enter-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}
</style>