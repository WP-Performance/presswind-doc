<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: '10rem',
  },
  height: {
    type: String,
    default: '10rem',
  },
  zIndex: {
    type: String,
    default: '10',
  },
  top: {
    type: String,
    default: '0',
  },
  left: {
    type: String,
    default: 'auto',
  },
  right: {
    type: String,
    default: 'auto',
  },
  blur: {
    type: String,
    default: '50px',
  },
})
</script>

<template>
  <div class="ellipsis">
    <div class="ellipsis-item" />
  </div>
</template>

<style scoped lang="ts">
css({
  '.ellipsis': {
    pointerEvents: 'none',
    position: 'absolute',
    top: (props) => props.top,
    left: (props) => props.left,
    right: (props) => props.right,
    zIndex: (props) => props.zIndex,
    width: '-webkit-fill-available',
    maxWidth: (props) => props.width,
    height: (props) => props.height,
    filter: (props) => `blur(${props.blur})`,
    '.ellipsis-item': {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(97.62deg, rgba(190, 24, 90, 0.42) 2.27%, rgba(65,209,255, 0.42) 50.88%, rgba(190, 24, 90, 0.42) 98.48%)',
    }
  }
})
</style>
