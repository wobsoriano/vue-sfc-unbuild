<script setup lang="ts">
withDefaults(defineProps<{
  backgroundColor?: string
}>(), {
  backgroundColor: 'white',
})
</script>

<template>
  <div class="card">
    <div class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot name="body" />
    </div>
    <div class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.card {
  --padding: 1rem;
  background: v-bind(backgroundColor);
  border: 1px solid #777;
  border-radius: .25rem;
  overflow: hidden;
}

.card.card-shadow {
  border: none;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .2);
}

.card-header {
  font-size: 1.5rem;
  padding: var(--padding);
  padding-bottom: 0;
  margin-bottom: .5rem;
}

.card-header.card-image {
  padding: 0;
  overflow: hidden;
}

.card-header.card-image > img {
  display: block;
  width: 100%;
  max-height: 200px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
  transition: 200ms transform ease-in-out;
}

.card:hover > .card-header.card-image > img {
  transform: scale(1.025);
}

.card-body {
  font-size: .9rem;
  padding: 0 var(--padding);
}

.card-footer {
  margin-top: 1rem;
  padding: var(--padding);
  padding-top: 0;
}
</style>
