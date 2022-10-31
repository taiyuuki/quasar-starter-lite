<template>
  <div
    class="q-pa-md"
    flex="row items-center justify-center"
    w="content"
    m="auto"
    text="center"
  >
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div
        class="text-h2"
        style="opacity:.4"
      >
        哎呀...出错了
      </div>

      <q-btn
        class="q-mt-xl"
        bg="color-primary"
        text-color="white"
        unelevated
        to="/"
        label="返回主页"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts">
useMeta({ title: '404' })
</script>

<route lang="yaml">
  meta:
    layout: MainLayout
</route>