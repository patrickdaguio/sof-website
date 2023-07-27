<script setup lang="ts">
import { ref } from 'vue'

const formInputs = ref({
  name: {
    value: '',
    error: false,
  },
  email: {
    value: '',
    error: false,
  },
  subject: {
    value: '',
    error: false,
  },
  message: {
    value: '',
    error: false,
  },
})

const areInputsValid = ref(true)

function validateInputs() {
  for (const inputKey of Object.keys(formInputs.value) as Array<keyof typeof formInputs.value>) {
    const inputObj = formInputs.value[inputKey];

    if (!inputObj.value.trim()) {
      inputObj.error = true
      areInputsValid.value = true
    } else inputObj.error = false
  }

  validateEmail()
}

function validateEmail() {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(formInputs.value.email.value).toLowerCase())) {
    formInputs.value.email.error = true
    areInputsValid.value = false
  }
}

function submitForm(e: Event) {
  e.preventDefault()
  validateInputs()

  if (!areInputsValid.value) {
    console.log('fail')
    return
  }
}

</script>
<template>
  <form method="POST" class="text-gray-darkest mt-10 space-y-10" @submit="submitForm">
    <slot name="hidden-inputs"></slot>
    <span v-if="!areInputsValid" class="text-red-500">Please correctly fill in all required fields (*).</span>
    <div class="flex gap-8 sm:gap-20 lg:gap-32 sm:flex-row flex-col">
      <div class="sm:w-1/2 relative">
        <label for="from-name" class="text-lg md:text-2xl block mb-4">
          Full Name
          <span :class="{ 'text-red-500': formInputs.name.error }">*</span>
        </label>
        <input type="text" name="fromName" id="from-name" autocomplete="name" required
          class="border-b w-full outline-none md:text-xl" v-model="formInputs.name.value"
          :class="formInputs.name.error ? 'border-red-500' : 'border-gray-700'">
      </div>
      <div class="sm:w-1/2 relative">
        <label for="from-email" class="text-lg md:text-2xl block mb-4">
          Email
          <span :class="{ 'text-red-500': formInputs.email.error }">*</span>
        </label>
        <input type="email" name="fromEmail" id="from-email" autocomplete="email" required
          class="w-full border-b outline-none md:text-xl" v-model="formInputs.email.value"
          :class="formInputs.email.error ? 'border-red-500' : 'border-gray-700'">
      </div>
    </div>
    <div class="relative">
      <label for="subject" class="text-lg md:text-2xl block mb-4">
        Subject
        <span :class="{ 'text-red-500': formInputs.subject.error }">*</span>
      </label>
      <input type="text" name="subject" id="subject" required class="w-full border-b outline-none md:text-xl"
        v-model="formInputs.subject.value" :class="formInputs.subject.error ? 'border-red-500' : 'border-gray-700'">
    </div>
    <div class="relative">
      <label for="message" class="text-lg md:text-2xl block mb-4">
        Message
        <span :class="{ 'text-red-500': formInputs.message.error }">*</span>
      </label>
      <textarea name="message" id="message" rows="6" cols="40" v-model="formInputs.message.value" required
        class="border rounded-lg bg-gray-200 w-full outline-none md:text-xl py-1.5 px-2.5"
        :class="formInputs.message.error ? 'border-red-500' : 'border-gray-700'"></textarea>
    </div>
    <button type="submit" class="btn">Send</button>
  </form>
</template>
