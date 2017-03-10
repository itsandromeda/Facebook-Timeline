<h1>Facebook Timeline</h1>
<em>Post final project, Sprint II.</em>

<ol>
  <li>Crear una página de <em>login</em> para entrar a Facebook.</li>
  <li>Crear el timeline de Facebook donde podré postear diferentes elementos en el muro.</li>
</ol>

<p>Mi proyecto consta de tres ramas principales:</p>
<ol>
  <li><em>Log-In: Aquí encontrarás todo lo relacionado a la página principal, donde el usuario obtendrá acceso al timeline.</em></li>
  <li><em>Timeline: Una vez que el usuario ingrese el correo y password correctos podrá acceder al nuevo documento.</em></li>
  <li><em>Master: Última versión trabajada de mi proyecto.</em></li>
</ol>

<h2>Tareas - Log in</h2>
<h3>Validaciones</h3>
<ol>
  <li>El input de usuario debe ser requerido.</li>
  <li>El input password debe ser requerido.</li>
  <li>El contenido del password debe ser secreto.</li>
  <li>Los mensajes de error deben aparecer en la parte inferior de los inputs.</li>
</ol>
<h3>Comportamiento</h3>
<ol>
  <li>Cuando presione el botón Log In debe validarse el formulario. En caso todo esté bien el sistema debe redireccionar a nuestro timeline.</li>
  <li>En caso la validación falle, debe mostrarse los campos de error y no debe redireccionar al timeline.</li>
  <li>El sistema debe tener una lista de usuarios válidos y sólo se podrá ingresar con esos usuarios. Cualquier otro usuario debe ser inválido.</li>
</ol>
<h2>Tareas - Timeline</h2>
<h3>Validaciones</h3>
<ul>
  <li>Al hacer click al botón de publicar, debe validarse que exista texto en el input.</li>
</ul>
<h3>Comportamiento</h3>
<ol>
  <li>Cuando se haga click en publicar se debe crear un objeto que guarde el post.</li>
  <li>Debo poder publicar un post.</li>
  <li>Debo poder eliminar un post específico.</li>
  <li>Debo poder filtrar los posts solo para mis amigos y para todo público.</li>
  <li>Debo poder confirmar antes de eliminar un post.</li>
  <li>Al darle click en el botón editar debe cambiar el texto por un input con texto y cambiar el link por guardar.</li>
  <li>Al darle click en guardar debe cambiar de vuelta a texto pero con la información editada.</li>
</ol>

<h2>Hacker Edition</h2>
<ol>
  <li>Utilizar HTML 5 File API para crear un post de imagen.</li>
  <li>Utilizar local storage para guardar cada uno de los posts y que estos no se pierdan. Tomar en cuenta que usuarios distintos pueden tener posts distintos.</li>
  <li>En vez de crear los elementos utilizando Javascript usar la libreria handlebars que nos permite crear templates por JS.</li>
</ol>
<p>Mira cómo quedó haciendo click <strong><a href="https://itsandromeda.github.io/Facebook-Timeline/login.html" target="_blank">aquí.</a></strong></p>
