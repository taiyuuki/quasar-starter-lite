<template>
  <div
    border="radius-16"
    bg="color-grey"
    pst="rel"
    :style="boxSize"
    shadow="fcolor-1"
    pointer
    hover="shadow-fcolor-3 [&>div>div]:bg-color-positive"
    @click="switchStatus"
  >
    <div
      :style="iconSize + iconPosition"
      pst="abs"
      transition="all-200"
      bg="color-theme"
      border="radius-50%"
      shadow="inner-fcolor-5"
    >
      <div
        :style="iconSize"
        bg="color-fcolor"
        :class="icon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: Number,
    required: false,
    default: 32,
  },
  value: {
    type: Boolean,
    required: false,
    default: false,
  },
  leftIcon: {
    type: String,
    required: false,
    default: '',
  },
  rightIcon: {
    type: String,
    required: false,
    default: '',
  },
})

const emits = defineEmits(['update:value'])

const statusValue = computed({
  get() {
    return props.value
  },
  set(value) {
    emits('update:value', value)
  },
})

const switchStatus = () => {
  statusValue.value = !statusValue.value
}

const boxSize = computed(() => {
  return `width:${props.size * 2}px;height:${props.size}px`
})

const icon = computed(() => {
  return props.value ? props.rightIcon : props.leftIcon
})

const iconSize = computed(() => {
  return `width:${props.size}px;height:${props.size}px;`
})

const iconPosition = computed(() => {
  return `left:${props.value ? `${props.size}` : '0'}px`
})
</script>

<script lang="ts">
export default { name: 'switch-btn' }
</script>

<style scoped>

</style>