<script setup lang="ts">
import { ref } from 'vue'

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
  link: 'https://www.facebook.com/shieldofaith'
}, {
  title: 'Events',
  link: '/events'
}, {
  title: 'Plan a Visit',
  link: '/visit-us'
}]

function openNavbar() {
  showListItems.value = !showListItems.value
  if (!navOpen.value) navOpen.value = true
  else setTimeout(() => navOpen.value = false, 300)
}
</script>

<template>
  <div class="flex justify-between md:hidden items-center">
    <button type="button" @click="openNavbar">
      <svg class="ham hamRotate ham4" :class="{ 'active': showListItems }" viewBox="0 0 100 100" width="46">
        <path class="line top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
        <path class="line middle" d="m 70,50 h -40" />
        <path class="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
      </svg>
    </button>
    <a class="" href="/">
      <img src="/static/logo.svg" class="sm:w-16 sm:h-16 h-12 w-12" />
    </a>
    <div class="w-7 h-7"></div>
  </div>

  <Transition name="fade" mode="out-in">
    <div v-if="navOpen"
      class="outer md:hidden block absolute h-[calc(100vh-5rem)] top-20 left-0 bg-white w-full container z-50">
      <nav class="mt-12 text-zinc-900">
        <TransitionGroup appear name="list" tag="ul" class="space-y-8">
          <template v-if="showListItems">

            <li class="text-3xl sm:text-4xl font-bold" :class="{ 'underline': isLinkActive(link.link) }" appear
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

.ham {
  -webkit-tap-highlight-color: transparent;
  transition: transform 300ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.hamRotate.active {
  transform: rotate(45deg);
}

.line {
  fill: none;
  transition: stroke-dasharray 300ms, stroke-dashoffset 300ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
}

.ham4 .top {
  stroke-dasharray: 40 121;
}

.ham4 .bottom {
  stroke-dasharray: 40 121;
}

.ham4.active .top {
  stroke-dashoffset: -68px;
}

.ham4.active .bottom {
  stroke-dashoffset: -68px;
}
</style>