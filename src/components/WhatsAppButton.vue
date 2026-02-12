<template>
  <a 
    href="https://wa.me/56999319162?text=Hola%20Asao_Parrillao,%20vengo%20de%20su%20web%20y%20quiero%20cotizar%20un%20evento."
    class="whatsapp-float animate-pulse-glow"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat en WhatsApp"
  >
    <i class="bi bi-whatsapp"></i>
    <span class="whatsapp-tooltip">¡Cotiza aquí!</span>
  </a>
</template>

<script>
export default {
  name: 'WhatsAppButton'
}
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #25d366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
}

.whatsapp-float:hover {
  background-color: #128c7e;
  transform: scale(1.1) translateY(-5px);
  color: white;
}

.whatsapp-tooltip {
  position: absolute;
  right: 70px;
  background-color: #333;
  color: white;
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  white-space: nowrap;
  pointer-events: none;
}

.whatsapp-float:hover .whatsapp-tooltip {
  opacity: 1;
  visibility: visible;
}

/* Animación sutil para llamar la atención */
@keyframes pulse-green {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

.whatsapp-float {
  animation: pulse-green 2.5s infinite;
}
</style>
