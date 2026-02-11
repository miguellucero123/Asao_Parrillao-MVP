<template>
  <div class="service-card" :id="'service-card-' + id">
    <div class="service-card-img">
      <img :src="image" :alt="title" loading="lazy" />
      <span v-if="badge" class="service-card-badge">{{ badge }}</span>
    </div>
    <div class="service-card-body">
      <h3 class="service-card-title">{{ title }}</h3>
      <p class="service-card-desc">{{ description }}</p>
      <ul class="service-card-includes" v-if="includes.length">
        <li v-for="(item, index) in includes" :key="index">
          <i class="bi bi-check-circle-fill"></i>
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="service-card-footer">
      <router-link :to="ctaLink" class="btn-fire" :id="'service-cta-' + id">
        <i class="bi bi-arrow-right-circle-fill"></i>
        {{ ctaText }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    badge: { type: String, default: '' },
    includes: { type: Array, default: () => [] },
    ctaText: { type: String, default: 'Solicitar Cotización' },
    ctaLink: { type: String, default: '/contacto' }
  }
}
</script>
