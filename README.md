# CRIFRADO-CESAR

# Cifrado César

Este proyecto implementa un **Cifrado César** utilizando JavaScript y dos ruedas interactivas en la interfaz para ilustrar el desplazamiento de letras.

## Descripción

- **Cifrado César**: Es un método de cifrado muy sencillo que consiste en desplazar las letras del alfabeto un número fijo de posiciones.
- **Ruedas Interactivas**: Visualmente, se muestran dos ruedas (una externa y otra interna) con las letras del alfabeto. Al girar la rueda interna, puedes ver cómo se desplazan las letras.

## Características

- Permite **cifrar** y **descifrar** texto ingresado por el usuario.
- Opción para elegir la **dirección** del desplazamiento (izquierda o derecha).
- Ajuste del **número de posiciones** a desplazar (shift).
- Manejo de mayúsculas y minúsculas sin perder el estilo original.
- Mantiene los caracteres que no están en el alfabeto (espacios, números, símbolos) sin modificar.
- Efecto “glitch” en la interfaz para mostrar el texto resultante.

## Cómo usarlo

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador.
3. En la interfaz, encontrarás:
   - Un campo para ingresar el **texto**.
   - Un selector numérico (`shift`) para escoger las posiciones de desplazamiento.
   - Un selector de **dirección** (izquierda o derecha).
   - Botones de **Encrypt** (cifrar) y **Decrypt** (descifrar).
4. Escribe tu texto, ajusta el `shift` y la dirección.
5. Haz clic en **Encrypt** para cifrar o en **Decrypt** para descifrar el texto.

## Tecnologías utilizadas

- **HTML/CSS** para la estructura y estilos.
- **JavaScript** para la lógica del Cifrado César y la manipulación del DOM.
- **Git** para el control de versiones.

## Estructura de archivos


- **index.html**: Contiene la estructura básica de la página (ruedas, campos, botones).
- **style.css**: Estilos para la interfaz y el efecto “glitch”.
- **script.js**: Código JavaScript que implementa la lógica del cifrado y actualiza la vista.

## Contribución

¡Toda contribución es bienvenida! Para contribuir:

1. Haz un fork de este repositorio.
2. Crea una rama con la característica o fix que desees implementar (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz un commit claro (`git commit -m "Agrega nueva funcionalidad"`).
4. Sube tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un **Pull Request** en este repositorio explicando tus cambios.



¡Disfruta aprendiendo y practicando con el Cifrado César!


