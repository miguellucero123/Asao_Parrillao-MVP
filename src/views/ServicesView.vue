<template>
  <div>
    <!-- ======================== PAGE HEADER ======================== -->
    <section class="section-dark" style="padding: 8rem 0 4rem;" id="services-header">
      <div class="container text-center">
        <p class="text-uppercase fw-semibold mb-3 animate-fade-in-up" style="color: var(--ap-fire-400); letter-spacing: 3px; font-size: 0.85rem;">
          <i class="bi bi-grid-fill"></i> Lo que ofrecemos
        </p>
        <h1 class="section-title section-title-centered animate-fade-in-up animate-delay-1" style="color: var(--ap-white); font-size: 3rem;">
          Nuestros Servicios de <span class="text-gradient">Asados</span>
        </h1>
        <p class="section-subtitle mx-auto mt-4 animate-fade-in-up animate-delay-2" style="color: var(--ap-dark-100);">
          Ofrecemos diferentes paquetes y opciones personalizables para que tu evento sea inolvidable.
        </p>
      </div>
    </section>

    <!-- ======================== SERVICES GRID ======================== -->
    <section class="section-padding" id="services-grid">
      <div class="container">
        <div class="row g-4 g-lg-5">
          <div class="col-lg-4 col-md-6" v-for="service in services" :key="service.id">
            <ServiceCard v-bind="service" />
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== PROCESS SECTION ======================== -->
    <section class="section-padding" style="background: var(--ap-light-gray);" id="process-section">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title section-title-centered">
            ¿Cómo <span class="text-gradient">funciona</span>?
          </h2>
          <p class="section-subtitle mx-auto mt-4">
            En 4 simples pasos tendrás el asado perfecto para tu evento.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3" v-for="(step, i) in steps" :key="i">
            <div class="card-premium text-center h-100" :id="'step-card-' + i">
              <div class="position-relative mx-auto mb-3" style="width: fit-content;">
                <div class="icon-circle mx-auto">
                  <i :class="'bi ' + step.icon"></i>
                </div>
                <span
                  style="position: absolute; top: -4px; right: -8px; width: 28px; height: 28px; border-radius: 50%; background: var(--gradient-fire); color: white; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; justify-content: center;"
                >
                  {{ i + 1 }}
                </span>
              </div>
              <h5 style="font-family: var(--font-body); font-weight: 700;">{{ step.title }}</h5>
              <p style="font-size: 0.92rem; margin-top: 0.5rem;">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== ADDITIONAL INFO ======================== -->
    <section class="section-padding" id="additional-info">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80"
              alt="Asado premium"
              class="rounded-4 shadow-lg w-100"
              style="object-fit: cover; height: 400px;"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h2 class="section-title">
              Calidad en cada <span class="text-gradient">detalle</span>
            </h2>
            <p class="mt-4" style="font-size: 1.05rem; line-height: 1.9;">
              En Asao_Parrillao nos tomamos en serio cada elemento de tu evento.
              Desde la selección de los cortes de carne hasta la presentación final,
              cada paso es cuidadosamente planeado para garantizar una experiencia excepcional.
            </p>
            <ul class="list-unstyled mt-4">
              <li class="d-flex align-items-start gap-3 mb-3" v-for="(item, i) in highlights" :key="i">
                <div style="min-width: 40px; height: 40px; border-radius: 50%; background: var(--ap-fire-100); display: flex; align-items:center; justify-content:center;">
                  <i :class="'bi ' + item.icon" style="color: var(--ap-fire-500);"></i>
                </div>
                <div>
                  <strong style="color: var(--ap-dark-700);">{{ item.title }}</strong>
                  <p style="font-size: 0.92rem; margin: 0.25rem 0 0;">{{ item.desc }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== CTA ======================== -->
    <section class="section-padding" id="services-cta">
      <div class="container">
        <div class="cta-banner">
          <h2 class="mb-3">¿No encuentras lo que buscas?</h2>
          <p class="mb-4">¡Contáctanos y diseñamos tu evento a tu medida!</p>
          <router-link to="/contacto" class="btn-white" id="services-cta-btn">
            <i class="bi bi-chat-dots-fill"></i>
            Contáctanos
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from '../components/ServiceCard.vue'

export default {
  name: 'ServicesView',
  components: { ServiceCard },
  data() {
    return {
      services: [
        {
          id: 'basico',
          title: 'Asado Básico',
          description: 'Nosotros ponemos la carne premium y un parrillero experto. Ideal para quienes quieren lo esencial con la mejor calidad.',
          image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
          badge: 'Popular',
          includes: [
            'Selección de cortes premium (vacuno, pollo, cerdo)',
            'Parrillero profesional con experiencia',
            'Carbón y/o leña incluidos',
            'Utensilios de parrilla profesionales',
            'Preparación y cocción en el lugar'
          ],
          ctaText: 'Más Detalles / Solicitar Cotización',
          ctaLink: '/contacto'
        },
        {
          id: 'completo',
          title: 'Asado Completo',
          description: 'Olvídate de todo. Nos encargamos de la comida, bebestibles, implementos y staff. La experiencia premium total.',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
          badge: 'Premium',
          includes: [
            'Cortes premium variados de primera calidad',
            'Acompañamientos (ensaladas, papas, salsas)',
            'Bebestibles a elección (jugos, refrescos)',
            'Vajilla completa y cristalería',
            'Servicio de garzones profesionales',
            'Limpieza post-evento incluida'
          ],
          ctaText: 'Más Detalles / Solicitar Cotización',
          ctaLink: '/contacto'
        },
        {
          id: 'tematico',
          title: 'Asado Temático',
          description: 'Cuéntanos tu idea y creamos un asado a tu medida. Desde un clásico asado argentino hasta un chileno campestre.',
          image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
          badge: 'Personalizado',
          includes: [
            'Temática 100% personalizada a tu gusto',
            'Decoración acorde al tema elegido',
            'Menú exclusivo diseñado para la ocasión',
            'Staff vestido según la temática',
            'Música y ambientación (opcional)',
            'Fotografía del evento (según paquete)'
          ],
          ctaText: 'Más Detalles / Solicitar Cotización',
          ctaLink: '/contacto'
        }
      ],
      steps: [
        {
          icon: 'bi-chat-text-fill',
          title: 'Cuéntanos tu idea',
          desc: 'Completa el formulario o llámanos para contarnos sobre tu evento ideal.'
        },
        {
          icon: 'bi-clipboard2-check-fill',
          title: 'Recibe tu cotización',
          desc: 'Te enviamos una propuesta detallada adaptada a tus necesidades y presupuesto.'
        },
        {
          icon: 'bi-calendar-check-fill',
          title: 'Confirma tu fecha',
          desc: 'Reserva tu fecha con un adelanto y nosotros nos encargamos de toda la planificación.'
        },
        {
          icon: 'bi-emoji-laughing-fill',
          title: '¡Disfruta tu asado!',
          desc: 'Relájate y disfruta. Nosotros nos encargamos de cada detalle en tu evento.'
        }
      ],
      highlights: [
        {
          icon: 'bi-award-fill',
          title: 'Cortes Seleccionados',
          desc: 'Trabajamos con los mejores proveedores de carne del país.'
        },
        {
          icon: 'bi-shield-check',
          title: 'Higiene Garantizada',
          desc: 'Cumplimos con todos los estándares sanitarios y de seguridad alimentaria.'
        },
        {
          icon: 'bi-clock-fill',
          title: 'Puntualidad Asegurada',
          desc: 'Llegamos con anticipación para que todo esté listo a la hora indicada.'
        },
        {
          icon: 'bi-heart-fill',
          title: 'Pasión por el Asado',
          desc: 'Cada evento lo preparamos con la misma pasión y dedicación.'
        }
      ]
    }
  }
}
</script>
