<script setup>
import { mdiChevronDown, mdiMoonWaningCrescent } from '@mdi/js';
import Icon from '../Icon.vue';
</script>

<template>
  <header class="flex justify-between p-5">
    <img src="../../assets/logo.png" alt="logo" class="w-40 h-10">
    <div class="flex gap-x-6">
      <div class="text-text flex items-center gap-x-4">
        <span>EN/USD</span>
        <icon :path="mdiChevronDown" />
      </div>
      <div class="pl-6 border-l border-text flex items-center">
        <icon :path="mdiMoonWaningCrescent" class="text-text" w="w-6" h="h-6" />
      </div>
    </div>
  </header>
</template>