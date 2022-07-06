# Proyecto para prueba técnica Mercado Libre (monorepo)

## Front-end

Fue desarrollado con React.js (con Typescript) con el fin de mantener el proyecto más organizado y mantenible a futuro.

### Árbol de componentes:

A continuación se presenta el árbol de componentes. Se añadió algunas pruebas unitarias con el fin de probar los componentes más importantes.

![Alt text](./diagram.png?raw=true "Title")

### Componente SEO:

Usando la librería `react-helmet` renderiza algunas meta etiquetas que son rastreadas por los robots ayudando en el posicionamiento de los sitios en los buscadores.

### Comandos importantes:

- Ejecución del proyecto en modo desarrollador (local):
    `npm run start`

- Generación de build de producción:
    `npm run build`

- Ejecución de las pruebas unitarias:
    `npm run test`
- Ejecución de las pruebas unitarias con reporte de coverage:
    `npm run test:coverage`

## Back-end

Fue desarrollado con Node.js usando buenas prácticas de diseño con el fin de separar la lógica de negocio con la implementación.

### Componentes:

#### Middlewares:

- CORS: Habilitación del dominio cruzado para la comunicación entre front-end y back-end.
- Validación de campos con Joi: validación para las funciones `GetProducts()` y `GetProduct()`. En este momento la API está habilitada para cualquier cliente, pero puede ser restringida para determinados sitios.

#### Controllers:

- Product controller: Obtener uno o varios productos.

#### Capa de datos:

- Meli Api: conexión a la api de Mercado Libre, con el fin de recuperar datos y traerlos al back-end.

### Diagramación de componentes:

![Alt text](./diagramAPI.png?raw=true "Title")

### Comandos importantes:

- Ejecución del proyecto en modo desarrollador (local): `npm run start-dev`
- Ejecución de las pruebas unitarias: `npm run test`
- Ejecución de las pruebas unitarias con reporte de coverage: `npm run test`
