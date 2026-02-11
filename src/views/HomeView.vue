<template>
  <div>
    <!-- ======================== HERO SECTION ======================== -->
    <section class="hero-section" id="hero-section">
      <div class="hero-bg" :style="{ backgroundImage: `url('${heroImage}')` }"></div>
      <div class="hero-overlay"></div>

      <!-- Decorative orbs -->
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>

      <div class="container hero-content">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <p class="text-uppercase fw-semibold mb-3 animate-fade-in-up" style="color: var(--ap-fire-400); letter-spacing: 3px; font-size: 0.85rem;">
              <i class="bi bi-fire"></i> Servicio de Asados Premium
            </p>
            <h1 class="hero-title animate-fade-in-up animate-delay-1">
              Asao_Parrillao: Tu Evento, Nuestro Asado,
              <span class="text-gradient"> Cero Preocupaciones.</span>
            </h1>
            <p class="hero-subtitle animate-fade-in-up animate-delay-2">
              La experiencia completa del asado, donde quieras y cuando quieras.
              Nosotros nos encargamos de todo.
            </p>
            <div class="d-flex flex-wrap gap-3 animate-fade-in-up animate-delay-3">
              <router-link to="/contacto" class="btn-fire" id="hero-cta-primary">
                <i class="bi bi-chat-dots-fill"></i>
                ¡Cotiza tu Asado Ahora!
              </router-link>
              <router-link to="/servicios" class="btn-outline-fire" id="hero-cta-secondary">
                <i class="bi bi-grid-fill"></i>
                Ver Servicios
              </router-link>
            </div>

            <!-- Stats bar -->
            <div class="stats-bar animate-fade-in-up animate-delay-4">
              <div class="row g-4">
                <div class="col-4">
                  <div class="stat-item">
                    <div class="stat-number">200+</div>
                    <div class="stat-label">Eventos Realizados</div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="stat-item">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Satisfacción</div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="stat-item">
                    <div class="stat-number">5<i class="bi bi-star-fill" style="font-size: 1.2rem;"></i></div>
                    <div class="stat-label">Calificación</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== FEATURES SECTION ======================== -->
    <section class="section-padding" id="features-section">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title section-title-centered">
            ¿Por qué elegir <span class="text-gradient">Asao_Parrillao</span>?
          </h2>
          <p class="section-subtitle mx-auto mt-4">
            Nos encargamos de cada detalle para que tú solo disfrutes del mejor asado.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-4" v-for="(feature, i) in features" :key="i">
            <div class="card-premium text-center h-100" :id="'feature-card-' + i">
              <div class="feature-icon mx-auto">
                <i :class="'bi ' + feature.icon"></i>
              </div>
              <h4 style="font-family: var(--font-body); font-weight: 700; font-size: 1.2rem;">
                {{ feature.title }}
              </h4>
              <p style="font-size: 0.95rem; margin-top: 0.75rem;">{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== SERVICES PREVIEW ======================== -->
    <section class="section-padding section-dark" id="services-preview">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title section-title-centered">
            Nuestros <span class="text-gradient">Servicios</span>
          </h2>
          <p class="section-subtitle mx-auto mt-4" style="color: var(--ap-dark-100);">
            Ofrecemos diferentes paquetes y opciones personalizables para que tu evento sea inolvidable.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="service in services" :key="service.id">
            <ServiceCard v-bind="service" />
          </div>
        </div>

        <div class="text-center mt-5">
          <router-link to="/servicios" class="btn-outline-fire" id="home-see-all-services" style="border-color: var(--ap-fire-400); color: var(--ap-fire-400);">
            <i class="bi bi-arrow-right-circle"></i>
            Ver todos los servicios
          </router-link>
        </div>
      </div>
    </section>

    <!-- ======================== TESTIMONIALS ======================== -->
    <section class="section-padding" id="testimonials-section">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title section-title-centered">
            Lo que dicen nuestros <span class="text-gradient">clientes</span>
          </h2>
          <p class="section-subtitle mx-auto mt-4">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="(testimonial, i) in testimonials" :key="i">
            <TestimonialCard v-bind="testimonial" :index="i" />
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== CTA BANNER ======================== -->
    <section class="section-padding" id="cta-section">
      <div class="container">
        <div class="cta-banner">
          <h2 class="mb-3">¿Listo para el mejor asado de tu vida?</h2>
          <p class="mb-4">Cuéntanos sobre tu evento y recibe una cotización personalizada sin compromiso.</p>
          <router-link to="/contacto" class="btn-white" id="home-cta-bottom">
            <i class="bi bi-chat-dots-fill"></i>
            ¡Cotiza tu Asado Ahora!
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from '../components/ServiceCard.vue'
import TestimonialCard from '../components/TestimonialCard.vue'

export default {
  name: 'HomeView',
  components: { ServiceCard, TestimonialCard },
  data() {
    return {
      heroImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=80',
      features: [
        {
          icon: 'bi-gem',
          title: 'Calidad Premium',
          desc: 'Selección de los mejores cortes de carne y productos de primera calidad para tu evento.'
        },
        {
          icon: 'bi-person-hearts',
          title: 'Chefs Expertos',
          desc: 'Parrilleros profesionales con años de experiencia preparando los asados más exquisitos.'
        },
        {
          icon: 'bi-truck',
          title: 'Logística Completa',
          desc: 'Nos encargamos de todo: transporte, montaje, servicio, y limpieza. Tú solo disfruta.'
        }
      ],
      services: [
        {
          id: 'basico',
          title: 'Asado Básico',
          description: 'Nosotros ponemos la carne premium y un parrillero experto. Tú pones el lugar y las ganas.',
          image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
          badge: 'Popular',
          includes: ['Selección de cortes premium', 'Parrillero profesional', 'Carbón y leña incluidos'],
          ctaText: 'Solicitar Cotización',
          ctaLink: '/contacto'
        },
        {
          id: 'completo',
          title: 'Asado Completo',
          description: 'Olvídate de todo. Nos encargamos de la comida, bebestibles, implementos y staff.',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
          badge: 'Premium',
          includes: ['Cortes premium + acompañamientos', 'Bebestibles y vajilla', 'Servicio de garzones y limpieza'],
          ctaText: 'Solicitar Cotización',
          ctaLink: '/contacto'
        },
        {
          id: 'tematico',
          title: 'Asado Temático',
          description: 'Cuéntanos tu idea y creamos un asado a tu medida. Argentino, Chileno Campestre y más.',
          image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
          badge: 'Personalizado',
          includes: ['Temática 100% personalizada', 'Decoración acorde al tema', 'Menú exclusivo diseñado para ti'],
          ctaText: 'Solicitar Cotización',
          ctaLink: '/contacto'
        }
      ],
      testimonials: [
        {
          text: 'Contratamos a Asao_Parrillao para el cumpleaños de mi esposa y fue espectacular. La carne estaba increíble y el servicio impecable. ¡100% recomendados!',
          author: 'Carlos Mendoza',
          role: 'Cumpleaños Familiar',
          stars: 5
        },
        {
          text: 'Para nuestro evento corporativo necesitábamos algo diferente y Asao_Parrillao superó todas las expectativas. Profesionales de principio a fin.',
          author: 'María José Silva',
          role: 'Evento Corporativo',
          stars: 5
        },
        {
          text: 'El asado temático argentino que nos prepararon fue una experiencia única. Todos mis invitados quedaron encantados. ¡Sin duda volveré a contratarlos!',
          author: 'Roberto Guzmán',
          role: 'Reunión de Amigos',
          stars: 5
        }
      ]
    }
  }
}
</script>
