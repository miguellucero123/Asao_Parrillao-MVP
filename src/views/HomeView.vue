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

    <!-- ======================== BLOG / TIPS ======================== -->
    <section class="section-padding" id="blog-section">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title section-title-centered">
            Tips <span class="text-gradient">Parrilleros</span>
          </h2>
          <p class="section-subtitle mx-auto mt-4">
            Consejos de nuestros expertos para que te conviertas en el rey de la parrilla.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="(post, i) in blogPosts" :key="i">
            <BlogCard v-bind="post" @read-more="openPost(post)" />
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== BLOG MODAL ======================== -->
    <div v-if="showModal" class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,0.5); z-index: 9999;" @click.self="closeModal">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header border-0 pb-0">
            <h5 class="modal-title fw-bold">{{ activePost.title }}</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <!-- Imagen en Modal -->
            <img 
              :src="activePost.image" 
              class="w-100 rounded-3 mb-4" 
              style="height: 300px; object-fit: cover;" 
              :alt="activePost.title"
            >
            <div class="blog-content" v-html="activePost.content"></div>
          </div>
          <div class="modal-footer border-0 pt-0">
            <button type="button" class="btn btn-secondary" @click="closeModal">Cerrar</button>
            <router-link to="/contacto" class="btn btn-fire" @click="closeModal">¡Quiero un asado!</router-link>
          </div>
        </div>
      </div>
    </div>

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
import BlogCard from '../components/BlogCard.vue'

export default {
  name: 'HomeView',
  components: { ServiceCard, BlogCard },
  data() {
    return {
      showModal: false,
      activePost: {},
      heroImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
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
          image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          badge: 'Popular',
          includes: ['Selección de cortes premium', 'Parrillero profesional', 'Carbón y leña incluidos'],
          ctaText: 'Solicitar Cotización',
          ctaLink: '/contacto'
        },
        {
          id: 'completo',
          title: 'Asado Completo',
          description: 'Olvídate de todo. Nos encargamos de la comida, bebestibles, implementos y staff.',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          badge: 'Premium',
          includes: ['Cortes premium + acompañamientos', 'Bebestibles y vajilla', 'Servicio de garzones y limpieza'],
          ctaText: 'Solicitar Cotización',
          ctaLink: '/contacto'
        },
        {
          id: 'tematico',
          title: 'Asado Temático',
          description: 'Cuéntanos tu idea y creamos un asado a tu medida. Argentino, Chileno Campestre y más.',
          image: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          badge: 'Personalizado',
          includes: ['Temática 100% personalizada', 'Decoración acorde al tema', 'Menú exclusivo diseñado para ti'],
          ctaText: 'Solicitar Cotización',
          ctaLink: '/contacto'
        }
      ],
      blogPosts: [
        {
          title: 'El secreto del Chimichurri perfecto',
          excerpt: 'Un buen asado no está completo sin un gran chimichurri. Descubre nuestra receta secreta.',
          content: '<p>El chimichurri es el alma de la parrilla argentina y chilena. Para lograr el equilibrio perfecto, mezcla:</p><ul><li>1 taza de perejil fresco picado</li><li>4 dientes de ajo picados fino</li><li>1 cucharada de orégano seco</li><li>1 cucharadita de ají molido (o merquén)</li><li>1/2 taza de aceite de oliva</li><li>1/4 taza de vinagre de vino tinto</li></ul><p><strong>El secreto:</strong> Deja reposar la mezcla al menos 24 horas antes de servir para que los sabores se integren.</p>',
          // Imagen de hierbas y aceites
          image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          date: '10 Feb, 2026',
          tag: 'Recetas'
        },
        {
          title: 'Guía de Cortes: ¿Qué elegir?',
          excerpt: 'Lomo vetado, entraña, punta de ganso... te explicamos las diferencias.',
          content: '<p>Elegir la carne correcta es el 50% del éxito del asado. Aquí nuestros favoritos:</p><ul><li><strong>Lomo Vetado:</strong> Jugoso y sabroso gracias a su grasa infiltrada. Ideal para término medio o tres cuartos.</li><li><strong>Entraña:</strong> Intenso sabor y cocción rápida (vuelta y vuelta). Se sirve jugosa.</li><li><strong>Punta de Ganso:</strong> La capa de grasa exterior le da un sabor único. Cocción lenta para que la grasa se derrita.</li></ul><p>En Asao_Parrillao seleccionamos personalmente cada corte.</p>',
          // Imagen de carne cruda premium
          image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          date: '05 Feb, 2026',
          tag: 'Tips'
        },
        {
          title: 'Técnicas para encender el fuego',
          excerpt: '¿Leña o carbón? Aprende a dominar las brasas.',
          content: '<p>Existen muchas formas, pero la "técnica del volcán" es infalible:</p><ol><li>Forma un anillo de carbón o leña.</li><li>Coloca papel de diario hecho bolas en el centro.</li><li>Rodea el papel con trozos pequeños de carbón.</li><li>Enciende el papel y espera a que el carbón prenda.</li></ol><p><strong>Tip Pro:</strong> Nunca uses acelerantes químicos, ya que alteran el sabor de la carne.</p>',
          // Imagen personalizada subida por el usuario
          image: '/images/tecnicas-fuego.jpg',
          date: '28 Ene, 2026',
          tag: 'Tutorial'
        }
      ]
    }
  },
  methods: {
    openPost(post) {
      this.activePost = post
      this.showModal = true
      document.body.style.overflow = 'hidden' // Prevent scrolling
    },
    closeModal() {
      this.showModal = false
      document.body.style.overflow = 'auto' // Restore scrolling
    }
  }
}
</script>
