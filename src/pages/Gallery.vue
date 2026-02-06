<template>
  <q-page class="flex flex-center">
    <div class="text-center q-pa-xl">
      <q-icon name="photo_library" size="120px" color="primary" class="q-mb-md" />
      <h1 class="text-h2 text-weight-bold q-mb-md">Photo Gallery</h1>
      <p class="text-h5 text-grey-7 q-mb-lg">Coming Soon!</p>
      <p class="text-body1 text-grey-6">
        Race photos will be available for purchase after the event.
      </p>
      <q-btn
        flat
        color="primary"
        label="Back to Home"
        icon="home"
        to="/"
        class="q-mt-lg"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GalleryPage'
})
</script>

<style scoped>
.flex-center {
  min-height: 100vh;
}
</style>
