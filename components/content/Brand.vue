<template>
  <div class="brand">
    <div>
      <img
        src="/tailwind.webp"
        width="244"
        height="173"
        loading="lazy"
        alt="tailwindCSS"
      />
      <figcaption>TailwindCSS</figcaption>
    </div>
    <div>
      <img
        src="/vitejs.webp"
        width="300"
        height="300"
        loading="lazy"
        alt="vitejs"
      />
      <figcaption>ViteJS</figcaption>
    </div>
    <div>
      <img
        src="/gutenberg.webp"
        width="150"
        height="150"
        loading="lazy"
        alt="gutenberg"
      />
      <figcaption>Gutenberg</figcaption>
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
    '.brand': {
        display: 'flex',
        item: 'center',
        margin: '0 auto',
        '@mq.lg': {
            maxWidth: '50rem'
        }
    },
    '.brand > div': {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column'
    },
    '.brand > div > img': {
        maxWidth: '100px',
        width: '100%',
        height: 'auto',
        marginBottom: '1rem',
        '@mq.lg': {
            maxWidth: '130px'
        }
    },
    '.brand > div:last-child > img': {
        maxWidth: '80px',
        width: '100%',
        height: 'auto',
        marginBottom: '1rem',
        '@mq.lg': {
            maxWidth: '105px'
        }
    }
    })
</style>
