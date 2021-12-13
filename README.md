# Refuerzo React Formar - 2021
## Heroes App
## Contenido
- SPA (Single Page Application)
- React-router-dom
- Context
- useContext

  _Nos enfocaremos en la funcionalidad de la aplicación como una SPA. Utilizaremos **Context** para implementar un sistema de autenticación._

## Recursos

- [Bootstrap]('https://getbootstrap.com/')
- [Animate CSS]('https://animate.style/')

## Documentación
- [react-router v.5]('https://v5.reactrouter.com/web/guides/quick-start')
- [react-router v.6]('https://reactrouter.com/docs/en/v6')
- [usenavigate-instead-of-usehistory]('https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory')
- [upgrade-all-switch-elements-to-routes]('https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-all-switch-elements-to-routes')
## Tecnologías
- React v.17
- react-router-dom v.6
- Bootstrap v.5
- Animate.css v.4
## Introducción
Aplicación que permite filtrar un array de héroes en diferentes páginas según la editorial. Mostrar el detalle y hacer una búsqueda utilizando el *query string*.
Para la navegación se implementa **react-router-dom** y sus hooks **useParams** para trabajar con parámetros **useNavigate** para usar el historial de navegación y **useSearchParams** para manejar el *query string*.
Se utiliza el *custom hook* **useForm** para manejar los datos provenientes del formulario.

## Dependencias y librerías
1. Instalar react-router-dom desde la terminal: `yarn add react-router-dom`
2. Agregar en el *index.html* el CDN de **Bootstrap**: 
`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">`
3.- Agregar en el *index.html* el CDN de **Animate.css**: 
`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>`
## Desarrollo
