<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">
          <router-link to="/" class="text-white text-decoration-none">
            Lorton 10K Race
          </router-link>
        </q-toolbar-title>

        <q-btn
          flat
          dense
          label="Home"
          icon="home"
          to="/"
          class="q-mr-sm"
        />
        
        <q-btn
          flat
          dense
          label="Gallery"
          icon="photo_library"
          to="/gallery"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>

<style scoped>
.text-decoration-none {
  text-decoration: none;
}
</style>
