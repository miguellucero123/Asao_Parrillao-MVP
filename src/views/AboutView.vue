<template>
  <div>
    <!-- ======================== PAGE HEADER ======================== -->
    <section class="section-dark" style="padding: 8rem 0 4rem;" id="about-header">
      <div class="container text-center">
        <p class="text-uppercase fw-semibold mb-3 animate-fade-in-up" style="color: var(--ap-fire-400); letter-spacing: 3px; font-size: 0.85rem;">
          <i class="bi bi-people-fill"></i> Quiénes somos
        </p>
        <h1 class="section-title section-title-centered animate-fade-in-up animate-delay-1" style="color: var(--ap-white); font-size: 3rem;">
          Conoce a <span class="text-gradient">Asao_Parrillao</span>
        </h1>
        <p class="section-subtitle mx-auto mt-4 animate-fade-in-up animate-delay-2" style="color: var(--ap-dark-100);">
          Somos un equipo apasionado por el arte del asado.
        </p>
      </div>
    </section>

    <!-- ======================== OUR STORY ======================== -->
    <section class="section-padding" id="our-story">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&q=80"
              alt="Equipo Asao_Parrillao"
              class="rounded-4 shadow-lg w-100"
              style="object-fit: cover; height: 450px;"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <p class="text-uppercase fw-semibold mb-2" style="color: var(--ap-fire-500); letter-spacing: 2px; font-size: 0.8rem;">
              Nuestra Historia
            </p>
            <h2 class="section-title">
              Pasión por el <span class="text-gradient">asado perfecto</span>
            </h2>
            <p class="mt-4" style="font-size: 1.05rem; line-height: 1.9;">
              Somos un equipo apasionado por el arte del asado, dedicado a ofrecer una
              experiencia culinaria inolvidable y sin preocupaciones para nuestros clientes.
            </p>
            <p style="font-size: 1.05rem; line-height: 1.9;">
              Nacimos de la convicción de que un buen asado es más que comida: es un momento
              de encuentro, celebración y alegría. Por eso nos encargamos de cada detalle,
              desde la selección de los mejores cortes hasta la limpieza final, para que
              tú y tus invitados solo se preocupen de disfrutar.
            </p>
            <p style="font-size: 1.05rem; line-height: 1.9;">
              Con años de experiencia y cientos de eventos exitosos, hemos perfeccionado
              nuestro servicio para convertir cada asado en una experiencia única e irrepetible.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== VALUES ======================== -->
    <section class="section-padding" style="background: var(--ap-light-gray);" id="values-section">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title section-title-centered">
            Nuestros <span class="text-gradient">Valores</span>
          </h2>
          <p class="section-subtitle mx-auto mt-4">
            Los pilares que guían cada evento que realizamos.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3" v-for="(value, i) in values" :key="i">
            <div class="card-premium value-card h-100" :id="'value-card-' + i">
              <div class="icon-circle mx-auto">
                <i :class="'bi ' + value.icon"></i>
              </div>
              <h4 style="font-family: var(--font-body); font-weight: 700; font-size: 1.15rem;">
                {{ value.title }}
              </h4>
              <p style="font-size: 0.92rem; margin-top: 0.5rem;">{{ value.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== TEAM ======================== -->
    <section class="section-padding" id="team-section">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title section-title-centered">
            Nuestro <span class="text-gradient">Equipo</span>
          </h2>
          <p class="section-subtitle mx-auto mt-4">
            Las personas que hacen posible la magia del asado.
          </p>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-md-6 col-lg-4" v-for="(member, i) in team" :key="i">
            <div class="card-premium text-center h-100" :id="'team-card-' + i">
              <div
                class="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                style="width: 100px; height: 100px; background: var(--gradient-fire); color: white; font-size: 2.25rem; font-family: var(--font-heading); font-weight: 700;"
              >
                {{ member.initials }}
              </div>
              <h4 style="font-family: var(--font-body); font-weight: 700; font-size: 1.15rem; margin-bottom: 0.25rem;">
                {{ member.name }}
              </h4>
              <p style="color: var(--ap-fire-500); font-weight: 500; font-size: 0.9rem; margin-bottom: 1rem;">
                {{ member.role }}
              </p>
              <p style="font-size: 0.92rem;">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== NUMBERS ======================== -->
    <section class="section-padding section-dark" id="numbers-section">
      <div class="container">
        <div class="row g-4 text-center">
          <div class="col-6 col-lg-3" v-for="(num, i) in numbers" :key="i">
            <div class="stat-number">{{ num.value }}</div>
            <div class="stat-label" style="color: var(--ap-dark-100);">{{ num.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== CTA ======================== -->
    <section class="section-padding" id="about-cta">
      <div class="container">
        <div class="cta-banner">
          <h2 class="mb-3">¿Quieres ser parte de nuestra historia?</h2>
          <p class="mb-4">Déjanos crear el asado perfecto para tu próximo evento.</p>
          <router-link to="/contacto" class="btn-white" id="about-cta-btn">
            <i class="bi bi-chat-dots-fill"></i>
            ¡Contáctanos!
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      values: [
        {
          icon: 'bi-gem',
          title: 'Calidad',
          desc: 'Solo utilizamos los mejores ingredientes y materiales para garantizar una experiencia de primer nivel.'
        },
        {
          icon: 'bi-fire',
          title: 'Sabor',
          desc: 'Nuestros parrilleros conocen cada secreto para lograr el punto perfecto en cada corte.'
        },
        {
          icon: 'bi-briefcase-fill',
          title: 'Profesionalismo',
          desc: 'Puntualidad, organización y un servicio impecable en cada evento que realizamos.'
        },
        {
          icon: 'bi-shield-check',
          title: 'Confianza',
          desc: 'Transparencia en nuestros precios y compromiso con la satisfacción total del cliente.'
        }
      ],
      team: [
        {
          name: 'Miguel Lucero',
          initials: 'ML',
          role: 'Fundador & Chef Principal',
          bio: 'Apasionado del asado desde siempre. Con más de 10 años de experiencia en el arte de la parrilla, Miguel lidera cada evento con dedicación y maestría.'
        },
        {
          name: 'Equipo de Parrilleros',
          initials: 'EP',
          role: 'Chefs Parrilleros',
          bio: 'Un equipo seleccionado de expertos en el arte de la parrilla, cada uno con su especialidad y pasión por la cocina al fuego.'
        },
        {
          name: 'Staff de Servicio',
          initials: 'SS',
          role: 'Logística & Atención',
          bio: 'Nuestro equipo de logística y servicio se encarga de que todo funcione sin contratiempos, desde el montaje hasta la limpieza.'
        }
      ],
      numbers: [
        { value: '200+', label: 'Eventos Realizados' },
        { value: '5,000+', label: 'Invitados Felices' },
        { value: '100%', label: 'Satisfacción' },
        { value: '4', label: 'Años de Experiencia' }
      ]
    }
  }
}
</script>
