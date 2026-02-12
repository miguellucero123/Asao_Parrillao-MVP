<template>
  <div>
    <!-- ======================== PAGE HEADER ======================== -->
    <section class="section-dark" style="padding: 8rem 0 4rem;" id="contact-header">
      <div class="container text-center">
        <p class="text-uppercase fw-semibold mb-3 animate-fade-in-up" style="color: var(--ap-fire-400); letter-spacing: 3px; font-size: 0.85rem;">
          <i class="bi bi-chat-dots-fill"></i> Hablemos
        </p>
        <h1 class="section-title section-title-centered animate-fade-in-up animate-delay-1" style="color: var(--ap-white); font-size: 3rem;">
          <span class="text-gradient">Contáctanos</span>
        </h1>
        <p class="section-subtitle mx-auto mt-4 animate-fade-in-up animate-delay-2" style="color: var(--ap-dark-100);">
          Cuéntanos sobre tu evento y recibe una cotización personalizada sin compromiso.
        </p>
      </div>
    </section>

    <!-- ======================== CONTACT INFO CARDS ======================== -->
    <section style="padding: 3rem 0 0;" id="contact-info-cards">
      <div class="container">
        <div class="row g-4" style="margin-top: -3rem;">
          <div class="col-md-4">
            <div class="contact-info-card h-100" id="contact-card-email">
              <i class="bi bi-envelope-fill d-block"></i>
              <h5>Correo Electrónico</h5>
              <a href="mailto:miguellucerogatica@gmail.com" class="d-block mb-1" style="color: var(--ap-dark-300);">miguellucerogatica@gmail.com</a>
              <a href="mailto:fco.gonzhoff@gmail.com" class="d-block" style="color: var(--ap-dark-300);">fco.gonzhoff@gmail.com</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-info-card h-100" id="contact-card-phone">
              <i class="bi bi-telephone-fill d-block"></i>
              <h5>Teléfono / WhatsApp</h5>
              <p><a href="tel:+56999319162">+56 9 9931 9162</a></p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-info-card h-100" id="contact-card-location">
              <i class="bi bi-geo-alt-fill d-block"></i>
              <h5>Ubicación</h5>
              <p>V Región, Valparaíso y alrededores</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== FORM SECTION ======================== -->
    <section class="section-padding" id="contact-form-section">
      <div class="container">
        <div class="row g-5 align-items-start">
          <!-- Form column -->
          <div class="col-lg-7">
            <div class="card-premium" style="padding: 2.5rem;">
              <h3 style="font-family: var(--font-body); font-weight: 700; margin-bottom: 0.5rem;">
                Solicita tu Cotización
              </h3>
              <p style="font-size: 0.95rem; margin-bottom: 2rem;">
                Completa el formulario y nos pondremos en contacto contigo a la brevedad.
              </p>
              <ContactForm />
            </div>
          </div>

          <!-- Info column -->
          <div class="col-lg-5">
            <!-- WhatsApp quick contact -->
            <div class="card-premium mb-4" style="background: var(--ap-dark-800); border-color: var(--ap-dark-600);">
              <div class="d-flex align-items-center gap-3 mb-3">
                <div style="width: 56px; height: 56px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center;">
                  <i class="bi bi-whatsapp" style="color: white; font-size: 1.5rem;"></i>
                </div>
                <div>
                  <h5 style="color: var(--ap-white); font-family: var(--font-body); font-weight: 700; margin: 0;">
                    ¿Prefieres WhatsApp?
                  </h5>
                  <p style="color: var(--ap-dark-200); font-size: 0.9rem; margin: 0;">
                    Respuesta más rápida
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/56999319162?text=Hola%2C%20me%20interesa%20cotizar%20un%20asado%20para%20mi%20evento."
                target="_blank"
                class="btn-fire w-100 justify-content-center"
                id="whatsapp-cta"
              >
                <i class="bi bi-whatsapp"></i>
                Escríbenos por WhatsApp
              </a>
            </div>

            <!-- Schedule info -->
            <div class="card-premium mb-4" id="schedule-info-card">
              <h5 style="font-family: var(--font-body); font-weight: 700; margin-bottom: 1rem;">
                <i class="bi bi-clock-fill" style="color: var(--ap-fire-500);"></i>
                Horario de Atención
              </h5>
              <div class="d-flex justify-content-between mb-2">
                <span style="color: var(--ap-dark-400);">Lunes - Viernes</span>
                <span style="font-weight: 600; color: var(--ap-dark-700);">9:00 - 19:00</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span style="color: var(--ap-dark-400);">Sábados</span>
                <span style="font-weight: 600; color: var(--ap-dark-700);">10:00 - 15:00</span>
              </div>
              <div class="d-flex justify-content-between">
                <span style="color: var(--ap-dark-400);">Domingos</span>
                <span style="font-weight: 600; color: var(--ap-dark-700);">Solo eventos</span>
              </div>
            </div>

            <!-- FAQ card -->
            <div class="card-premium" id="faq-card">
              <h5 style="font-family: var(--font-body); font-weight: 700; margin-bottom: 1rem;">
                <i class="bi bi-question-circle-fill" style="color: var(--ap-fire-500);"></i>
                Preguntas Frecuentes
              </h5>
              <div class="accordion" id="faqAccordion">
                <div class="accordion-item border-0 mb-2" v-for="(faq, i) in faqs" :key="i">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed rounded-3"
                      type="button"
                      :data-bs-toggle="'collapse'"
                      :data-bs-target="'#faq-' + i"
                      style="font-size: 0.92rem; font-weight: 600; background: var(--ap-light-gray); border: none; padding: 0.75rem 1rem;"
                    >
                      {{ faq.question }}
                    </button>
                  </h2>
                  <div :id="'faq-' + i" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body" style="font-size: 0.9rem; color: var(--ap-dark-400); padding: 0.75rem 1rem;">
                      {{ faq.answer }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'ContactView',
  components: { ContactForm },
  data() {
    return {
      faqs: [
        {
          question: '¿Con cuánta anticipación debo reservar?',
          answer: 'Recomendamos reservar con al menos 2 semanas de anticipación para garantizar disponibilidad. En temporada alta (verano), lo ideal son 3-4 semanas.'
        },
        {
          question: '¿Cuál es el mínimo de invitados?',
          answer: 'Trabajamos con un mínimo de 15 personas para nuestros servicios. Para grupos más pequeños, contáctanos y evaluamos alternativas.'
        },
        {
          question: '¿Incluyen opciones vegetarianas?',
          answer: '¡Sí! Podemos incluir opciones vegetarianas y veganas como verduras a la parrilla, ensaladas especiales y acompañamientos variados.'
        },
        {
          question: '¿En qué zonas operan?',
          answer: 'Operamos en toda la V Región de Valparaíso (Viña del Mar, Valparaíso, Concón, Quilpué, Villa Alemana). Para eventos fuera de esta zona, consúltanos y evaluamos la factibilidad.'
        }
      ]
    }
  }
}
</script>
