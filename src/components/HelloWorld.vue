<script lang="ts" setup>
import { useCounterStore } from '@/store/modules/counter'

const counter = useCounterStore()

counter.increment()
</script>

<template>
  <div class="text-red-500 mr-1 p-4">
    Current Count: {{ counter.count }}
  </div>
</template>

<style scoped>

</style>
