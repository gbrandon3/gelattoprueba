<script lang="ts">
  import './heroe.css';
  import { assetUrl } from '../../../../assets';
  // Props o lógica del componente
</script>

<section class="heroe-seccion fondo-principal" id="heroe">
          <div class="heroe-contenedor">
            <div class="heroe-texto">
              <h1 class="heroe-titulo">
                Helado artesanal, una nueva forma de disfrutar.
              </h1>
              <p>
                La calidad de nuestros helados y todos nuestros sabores te
                sorprenderan,ven y endulza tu vida.
              </p>
              <a href="#catalogo" class="boton boton-secundario">
                Explorar catalogo
              </a>
            </div>
            <div class="heroe-imagen-contenedor">
              <img class="heroe-imagen" src={assetUrl("imagenes/images (1).png")} alt="heroe">
            </div>
          </div>
        </section>
