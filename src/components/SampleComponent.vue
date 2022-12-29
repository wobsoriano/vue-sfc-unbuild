<script setup lang="ts">
defineProps<{
  firstName: string
}>()
</script>

<template>
  <div>
    hello, {{ firstName }}
  </div>
</template>
