<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-ap fixed-top" :class="{ scrolled: isScrolled }">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <i class="bi bi-fire brand-icon"></i>
        <span>Asao<span class="text-gradient">_Parrillao</span></span>
      </router-link>

      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMain"
        aria-controls="navbarMain"
        aria-expanded="false"
        aria-label="Menú de navegación"
        id="navbar-toggler"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-1">
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click="closeNav">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/servicios" @click="closeNav">Servicios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/nosotros" @click="closeNav">Nosotros</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto" @click="closeNav">Contacto</router-link>
          </li>
          <li class="nav-item ms-lg-2">
            <router-link class="btn btn-fire" to="/contacto" @click="closeNav" id="nav-cta-btn">
              <i class="bi bi-chat-dots-fill"></i>
              ¡Cotiza Ahora!
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isScrolled: false
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    closeNav() {
      const navCollapse = document.getElementById('navbarMain')
      if (navCollapse && navCollapse.classList.contains('show')) {
        const toggler = document.getElementById('navbar-toggler')
        if (toggler) toggler.click()
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
