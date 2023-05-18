<script setup lang="ts">

</script>
<template>
  <form method="POST" class="text-gray-darkest mt-16 space-y-10">
    <slot name="hidden-inputs"></slot>
    <div class="flex gap-8 sm:gap-20 lg:gap-32 sm:flex-row flex-col">
      <div class="sm:w-1/2">
        <label for="from-name" class="text-lg md:text-2xl block mb-4">Full Name</label>
        <input type="text" name="fromName" id="from-name" autocomplete="name" required
          class="border-b border-gray-700 w-full outline-none md:text-xl">
      </div>
      <div class="sm:w-1/2">
        <label for="from-email" class="text-lg md:text-2xl block mb-4">Email</label>
        <input type="email" name="fromEmail" id="from-email" autocomplete="email" required
          class="w-full border-b border-gray-700 outline-none md:text-xl">
      </div>
    </div>
    <div>
      <label for="subject" class="text-lg md:text-2xl block mb-4">Subject</label>
      <input type="text" name="subject" id="subject" autocomplete="email" required
        class="w-full border-b border-gray-700 outline-none md:text-xl">
    </div>
    <div>
      <label for="message" class="text-lg md:text-2xl block mb-4">Message</label>
      <textarea name="message" id="message" rows="6" cols="40" autocomplete="email" required
        class="border border-gray-700 rounded-lg bg-gray-200 w-full outline-none md:text-xl py-1.5 px-2.5"></textarea>
    </div>
    <button type="submit" class="btn">Send</button>
  </form>
</template>
