<script lang="ts">
  import './footer.css';
  import { assetUrl } from '../../../../assets';
  export let pageAttributes: Record<string, string> = {};
  export let pageLinks: string[] = [];
  function configureRoot(node: HTMLElement, config: { attributes: Record<string, string>; links: string[] }) {
    const update = (value: typeof config) => {
      Object.entries(value.attributes).forEach(([name, content]) => node.setAttribute(name, content));
      node.querySelectorAll('a').forEach((link, index) => {
        if (value.links[index] !== undefined) link.setAttribute('href', value.links[index]);
      });
    };
    update(config);
    return { update };
  }
</script>
<footer use:configureRoot={{ attributes: pageAttributes, links: pageLinks }} class="sitio-footer fondo-principal" id="pie-de-pagina">
  <div class="contenedor-footer footer-grid">
    <!-- Columna 1: Marca -->
    <div class="footer-col">
      <h3 class="footer-brand">Gelatto</h3>
      <p class="footer-desc">Emoción en cada bocado. Helados artesanales hechos con amor e ingredientes naturales.</p>
    </div>

    <!-- Columna 2: Enlaces -->
    <div class="footer-col">
      <h4 class="footer-title">Navegación</h4>
      <ul class="footer-links">
        <li><a href="#heroe" class="footer-link">Inicio</a></li>
        <li><a href="#sobre-nosotros" class="footer-link">Sobre Nosotros</a></li>
        <li><a href="#catalogo" class="footer-link">Catálogo</a></li>
        <li><a href="#contacto" class="footer-link">Contacto</a></li>
      </ul>
    </div>

    <!-- Columna 3: Contacto -->
    <div class="footer-col">
      <h4 class="footer-title">Contacto</h4>
      <ul class="footer-info">
        <li><strong>Email:</strong> gelatto@gmail.com</li>
        <li><strong>Teléfono:</strong> +57 300 123 4567</li>
        <li><strong>Ubicación:</strong> Calle 27 # 3-45, Montería</li>
      </ul>
    </div>

    <!-- Columna 4: Horarios y Redes -->
    <div class="footer-col">
      <h4 class="footer-title">Horarios y Redes</h4>
      <ul class="footer-info">
        <li><strong>Lun - Vie:</strong> 09:00 - 18:00</li>
        <li><strong>Sábados:</strong> 10:00 - 14:00</li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="footer-link">Instagram: @gelatto_artesanal</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="contenedor-footer">
      <p class="footer-copyright">© 2026 Gelatto. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>