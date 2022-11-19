<script setup lang="ts">
defineProps<{
  cta: string[]
  secondary: string[]
}>()

// const { data: repoInfos } = useAsyncData('repoInfos', async () => {
//   const response = await $fetch(
//     'https://api.github.com/repos/WP-Performance/press-wind',
//   )
//   return response
// })

// const { data: tagInfos } = useAsyncData('tagInfos', async () => {
//   const response = await $fetch(
//     'https://api.github.com/repos/WP-Performance/press-wind/tags',
//   )
//   return response
// })
</script>

<template>
  <div class="hero-home">
    <h1 v-if="$slots.title" class="title">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <h2 v-if="$slots.subtitle" class="subtitle">
      <ContentSlot :use="$slots.subtitle" unwrap="p" />
    </h2>
    <div class="action">
      <ButtonLink
        v-if="cta"
        class="cta"
        bold
        size="large"
        :href="(cta[1] as any)"
      >
        {{ cta[0] }}
      </ButtonLink>
      <a v-if="secondary" :href="(secondary[1] as any)" class="secondary">
        {{ secondary[0] }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.hero-home {
  padding: 4rem 0;
  text-align: center;
}
.title {
  font-size: clamp(4rem, 8vw, 5.75rem);
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(to right, #bd34fe, #41d1ff);
  font-weight: bold;
}

.subtitle {
  font-size: clamp(3rem, 6vw, 4.2rem);
  color: #333;
  line-height: clamp(3rem, 7vw, 3.9rem);
  font-weight: bold;
  max-width: 80%;
  margin: 0 auto;
}

.action {
  padding: 4rem 0;
}

.cta {
  margin-right: 1rem;
}
</style>
