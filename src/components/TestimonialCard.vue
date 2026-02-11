<template>
  <div class="testimonial-card" :id="'testimonial-' + index">
    <div class="testimonial-stars">
      <i class="bi bi-star-fill" v-for="s in stars" :key="s"></i>
    </div>
    <div class="quote-icon">"</div>
    <p class="testimonial-text">{{ text }}</p>
    <div class="d-flex align-items-center gap-3">
      <div
        class="rounded-circle d-flex align-items-center justify-content-center"
        style="width: 48px; height: 48px; background: var(--ap-fire-100); color: var(--ap-fire-500); font-weight: 700; font-size: 1.1rem;"
      >
        {{ initials }}
      </div>
      <div>
        <div class="testimonial-author">{{ author }}</div>
        <div class="testimonial-role">{{ role }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    index: { type: Number, default: 0 },
    text: { type: String, required: true },
    author: { type: String, required: true },
    role: { type: String, default: '' },
    stars: { type: Number, default: 5 }
  },
  computed: {
    initials() {
      return this.author
        .split(' ')
        .map(w => w[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }
  }
}
</script>
