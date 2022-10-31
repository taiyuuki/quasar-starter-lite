<template>
  <div>
    <h1
      text="2rem center bold"
      m="10"
    >
      {{ example }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const example = $ref('示例组件')
</script>