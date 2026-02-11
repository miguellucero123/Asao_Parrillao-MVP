<template>
  <footer class="footer-ap">
    <div class="container">
      <div class="row g-4">
        <!-- Brand column -->
        <div class="col-lg-4 col-md-6">
          <div class="d-flex align-items-center gap-2 mb-3">
            <i class="bi bi-fire" style="font-size: 1.5rem; color: var(--ap-fire-500);"></i>
            <span style="font-family: var(--font-heading); font-weight: 800; font-size: 1.4rem; color: var(--ap-white);">
              Asao<span class="text-gradient">_Parrillao</span>
            </span>
          </div>
          <p style="color: var(--ap-dark-200); font-size: 0.95rem; line-height: 1.8; max-width: 300px;">
            La experiencia completa del asado, donde quieras y cuando quieras. Calidad premium en cada evento.
          </p>
          <div class="footer-social mt-3">
            <a href="#" aria-label="Instagram" id="footer-instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook" id="footer-facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://wa.me/56999319162" target="_blank" aria-label="WhatsApp" id="footer-whatsapp">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>

        <!-- Quick links -->
        <div class="col-lg-2 col-md-6">
          <h5>Navegación</h5>
          <router-link class="footer-link" to="/">Inicio</router-link>
          <router-link class="footer-link" to="/servicios">Servicios</router-link>
          <router-link class="footer-link" to="/nosotros">Nosotros</router-link>
          <router-link class="footer-link" to="/contacto">Contacto</router-link>
        </div>

        <!-- Services -->
        <div class="col-lg-3 col-md-6">
          <h5>Servicios</h5>
          <router-link class="footer-link" to="/servicios">Asado Básico</router-link>
          <router-link class="footer-link" to="/servicios">Asado Completo</router-link>
          <router-link class="footer-link" to="/servicios">Asado Temático</router-link>
          <router-link class="footer-link" to="/contacto">Cotización Personalizada</router-link>
        </div>

        <!-- Contact -->
        <div class="col-lg-3 col-md-6">
          <h5>Contacto</h5>
          <div class="d-flex align-items-center gap-2 mb-2">
            <i class="bi bi-envelope-fill" style="color: var(--ap-fire-400);"></i>
            <a href="mailto:miguellucerogatica@gmail.com" class="footer-link" style="padding: 0;">
              miguellucerogatica@gmail.com
            </a>
          </div>
          <div class="d-flex align-items-center gap-2 mb-2">
            <i class="bi bi-phone-fill" style="color: var(--ap-fire-400);"></i>
            <a href="tel:+56999319162" class="footer-link" style="padding: 0;">
              +56 9 9931 9162
            </a>
          </div>
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-geo-alt-fill" style="color: var(--ap-fire-400);"></i>
            <span style="color: var(--ap-dark-200); font-size: 0.95rem;">V Región, Valparaíso</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="mb-0">&copy; {{ currentYear }} Asao_Parrillao. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
