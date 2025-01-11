## Contador Interactivo

Este proyecto es una simple aplicación web de contador interactivo que permite aumentar, disminuir y reiniciar el conteo. Además, muestra una ventana emergente cuando el contador supera el valor de 10, la cual se puede cerrar manualmente.

## Características

- Incremento y decremento del contador con botones.
- Prevención de decrementos por debajo de 0.
- Reseteo del contador a 0.
- Alerta emergente cuando el contador supera 10.
- Ventana emergente que se puede cerrar manualmente.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript

## Estructura del proyecto

```
project-folder/
├── src/
│   ├── css/
│   │   └── style.css
│   ├── javascript/
│   │   └── script.js
├── index.html
```

## Instrucciones para levantar la aplicación

1. **Clonar el repositorio:**

   ```bash
   git clone <url-del-repositorio>
   cd project-folder
   ```

2. **Abrir el archivo HTML en el navegador:**
   Navega al directorio del proyecto y abre el archivo `index.html` en cualquier navegador web compatible. Puedes hacerlo de varias maneras:

   - Doble clic en el archivo `index.html`.
   - Arrastrar el archivo `index.html` al navegador.

3. **Explorar las funcionalidades:**

   - Usa los botones `+` y `-` para incrementar o decrementar el contador.
   - Haz clic en `Reset` para reiniciar el contador.
   - Incrementa el contador más allá de 10 para ver la ventana emergente.
   - Haz clic en "Cerrar" en la ventana emergente para continuar usando el contador.

## Posibles mejoras

1. **Estilizar mejor la interfaz:**

   - Agregar un diseño más atractivo con animaciones suaves al presionar los botones.
   - Mejorar la ventana emergente con un estilo más moderno (por ejemplo, usando transiciones o librerías como SweetAlert).

2. **Compatibilidad y accesibilidad:**

   - Asegurarse de que la aplicación sea completamente accesible (por ejemplo, soportar navegación con teclado).
   - Agregar soporte para dispositivos móviles con diseño responsive.

3. **Mejoras en la funcionalidad:**

   - Implementar un límite máximo para el contador (por ejemplo, no permitir que suba más allá de 100).
   - Mostrar un mensaje diferente si el contador alcanza valores negativos (en caso de quitar la restricción de 0).


