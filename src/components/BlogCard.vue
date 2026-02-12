<template>
  <div class="blog-card h-100">
    <div class="blog-card-img">
      <img :src="image" :alt="title" loading="lazy" />
      <span class="blog-tag">{{ tag }}</span>
    </div>
    <div class="blog-card-body">
      <div class="d-flex align-items-center gap-2 mb-2 text-muted" style="font-size: 0.85rem;">
        <i class="bi bi-calendar-event"></i> {{ date }}
      </div>
      <h4 class="blog-title">{{ title }}</h4>
      <p class="blog-excerpt">{{ excerpt }}</p>
      <button class="read-more btn-link border-0 p-0 bg-transparent" @click="$emit('read-more')">
        Leer Tip <i class="bi bi-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: String, required: true },
    tag: { type: String, default: 'Tip' }
  }
}
</script>

<style scoped>
.blog-card {
  background: var(--ap-white);
  border: 1px solid var(--ap-gray);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition-base);
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.blog-card-img {
  height: 200px;
  position: relative;
  overflow: hidden;
}

.blog-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-slow);
}

.blog-card:hover .blog-card-img img {
  transform: scale(1.08);
}

.blog-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(13, 13, 20, 0.85);
  color: var(--ap-white);
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: var(--radius-pill);
  backdrop-filter: blur(4px);
}

.blog-card-body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.blog-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--ap-dark-800);
  line-height: 1.3;
}

.blog-excerpt {
  font-size: 0.95rem;
  color: var(--ap-dark-300);
  margin-bottom: 1.5rem;
  flex: 1;
}

.read-more {
  color: var(--ap-fire-600);
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.read-more:hover {
  gap: 0.75rem;
  color: var(--ap-fire-700);
}
</style>
