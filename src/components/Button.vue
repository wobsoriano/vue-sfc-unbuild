<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'default' | 'outline'
}>(), {
  variant: 'default',
})
</script>

<template>
  <button class="btn" :class="{ 'btn-outline': variant === 'outline' }">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  --color: hsl(200, 50%, 50%);
  background: var(--color);
  color: white;
  border: none;
  font-size: 1rem;
  padding: .5em .75em;
  border-radius: .25em;
  cursor: pointer;
}

.btn:hover, .btn:focus {
  background: hsl(200, 50%, 60%);
}

.btn.btn-outline {
  background: none;
  border: 1px solid var(--color);
  color: var(--color);
}

.btn.btn-outline:hover, .btn.btn-outline:focus {
  background: hsl(200, 50%, 90%);
}

.btn + .btn {
  margin-left: .25rem;
}
</style>
