// JS
        // Obtener el contenedor donde se agregarán los botones
        const contenedor = document.getElementById('contenedor-botones');

        // Crear 100 botones, del 00 al 99
        for (let i = 0; i <= 99; i++) {
            // Crear el botón
            const boton = document.createElement('button');
            // Establecer el texto como el número con 2 dígitos
            boton.innerText = i < 10 ? `0${i}` : i; // Para mostrar el número con 2 dígitos
            boton.dataset.ocultar = false; // Atributo para alternar visibilidad
            
            // Añadir evento para alternar el número y cambiar el color
            boton.addEventListener('click', function() {
                if (this.dataset.ocultar === "false") {
                    this.classList.add('ocultar');  // Oculta el número y cambia el color
                    this.dataset.ocultar = "true";  // Actualiza el estado
                } else {
                    this.classList.remove('ocultar');  // Muestra el número y vuelve al color original
                    this.dataset.ocultar = "false";  // Actualiza el estado
                }
            });

            // Añadir el botón al contenedor
            contenedor.appendChild(boton);
        }