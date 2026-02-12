<template>
  <div id="asao-app">
    <NavBar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterSection,
    WhatsAppButton
  }
}
</script>
