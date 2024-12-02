# API RICK AND MORTY - BY JUANJOS
### Character Card with Modal and Routing

Este proyecto fue realizado con **React v18.0**, **GraphQL,**  y **tailwindcss,** el cual muestra mediante unas tarjetas los personajes de rick y morty con su respectiva imagen, nombre y especie. Además, permite visualizar detalles adicionales de cada personaje en un modal que se muestra al hacer clic en el botón. 

> [!NOTE] 
>
> ## Descripción
> La aplicación presenta una interfaz donde los personajes están representados como tarjetas. Cada tarjeta incluye los siguientes elementos:
> - Imagen del personaje.
> - Nombre del personaje.
> - Especie del personaje.
> - Un botón para abrir un modal con más detalles sobre el personaje (por ejemplo, estado).
> - Un botón para cerrar el modal de los detalles del personaje.
> - Agregar los personajes tanto a favoritos como quitarlos de favoritos
>

--------------------------------

> [!TIP]
> ## Tecnologías utilizadas
> 
> - **React:** Framework de JavaScript para construir interfaces de usuario interactivas.
> - **React Router:** Para manejar la navegación entre páginas dentro de la aplicación.
> - **Tailwind CSS:** Framework de CSS para estilizar la interfaz de usuario de forma rápida y eficiente.
> - **React State (useState):** Para gestionar el estado local del modal.
> - **JSX:** Para escribir componentes en formato similar a HTML en React.
>

--------------------------------

> [!NOTE]  
> ## Características
> - **Visualización de personajes:** Cada personaje se muestra como una tarjeta con su imagen, nombre y especie.
> - **Modal interactivo:** Al hacer clic en "View Details", el modal muestra información adicional del personaje, como su estado.
> - **Enlace de redirección:** El enlace "View Profile" redirige a una página con el perfil completo del personaje.
>

--------------------------------

> [!IMPORTANT] 
> ### Requisitos previos
> Asegúrate de tener instalados los siguientes programas:
> - **Node.js** (v14 o superior)
> - **npm** (gestor de paquetes de Node.js)
> 
> ## Instalación y ejecución
> Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local.
>

```bash
# Clona el repositorio:
git clone <URL_DEL_REPOSITORIO>
cd <Ubicacion de tu proyecto>

# Instala las dependencias:
npm install

# Inicia el servidor de desarrollo
npm run dev
```

> [!IMPORTANT]  
> 1. Crea el archivo .env, (este contiene las variables necesarias para las conexiones API y GraphQL)
> 2. En windows abre una terminal y ejecuta el siguiente comando: `copy .env.example .env`
> 3. En linux abre una terminal y ejecuta el siguiente comando:  `copy .env.example .env`
> 4. Despues de haber echo eso, esto copiará el archivo `.env.example`, solo renombra ese archivo a `.env`.
> 5. Asegúrate de revisar y completar las variables necesarias dentro del archivo `.env`.