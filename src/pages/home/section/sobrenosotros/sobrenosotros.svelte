<script lang="ts">
  import './sobrenosotros.css';
  import { assetUrl } from '../../../../assets';
  // Props o lógica del componente
</script>

<section class="sobre-nosotros-seccion" id="sobre-nosotros">
  <div class="sobre-nosotros-contenedor">
    <!-- Copo superior izquierdo -->
  <img src={assetUrl("imagenes/copo.svg")} alt="" aria-hidden="true" class="decoracion-copo copo-top-left">
  
  <!-- Copo inferior derecho -->
    <div class="col-der-sobre">
      <h2 class="titulo-sobre-nosotros">
        Encuentra la mejor experiencia y los mejores sabores
      </h2>

      <div class="texto-sobre">
        <p>
          En nuestras instalaciones y puntos de venta encontrarás una experiencia
          única con la más alta variedad de sabores artesanales recién preparados.
        </p>
        <p>
          Cada receta combina tradición italiana con ingredientes naturales, frutas
          frescas y un equipo apasionado por brindarte la mejor atención.
        </p>
        <p>
          Déjate sorprender por nuestras creaciones y descubre lo mágico que es
          disfrutar de un auténtico helado.
        </p>
      </div>

      <p class="descripcion">
        “Hoy es el mejor día para compartir y pasar un momento inolvidable en familia.”
      </p>
    </div>

    <div class="col-izq-sobre">
      <div class="contenedor-imagen">
        <img class="imagen-estudio" src={assetUrl("imagenes/sobre-nosotros.png")} alt="Vitrina de helados artesanales">
      </div>
    </div>

  </div>
        </section>
