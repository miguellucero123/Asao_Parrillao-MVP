  <form 
    name="contact-v1" 
    method="POST" 
    data-netlify="true" 
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit" 
    id="contact-form" 
    novalidate
  >
    <!-- Netlify Hidden Inputs -->
    <input type="hidden" name="form-name" value="contact-v1" />
    <p class="hidden" style="display: none;">
      <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
    </p>

    <div class="row g-3">

      <!-- Nombre -->
      <div class="col-md-6">
        <label class="form-label form-label-ap" for="contact-name">Nombre Completo *</label>
        <input
          v-model="form.name"
          type="text"
          name="name"
          class="form-control form-control-ap"
          id="contact-name"
          placeholder="Tu nombre completo"
          required
        />
      </div>

      <!-- Email -->
      <div class="col-md-6">
        <label class="form-label form-label-ap" for="contact-email">Correo Electrónico *</label>
        <input
          v-model="form.email"
          type="email"
          name="email"
          class="form-control form-control-ap"
          id="contact-email"
          placeholder="correo@ejemplo.com"
          required
        />
      </div>

      <!-- Teléfono -->
      <div class="col-md-6">
        <label class="form-label form-label-ap" for="contact-phone">Teléfono *</label>
        <input
          v-model="form.phone"
          type="tel"
          name="phone"
          class="form-control form-control-ap"
          id="contact-phone"
          placeholder="+56 9 XXXX XXXX"
          required
        />
      </div>

      <!-- Tipo de Evento -->
      <div class="col-md-6">
        <label class="form-label form-label-ap" for="contact-event-type">Tipo de Evento</label>
        <select
          v-model="form.eventType"
          name="eventType"
          class="form-select form-control-ap"
          id="contact-event-type"
        >
          <option value="" disabled selected>Selecciona un tipo</option>
          <option value="cumpleanos">Cumpleaños</option>
          <option value="empresa">Evento Empresa</option>
          <option value="boda">Boda</option>
          <option value="reunion-familiar">Reunión Familiar</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <!-- Número de Invitados -->
      <div class="col-md-6">
        <label class="form-label form-label-ap" for="contact-guests">Número de Invitados (aprox.)</label>
        <input
          v-model="form.guests"
          type="number"
          name="guests"
          class="form-control form-control-ap"
          id="contact-guests"
          placeholder="Ej: 30"
          min="1"
        />
      </div>

      <!-- Fecha Deseada -->
      <div class="col-md-6">
        <label class="form-label form-label-ap" for="contact-date">Fecha Deseada (opcional)</label>
        <input
          v-model="form.date"
          type="date"
          name="date"
          class="form-control form-control-ap"
          id="contact-date"
        />
      </div>

      <!-- Mensaje -->
      <div class="col-12">
        <label class="form-label form-label-ap" for="contact-message">Mensaje / Detalles Adicionales</label>
        <textarea
          v-model="form.message"
          name="message"
          class="form-control form-control-ap"
          id="contact-message"
          rows="4"
          placeholder="Cuéntanos más sobre tu evento, preferencias de cortes, alergias, u otra información relevante..."
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div class="col-12">
        <button type="submit" class="btn-fire w-100 justify-content-center" id="contact-submit-btn" :disabled="isSubmitting">
          <i class="bi" :class="isSubmitting ? 'bi-hourglass-split' : 'bi-send-fill'"></i>
          {{ isSubmitting ? 'Enviando...' : 'Enviar Solicitud / Cotización' }}
        </button>
      </div>
    </div>

    <!-- Success Alert -->
    <div v-if="submitSuccess" class="alert-success-ap mt-4 animate-fade-in-up" id="contact-success-alert">
      <div class="d-flex align-items-center gap-2">
        <i class="bi bi-check-circle-fill" style="font-size: 1.3rem;"></i>
        <div>
          <strong>¡Solicitud enviada con éxito!</strong>
          <p class="mb-0 mt-1" style="font-size: 0.9rem;">Nos pondremos en contacto contigo a la brevedad. ¡Gracias por confiar en Asao_Parrillao!</p>
        </div>
      </div>
    </div>

    <!-- Error Alert -->
    <div v-if="submitError" class="alert alert-danger mt-4 rounded-3" id="contact-error-alert">
      <div class="d-flex align-items-center gap-2">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <span>{{ submitError }}</span>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        eventType: '',
        guests: '',
        date: '',
        message: ''
      },
      isSubmitting: false,
      submitSuccess: false,
      submitError: ''
    }
  },
  methods: {
    async handleSubmit(e) {
      // Simple validation
      if (!this.form.name || !this.form.email || !this.form.phone) {
        this.submitError = 'Por favor completa los campos obligatorios (Nombre, Email y Teléfono).'
        return
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.form.email)) {
        this.submitError = 'Por favor ingresa un correo electrónico válido.'
        return
      }

      this.isSubmitting = true
      this.submitError = ''
      this.submitSuccess = false

      try {
        // Prepare form data for Netlify submission
        const formData = new FormData(e.target)

        // Submit to static endpoint (handled by Netlify)
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })

        this.submitSuccess = true
        this.resetForm()
      } catch (error) {
        console.error('Submission error:', error)
        this.submitError = 'Hubo un error al enviar el formulario. Intenta nuevamente o contáctanos directamente.'
      } finally {
        this.isSubmitting = false
      }
    },

    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        eventType: '',
        guests: '',
        date: '',
        message: ''
      }
    }
  }
}
</script>
