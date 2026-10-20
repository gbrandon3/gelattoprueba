<script lang="ts">
  import './contacto.css';
  import { assetUrl } from '../../../../assets';

  let sending = false;
  let statusMessage = '';
  let hasError = false;
  let startedAt = Date.now();

  async function enviarContacto(event: SubmitEvent) {
    if (sending) return;
    const form = event.currentTarget as HTMLFormElement;
    if (!form.reportValidity()) return;
    sending = true;
    statusMessage = 'Enviando tu mensaje…';
    hasError = false;
    const data = new FormData(form);
    try {
      const response = await fetch(import.meta.env.BASE_URL + 'api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: data.get('nombre'), email: data.get('email'),
          telefono: data.get('telefono') || '', mensaje: data.get('mensaje'),
          website: data.get('website') || '', startedAt,
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) throw new Error(result?.error || 'No pudimos enviar el mensaje. Inténtalo más tarde.');
      statusMessage = result.confirmationSent === false
        ? 'Recibimos tu mensaje. Te responderemos al correo que indicaste; no necesitas enviarlo otra vez.'
        : 'Gracias por escribirnos. Recibimos tu consulta. Revisa tu correo y la carpeta de spam para ver la confirmación.';
      form.reset();
      startedAt = Date.now();
    } catch (error) {
      hasError = true;
      statusMessage = error instanceof Error ? error.message : 'No pudimos enviar el mensaje. Revisa tu conexión.';
    } finally {
      sending = false;
    }
  }

</script>
<section id="contacto" class="seccion-contacto fondo-secundario">
  <div class="contenedor-seccion">
    <div class="contacto-cabecera">
      <span class="contacto-insignia">Hablemos</span>
      <h2 class="contacto-titulo">Ponte en Contacto</h2>
      <p class="contacto-bajada">
        Déjanos tu consulta o mensaje y nos pondremos en contacto contigo.
      </p>
    </div>

    <div class="cuadricula-contacto-2col">
      <!-- Columna de Información -->
      <div class="columna-informacion">
        <div class="lista-tarjetas-info">
          <a href="https://maps.google.com/?q=Monteria+Colombia" target="_blank" rel="noopener noreferrer" class="tarjeta-info-item item-lugar">
            <div class="icono-info">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="contenido-info">
              <span class="etiqueta-info">Lugar</span>
              <strong class="valor-info">Calle 27 # 3-45, Montería</strong>
            </div>
          </a>

          <a href="mailto:gelatto@gmail.com" class="tarjeta-info-item item-correo">
            <div class="icono-info">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div class="contenido-info">
              <span class="etiqueta-info">Correo</span>
              <strong class="valor-info">gelatto@gmail.com</strong>
            </div>
          </a>

          <a href="tel:+573001234567" class="tarjeta-info-item item-telefono">
            <div class="icono-info">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="contenido-info">
              <span class="etiqueta-info">Teléfono</span>
              <strong class="valor-info">+57 300 123 4567</strong>
            </div>
          </a>
        </div>
      </div>

      <!-- Columna del Formulario -->
      <div class="columna-formulario">
        <div class="tarjeta-formulario-contacto">
          <form class="formulario-contacto" on:submit|preventDefault={enviarContacto} aria-busy={sending}>
 <div class="contacto-antispam" aria-hidden="true"><label for="contacto-website">Deja este campo vacío</label><input id="contacto-website" type="text" name="website" tabindex="-1" autocomplete="off"></div>
            <div class="fila-formulario">
              <div class="campo-grupo">
                <label for="nombre">Nombre Completo</label>
                <input type="text" id="nombre" name="nombre" maxlength="80" autocomplete="name" placeholder="Ej. Alex Martínez" required="">
              </div>
              <div class="campo-grupo">
                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" maxlength="254" autocomplete="email" placeholder="alex@ejemplo.com" required="">
              </div>
            </div>

            <div class="campo-grupo">
              <label for="telefono">Teléfono / WhatsApp (opcional)</label>
              <input type="tel" id="telefono" name="telefono" maxlength="40" autocomplete="tel" placeholder="Número de contacto">
            </div>

            <div class="campo-grupo">
              <label for="mensaje">¿Cómo podemos ayudarte?</label>
              <textarea id="mensaje" name="mensaje" maxlength="4000" rows="4" placeholder="Escribe aquí tu mensaje..." required=""></textarea>
            </div>

            <button type="submit" class="boton-enviar-contacto" disabled={sending}>
              <span>{sending ? 'Enviando…' : 'Enviar Mensaje'}</span>
            </button>
          <div class="contacto-aviso" class:contacto-aviso-error={hasError} class:contacto-aviso-enviando={sending} class:contacto-aviso-visible={Boolean(statusMessage)} role="status" aria-live="polite" aria-atomic="true">
 {#if statusMessage}
 <span class="contacto-aviso-icono" aria-hidden="true">{sending ? '…' : hasError ? '!' : '✓'}</span>
 <div><strong>{sending ? 'Enviando tu mensaje' : hasError ? 'No se pudo enviar' : '¡Mensaje enviado!'}</strong><p>{statusMessage}</p></div>
 {/if}
 </div>
</form>
        </div>
      </div>
    </div>
  </div>
</section>
<style>
  .contacto-antispam { position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden; }
  .contacto-estado { margin: 16px 0 0; font-size: 14px; line-height: 1.6; color: inherit; }
  .contacto-estado:empty { display: none; }
  .contacto-error { font-weight: 600; }
  .boton-enviar-contacto:disabled { opacity: 0.65; cursor: wait; }


.contacto-aviso { display: none; }
.contacto-aviso-visible { display:flex; align-items:flex-start; gap:14px; padding:20px; border:1px solid #b8d8c8; border-radius:14px; background:#eff8f3; color:#184b37; text-align:left; }
.contacto-aviso-icono { display:flex; align-items:center; justify-content:center; width:32px; height:32px; flex:0 0 32px; border-radius:50%; background:#d5ecdf; font-size:20px; font-weight:700; }
.contacto-aviso strong { display:block; font-size:16px; line-height:1.5; }
.contacto-aviso p { margin:5px 0 0; font-size:14px; line-height:1.6; color:inherit; overflow-wrap:anywhere; }
.contacto-aviso-error { background:#fff3f1; color:#8b2922; border-color:#edc2bc; }
.contacto-aviso-error .contacto-aviso-icono { background:#f8dcd6; }
.contacto-aviso-enviando { background:#f4f5f7; color:#354052; border-color:#d6dce5; }
.contacto-aviso-enviando .contacto-aviso-icono { background:#e2e6ec; }
@media (max-width:480px) { .contacto-aviso-visible { padding:16px; gap:10px; } }
</style>
