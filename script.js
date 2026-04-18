// ===== STARS BACKGROUND =====
function createStars() {
  const container = document.getElementById('stars');
  const count = 80;

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.setProperty('--duration', (2 + Math.random() * 4) + 's');
    star.style.animationDelay = Math.random() * 5 + 's';
    star.style.width = (1 + Math.random() * 2) + 'px';
    star.style.height = star.style.width;
    container.appendChild(star);
  }
}

// ===== NORMATIVA DATA =====
const normaData = {
  'general_1': {
    number: '01',
    title: 'CREACION DEL PERSONAJE',
    content: `<h4>Lo primero que debemos hacer al llegar a la ciudad es crear nuestro personaje (pj) para ello 
debemos considerar lo siguiente:</h4>
<br>
    <ul>
      <li>La edad siempre debe ser +18.</li>
      <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplo
      </div>
      <ul>
      <li>Ejemplo 1: si eres hombre ooc e ic hablaras y actuaras como tal, debes escoger el sexo masculino, si 
eres mujer ooc e ic actuaras igual debe ser femenino.  </li>
      <li>Ejemplo 2: si eres hombre ooc, pero ic hablaras (con modulador) y actuaras como mujer, puedes 
escoger el sexo femenino, si eres mujer ooc e ic actuaras como el sexo contrario, también es posible. </li>
      </ul>
    </div>
    <br>
      <li>El sexo de tu pj debe coincidir con la personificación que desees darle. </li>
      <li>El nombre y apellido no debe ser de algún famoso/político, homófobos, xenófobos, 
racistas, troll (insultos, groseros y graciosos), no debe contener iconos/símbolos, ni 
redes sociales, en caso de hacerlo y ser descubierto se te obligará cambiarlo (posible 
ck).</li>
      <li>En caso te hayas equivocado con el nombre, puedes abrir un ticket en discord y 
solicitar apoyo, solo tendrás 3 días para hacerlo. Posterior a este plazo ya debes 
hacerlo de forma IC en el TSJ.</li>
    </ul>`
  },
  'general_2': {
    number: '02',
    title: 'TIPS DEL INICIO DEL PERSONAJE',
    content: `<ul>
      <li>Recordemos que somos nuevos en la ciudad, acabamos de llegar y aterrizamos en el 
aeropuerto, debes rolear tal cual, como una persona nueva que quiere conocer todo, 
busca trabajo, etc.</li>
      <li>En el aeropuerto te dan un pack de bienvenida que incluye comida, bebida, dinero, 
celular y un carro de bienvenida que encontraras con el caballero don pedro.</li>
      <li>En la ciudad hay varios trabajos de ingreso rápido como, electricista, Camionero, etc; 
todos estos los ves marcados en el mapa y no necesitas WL para trabajar en ellos. Ya 
si lo que deseas es un trabajo más formal, como un negocio o taller mecánico, debes 
gestionarlo directamente en el local y necesitas WL para que te contraten.</li>
      <li>Si deseas ingresar a una facción legal como ems y policía debes hacer tus 
postulaciones mediante discord en el apartado llamado ¨ postulaciones¨ o también 
puedes hacerlo ic yendo a cada institución y consultar el procedimiento a realizar, 
sobre el ingreso a la facción ilegal todo debes averiguarlo ic. Recuerda también tener 
WL para todo esto.</li>
      <li>El chat de voz es obligatorio, es recomendable configurar el pulsar para hablar, para 
evitar interferencias. No puedes utilizar como medio de comunicación fluido el /me y 
el /do.</li>
    </ul>`
  },
  'general_3': {
    number: '03',
    title: 'Importante',
    content: `
    
      <h4>Es importante que sepas cuales son las zonas seguras en la ciudad, en estas y una cuadra más 
allá, no puedes realizar ningún tipo de acto delictivo. Te las menciono:</h4>
<ul>  
      <ul>
        <li>Lugares de trabajos</li>
        <li>Negocios</li>
        <li>Escuela</li>
        <li>Las viviendas</li>
        <li>Hospitales</li>
        <li>Comisarías</li>
        <li>Garajes</li>
        <li>Aeropuerto </li>
        <li>Tiendas (Ropa)</li>
        <li>Puntos de encuentros públicos (ej.: paintball, eventos administrativos)</li>
      </ul>
      </ul>
      <h4>Sin embargo, si eres víctima de un rol agresivo fuera de estas zonas, no lograras evadir rol 
metiéndote a una de ellas, se debe velar por la continuación de dicho rol y este continuará 
estes donde estes.</h4>
<div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Notas
      </div>
      <ul>
      <li>Nota: si usted realiza negocios ilegales, venta de drogas, inicia rol agresivo o revisa carro ajeno usted está 
rompiendo la normativa de zonas seguras, la otra persona puede continuar rol agresivo y es totalmente válido 
sin derecho a tickets.</li> 
      </ul>
    </div>
    <br>
      <ul>
      <li>El rol termina cuando llega el ems y te reanima o cuando apareces en el hospital. 
Recuerda que no debes dar músculo ¨E¨ si el ems ya se encuentra en la zona.</li>
      <li>En caso de ser baneado por el anticheat tendrás un plazo máximo de 12h para apelar 
vía ticket, de no hacerlo a tiempo quedarás baneado de forma permanente.</li>
      <li>No aceptes dinero, armas, ni ningún tipo de regalo de un desconocido porque puede 
ser de mala procedencia (por uso de hacks) y se te podría dar ban permanente o CK. 
Si se te ¨perdona¨ se te hará wipe total y perderás todo incluyendo lo premium que 
tengas.</li>
    </ul>`
  },
  'general_4': {
    number: '04',
    title: 'Conceptos Básicos',
    content: `<h4><b>Estas son las cosas que necesitas saber para desarrollar un ¨buen¨ rol:</b></h4>
    <br>
    <ul>
      <li><b>In Character (IC):</b> Básicamente hace referencia a todo lo que sucede dentro el juego, es 
decir, la vida de los personajes y el entorno como tal. Recuerda que lo que pase ic, se queda 
ic.</li>
      <li><b>Out Of Character (OOC):</b> Es todo aquello que ocurre fuera del juego, es decir, en la vida real. 
Es importante diferenciar ambos conceptos ya que no podemos mezclar ambas ¨vidas¨, 
¨entornos¨ ni situaciones.</li>
<div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplo:
      </div>
      <ul><li> Se quedó bug el juego y necesitas reiniciar. Esta información no puedes darla IC ya que no es parte de 
la vida de tu personaje, para esto puedes indicar: ¨me duele la cabeza, voy a la farmacia a comprar una 
pastilla¨, me voy a lavar las manos, lo que sea, que tenga coherencia, te retiras y donde nadie te vea tiras quit. 
POR FAVOR NO TIRES QUIT DELANTE DE LA GENTE.</li></ul>
    </div>
    <br>
      <li><b>Rol de entorno (RDE):</b> Hace referencia a absolutamente todo lo que nos rodea. Aunque no 
veamos a alguien o a algo, siempre hay que asumir y actuar como si la ciudad estuviese llena 
y todo estuviese funcionando como en la vida real.  </li>
<div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplo:
      </div>
      <ul><li>  Hay policías en comisaría, hay médicos en el hospital, gente por la calle, seguridad en las casas de 
mafia, cámaras en sitios públicos, entre otras cosas y situaciones. Asimismo, si estas yendo por medio de la 
calle y te atropella un auto, no abras ticket, es totalmente tu culpa, camita por la acera y con precaución.</li></ul>
    </div>
    <br>
      <li><b>/me:</b> Este es un comando que se utiliza en primera persona para rolear alguna acción o 
animación que nuestro personaje no pueda realizar debido a que no existe dicha función.</li>
<div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplo:
      </div>
      <ul><li> /me se amarra los zapatos, /me se quita la chaqueta y la pone sobre la silla, /me se tapa los ojos.</li></ul>
    </div>
    <br>
    <li><b>/do:</b> Este es un comando que se utiliza en tercera persona o como un narrador de tu 
entorno. Con este podemos describir estados físicos y anímicos de nuestro personaje o 
situaciones que ocurren en el entorno que no podemos ver a simple vista debido a las 
limitaciones del juego. Recuerdan cuando en dragón Ball había una vocecita que narraba 
todo, ¨En ese momento, cell sintió el verdadero terror¨, así mismo, es.</li>
<div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplos:
      </div>
      <ul><li> /do Se escucharían disparos alrededor. (entorno)</li> 
<li> /do Se vería lleno de sangre. (estado físico)</li> 
<li> /do Tendría pulso estable. (estado anímico).</li></ul>
    </div>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Nota!!!
      </div>
      <ul><li><p style="color: cyan;"> Está totalmente prohibido mentir con un /do así nos coloque en una situación comprometedora, de igual 
forma recuerden que esto no puede utilizarse como una prueba ya que esto es un ¨pensamiento¨, por ende, la 
persona debe buscar las pruebas por otro lado, no mezclemos las cosas así nos quede la espinita jaja. Esto no 
debe usarse para vida cotidiana, sólo se aplica para pruebas de polígrafo o roles con la policía.</p></li> 
</ul>
    </div>
    <br>
    <li><b>Valorar vida:</b> Lo esencial y principio básico de rol, no podemos creernos súper héroes, ni 
más vivo que el otro, aunque no tengamos miedo, y a pesar de que tengamos posibilidades 
de salir ilesos de la situación. Es importante valorar la vida de nuestro personaje ante 
situaciones que arriesguen nuestra integridad.</li>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplos:
      </div>
      <ul><li>Cuando te apunten primero, solo levanta las manos y coopera con la parte atacante.</li> 
    </div>
    <br>
    <li><b>Meta Gaming (MG):</b> Existen 2 tipos de MG, el primero y más común es utilizar cualquier 
tipo de información obtenida OOC, para beneficio IC y el segundo es reconocer a las 
personas por la voz y/o vestimenta, a pesar de tener el rostro cubierto. Recordemos que 
todo MG está prohibido. </li>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplos:
      </div>
      <ul><li> Ver a alguien en stream (que obviamente esté en la ciudad) y luego entrar al juego para buscarlo 
exactamente donde lo viste.</li> 
<li>Contestar a un número desconocido y llamarla por su nombre solo porque identificaste su voz o 
reconocer a una persona con máscara.</li>
    </div>
    <br>
    <li><b>Power Gaming (PG):</b> Básicamente es hacer cosas que en la vida real (IRL) no podrías hacer 
por lógica, física, gravedad, etc.</li>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplos:
      </div>
      <ul><li>Hablar por radio o manejar mientras estás esposado.</li>
      <li>Chocar con el auto, caerte de un lugar alto o hacer vueltas de campana y seguir como si nada, sin 
rolear algún golpe, dolor, etc.</li>
      <li>Manejar con ruedas pinchadas. Todos los vehículos de 4 o más neumáticos deberán pararse al tener 
2 o más ruedas pinchadas.</li>
      <li>Hacer un pare a otro auto, invistiéndole a alta velocidad.</li>
      </ul>
    </div>  
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Nota!!!
      </div>
      <ul><li><p style="color: cyan;"> Con una sola rueda pinchada se debe manejar despacio, a menos de 50kmph.</p></li> 
</ul>
    </div>
    <br>
    <li><b>Death Match (DM):</b> Es matar a alguien sin tener rol previo, es decir, sin motivo alguno, y 
solo por mera ¨creatividad¨ u ocio.</li>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplos:
      </div>
      <ul><li>Matar a alguien porque sí.</li>
      <li>Matar a alguien por una discusión sin importancia.</li>
      <li>Matar a alguien por celos.</li>
      </ul>
    </div>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Nota!!!
      </div>
      <ul><li><p style="color: cyan;">Recuerden que los roles de sicariato son parte del DM, por ende, están prohibidos.</p></li> 
</ul>
    </div>
    <br>
    <li><b>Forzar Rol (FR):</b> Insistir u obligar a un jugador a participar en un rol o situación sin siquiera 
darle chance de tomar la decisión de involucrarse. Como también afirmar cosas que la otra 
persona no ha dicho sin permitirle defenderse. Esto también aplica para manipular 
resultados y decisiones para tu beneficio propio, sin respetar la libertad de los demás.</li>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplos:
      </div>
      <ul><li>Provocar a alguien diciendo mentiras para iniciar una pelea o enfrentamiento.</li>
      <li>Enviarle múltiples veces animaciones a alguien para realizar actos que no desea.</li>
      <li>Afirmar que una persona hizo o dijo algo para involucrarlo en algún problema.</li>
      </ul>
    </div>
    <br>
    <li><b>Evasión de rol:</b> Hace referencia a no continuar y/o culminar un rol que ya fue iniciado.</li>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplos:
      </div>
      <ul><li> Escaparte, desconectarte (quit), tirar e para evitar reanimación del ems y que los policías te procesen 
luego de un enfrentamiento, entrar en zona segura para tratar de salvarte de algún tiroteo o rol agresivo, 
haciéndote pasar por AFK.</li>
      </ul>
    </div>
    <br>
    <li><b>Invasión de Rol (IDR):</b> Básicamente es Interferir en un rol ajeno.</li>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplos:
      </div>
      <ul><li>Estás en tu carro por la ciudad, ves una persecución policial y chocas una patrulla policial para 
ayudar a el delictivo o chocas a él delictivo para ayudar a la policía.</li>
      <li>Hay un tiroteo iniciado cerca de tu zona y sacas tu arma para involucrarte. Lo correcto sería irte del 
sitio valorando vida y llamar a la policía.</li>
      </ul>
    </div>
    <br>
    <li><b>Vehicle DeathMatch (VDM):</b> Es utilizar el vehículo con toda la intención para dejar 
inconsciente a alguien, ya sea por diversión, troll o pelea sin sentido. </li>
<li><b>CarKill:</b> Ocurre cuando otro vehículo atropella y/o mata a otro jugador de forma accidental. </li>
<div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Nota!!!
      </div>
      <ul><li><p style="color: cyan;">Si te sucede esto, debes tener siempre tu clip.</p></li> 
</ul>
    </div>
    <br>
    <li><b>Cop Baiting:</b> Es cuando de forma intencional llamas la atención de los policías para provocar 
una interacción con ellos ya sea de forma agresiva o troll.</li>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplos:
      </div>
      <ul><li>Manejar de manera imprudente cerca de patrullas policiales y/o provocar a los oficiales con insultos 
o burlas.</li>
      </ul>
    </div>
    <br>
    <li><b>Player Kill (PK):</b> Es el estado de inconsciencia en el que se encuentra tu personaje cuando te 
¨matan¨, esto provoca una pérdida de memoria (solo del rol previo) y una vez te reanimen 
no podrás recordar absolutamente nada. La única forma en que te enteres de lo que te 
pasó, es que algún testigo te lo recuerde, esto debe ocurrir de manera orgánica y sin forzar 
la situación.</li>
<li><b>Revenge Kill (RK):</b> Es cuando alguien te ¨mata¨ y tú regresas al sitio donde lo hicieron o 
buscas a la persona para matarla por venganza. Recuerda que esto está prohibido, ya que 
una vez quedas inconsciente, estarías sufriendo un PK.</li>
<li><b>Player Kill Total (PKT):</b> Es una acción que se realiza a otra persona para lograr que pierda 
por completo la memoria sobre una parte de su vida. Este suele ser usado por las 
organizaciones delictivas o los policías para echar a un miembro y que olvide todo lo 
relacionado con su organización sin que éste pierda sus posesiones ni su identidad.</li>
<div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Nota!!!
      </div>
      <ul>
        <li><p style="color: cyan;">Debe iniciarse con la persona totalmente consciente.</p></li> 
<li><p style="color: cyan;">En el hospital encontrarás una pastilla para realizar este acto.</p></li> 
      </ul>
    </div>
    <br>
    <li><b>Character Kill (CK):</b> Es la muerte total de tu personaje, absolutamente todo lo vinculado a él 
desaparece.</li>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Nota!!!
      </div>
      <ul>
        <li><p style="color: cyan;">Todo ck debe ser solicitado abriendo un ticket en el canal de Discord de Inmigrtantes RP.</p></li> 
      </ul>
    </div>
    <br>
    <li><b>Bad Driving (BD):</b> Hace referencia a la conducción inadecuada de un vehículo.</li>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplos:
      </div>
      <ul>
        <li>Conducir por vía contraría o ir a exceso de velocidad.</li> 
      </ul>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Nota!!!
        </div>
        <ul>
          <li><p style="color: cyan;"> En caso dejes inconsciente a alguien por esto, serás sancionado como VDM.</p></li> 
        </ul>
      </div>
    </div>
    <br>
    <li><b>Bunny Jump (BJ):</b> Se considera cuando el personaje camina y salta repetidamente para 
aprovechar el aumento de velocidad.</li>
<li><b>Free Play(FP):</b> Juego Justo</li>
<div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ejemplos:
      </div>
      <ul>
        <li>Cuando te enfrentas a la policia y son muchos mas que tu, no puedes hacer nada.</li> 
      </ul>
    </div>
    </ul>
    `
  },
  'general_5': {
    number: '05',
    title: 'PROHIBIDO',
    content: `<ul>
      <li>La venta y compra de autos vip, objetos vip, casas vip, negocios y cualquier bien que se adquiera vía donaciones, se puede intercambiar por dinero IC u OOC. Esto será motivo de ban permanente o CK.</li>
      <li>Compra de dinero o cosas ic por dinero/cambios OOC. Esto será motivo de ban permanente o CK.</li>
      <li>Realizar negocios ilegales en zonas seguras.</li>
      <li>Campear en cualquier tipo de zonas.</li>
      <li>Quitarse los zapatos para beneficio del sigilo.</li>
      <li>Usar prendas ¨bug¨ e invisibles o estar desnudos por la ciudad.</li>
      <li>Tener/usar/vender cualquier tipo de cheats, si se te descubre se te banea de forma permanente.</li>
      <li>Hacer o enviar animaciones +18 sin el consentimiento de la otra persona.</li>
      <li>Robar autos de zonas seguras.</li>
      <li>¨Hablar¨ cuando estás inconsciente por el /me, /do.</li>
      <li>Meterse en rol ajeno.</li>
      <li>El uso de casco en ciudad y norte.</li>
      <li>No se puede matar a alguien dentro/desde el auto.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Nota
        </div>
        <ul><li>Revisa la normativa ilegal para ver las excepciones.</li></ul>
      </div>
      <br>
      <li>Usar o apoyarte de un vacío legal.</li>
      <li>Hacer llamadas/enviar entornos falsos a las facciones legales.</li>
      <li>Estar en servicio y no trabajar.</li>
      <li>Usar modulador de voz para ponerla más aguda o grave sin cambiar de sexo.</li>
      <li>No se puede negociar, comerciar o usar tus herramientas de trabajo para beneficio fuera del horario laboral. Esto podría implicar como sanción un CK.</li>
      <li>Usar máscaras en zonas seguras. Estas solo deben usarse en roles que lo justifiquen y respetando siempre el entorno.</li>
      <li>Realizar actos corruptos en las facciones legales. Únicamente puede hacerse con previa autorización de administración.</li>
      <li>Mencionar/spamear otro servidor con cualquier fin o por cualquier medio. Esto aplica ic y ooc. La sanción puede ser hasta ban permanente.</li>
      <li>Usar chat de voz externos como discord, para comunicarse dentro del rol. Toda la comunicación debe ser ic.</li>
      <li>Utilizar o aprovecharse de algún bug/emotes para cualquier beneficio. Esto debe ser notificado de inmediato.</li>
      <li>Abatir a alguien que esté colaborando en el rol (valorando vida).</li>
      <li>Esconder cuerpos, ya sea tirándolos al agua, subiéndolos a los techos, tirarlos debajo de un puente, entre otros.</li>
      <li>Roles de violaciones, agresiones sexuales o de corte de extremidades.</li>
      <li>Hacer mal uso de los canales de comunicación como por ejemplo el /ad.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Nota
        </div>
        <ul><li>La única forma de solicitar ayuda al staff de forma ic, es a través del /report.</li></ul>
      </div>
      <br>
      <li>Insultar y/o discriminar a alguien por su sexo, religión, clase social, forma de hablar, color de piel, nacionalidad o por puro gusto a cualquier persona de forma ic u occ por los canales del servidor.</li>
      <li>Hacerse pasar por EMS, policía, mecánico, taxista y/o vestirse como ellos. Asimismo, robar dichos vehículos incluyendo los de los negocios.</li>
      <li>Estar en servicio, uniformado, trabajando, pero utilizando auto personal, en caso de ser parados se considerarán como civiles.</li>
      <li>Quedarse AFK en la ciudad, de ser así no nos hacemos responsable por lo que le pase a tu pj.</li>
      <li>Cualquier tipo de rol de estafa IC. Esto podría terminar en wipe o ck administrativo.</li>
      <li>Desconectarte en medio de un rol (quit o time out). Esto conlleva una sanción ya que se considera evasión de rol.</li>
      <li>Aprovecharse de algún bug del servidor ya sea para beneficio propio o de terceros, en caso de descubrir uno, deben comunicar de inmediato a la administración (se te puede recompensar) de lo contrario, si se te es descubierto puedes pasar por un wipe/CK sin previo aviso.</li>
      <li>Realizar contenido explícito +18 (Ya sea con animaciones, o uso de ítems, etc) en lugares públicos, estos deben ser o en propiedad privada o si es en vía pública deberá ser donde no los vean (escondidos).</li>
      <li>Queda estrictamente prohibido el uso de mecánicas de sistema para obtener ventaja durante un rol activo (tiroteos, persecuciones o robos). Estos podrían ser:
        <ul>
          <li><strong>Garajes:</strong> Prohibido entrar a garajes para reparar, cambiar de vehículo o sacar armas del maletero durante el conflicto.</li>
          <li><strong>Propiedades/Casas:</strong> Prohibido usar el "TP" de entrada a interiores para esconderse, huir de una persecución o rearmarse/curarse.</li>
          <li><strong>Equipamiento:</strong> Debes participar con el equipo que lleves encima al iniciar el rol. No se permite el reabastecimiento mediante menús de casas o almacenes en medio del fuego cruzado.</li>
        </ul>
      </li>
    </ul>`
  },
  'general_6': {
    number: '06',
    title: 'INTERACCION CON LA POLICIA',
    content: `<ul>
      <li>Si deseas enviar un entorno a la policía debes usar /policia.</li>
      <li>Mostrar la cédula es obligatorio en caso te lo soliciten, en caso de no querer o rehusarse se tomará como evasión de rol.</li>
      <li>Tener pistoleras, mascaras y/o chaleco es motivo suficiente para que la policía pueda intervenir y realizar el debido procedimiento (catearte).</li>
      <li>Si llevas más de 5 armas encima o en el maletero ya se considera tráfico de armas y podrán investigarte/procesarte.</li>
      <li>Los entornos son usados para reportar algún acto ilegal, disturbios, acoso, robo, etc.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Ejemplo
        </div>
        <ul><li>/ Hay 4 autos al frente de mi casa con música alta y al parecer están armados, tengo miedo y no dejan dormir a mis perritos. ¡Vengan rápido!</li></ul>
      </div>
    </ul>`
  },
  'general_7': {
    number: '07',
    title: 'INTERACCION CON LOS EMS',
    content: `<ul>
      <li>Si deseas enviar un entorno al hospital debes usar /911.</li>
      <li>Si vas al hospital con un paciente inconsciente y hay EMS disponibles debes acercarte e interactuar con ellos. No puedes llevar al paciente al punto de reanimación (npc) ya que estarías evadiendo rol.</li>
      <li>Los EMS no pueden atender emergencias que estén dentro de zonas rojas o cayo perico, deben sacarlos del punto o llevarlos al hospital.</li>
      <li>El no rolear el /do si tendría pulso estable es una falla que se contaría como evasión de rol. Asimismo, el rolear por pura gracia el /do no tendría pulso, es aún más grave y de ser reportado se le haría un CK automáticamente.</li>
      <li>Los entornos son usados en caso necesites ayuda médica. No los uses para solicitar venditas.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Ejemplo
        </div>
        <ul><li>/ Ayuda, acabo de ver una persona vestida de blanco acaba de tener un accidente en una moto, se estrelló contra una pared y está gravemente herido. El sitio es seguro, vengan rápido.</li></ul>
      </div>
    </ul>`
  },
  'general_8': {
    number: '08',
    title: 'INTERACCION CON EL STAFF',
    content: `<ul>
      <li>El equipo de staff solo te podrá reanimar en caso de bug (que se pueda validar de inmediato) o de hacker. De igual forma si hay EMS disponibles y estas en un lugar de fácil acceso solicítalo.</li>
      <li>Estará regulado el reintegro de ítems por crasheos o fallas del servidor, deberás entregar las debidas evidencias en soporte para la entrega.</li>
      <li>La administración no se hará responsable si por culpa de un crash/ time out o quit dejas tu carro afuera y alguien más roba las cosas que tienes dentro. En lo que sí podemos ayudarte es borrando el auto si notificas de una vez vía ticket junto a la evidencia y ubicación del auto.</li>
      <li>Faltar el respeto a un miembro del staff será motivo de sanción administrativa, de forma inmediata y sin apelación alguna.</li>
    </ul>`
  },
  'general_9': {
    number: '09',
    title: 'PROCESO/CONDICIONES PARA REPORTAR',
    content: `<ul>
      <li>Debes esperar finalizar el rol. Continúa y una vez terminado reporta vía ticket de discord con el clip correspondiente.</li>
      <li>Tu reporte debe ser limpio, no te salgas de rol, ni hagas ningún tipo de anti-rol porque la sanción caería en ti también.</li>
      <li>No debe haber sobrepasado las 24 horas.</li>
      <li>Es obligatorio adjuntar el clip que muestre lo reportado, este debe tener audio, no deben estar hablando por dc, no debe ser grabado desde el celular, ni puede ser sacado de un stream ajeno, de lo contrario no se aceptará.</li>
      <li>En caso hayas tenido alguna pérdida de inventario por error o bug, también es necesario tener pruebas (clip).</li>
      <li>No escribas en mayúsculas.</li>
      <li>Si abres ticket y tardas más de 3 horas en responder el staff lo puede cerrar por falta de atención.</li>
      <li>Así como tú tienes 24 horas para reportar, la otra persona (de ser necesario) tiene 24 horas para defenderse y enviar su perspectiva o evidencia y nosotros también tendremos 24 horas más para darle solución, así que ten paciencia.</li>
      <li>Para clipear puedes usar programas como medal, obs, entre otros.</li>
      <li>Si no tienes ningún tipo de clip no te molestes en reportar, no se va a proceder con el reporte.</li>
    </ul>`
  },
  'general_10': {
    number: '10',
    title: 'CONDICIONES PARA PEDIR PERSPECTIVAS',
    content: `<ul>
      <li>Siempre debes tener clip de lo que vas a solicitar.</li>
      <li>El implicado debe estar visualmente en el clip.</li>
      <li>Puedes solicitarla en caso sea una kill extraña donde puedas sospechar de hacks o situaciones fuera de lo común.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Notas
        </div>
        <ul>
          <li>El staff puede intervenir y determinar si procede o no la perspectiva.</li>
          <li>No puedes estar hablando por discord.</li>
          <li>También recordemos que el GTA 5 es un juego lanzado hace casi 11 años, por lo tanto, existe mucho dsync (mala sincronización de posiciones entre los usuarios), puede que en tus ojos lo veas en un sitio, pero para otra persona está en otra posición.</li>
        </ul>
      </div>
    </ul>`
  },
  'general_11': {
    number: '11',
    title: 'CONDICIONES USO DE MODS',
    content: `<h4>Está permitido el uso de mods siempre y cuando no hagan este tipo de cosas:</h4>
      <br>
      <ul>
      <li>Elimina el agua.</li>
      <li>Elimina la vegetación (todo lo que tenga hojas, ramas, tronco y arena).</li>
      <li>Elimina props del juego.</li>
      <li>Te den ventaja alumbrándote donde hay más enemigos (kill efecto).</li>
      <li>Aumentan el daño de las cosas (ya sea golpes o disparos).</li>
      <li>Citizen con aimbot.</li>
      <li>Modifiquen la cabeza de los otros usuarios (hit box).</li>
      <li>Reduzcan el daño que puedan ocasionarte.</li>
      <li>Anti headshot.</li>
      <li>Saltar de altura y no recibir daño o caer de pie (no fall).</li>
      <li>Better movimiento.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Nota
        </div>
        <ul>
          <li><p style="color: cyan;">Cualquier incumplimiento de esto puede incurrir en días/ semanas de baneo o baneo permanente.</p></li>
        </ul>
      </div>
    </ul>`
  },
  'general_12': {
    number: '12',
    title: 'DONACIONES',
    content: `<ul>
      <li>Los montos de los objetos vip los consigues aquí en discord en la categoría de donaciones o ic.</li>
      <li>Las donaciones únicamente se gestionan vía ticket de discord. Ningún staff, ni dueños, tienen permitido recibir donaciones por otra vía.</li>
      <li>Una vez abras ticket se te enviarán todas las condiciones, favor leerlas bien y ser paciente. Al darte lo correspondiente a la donación realizada se te notificará por la misma vía.</li>
      <li>Nada que sea adquirido por donaciones puede ser vendido/transferido/intercambiado por nada ooc ni ic, si es bajo tu consentimiento si puede regalar no venderlo.</li>
      <li>En caso de hacer lo mencionado en el punto anterior, el bien será expropiado por administración y puesto en venta sin ningún tipo de devolución al dueño ni responsabilidad con el comprador.</li>
      <li>El vendedor será baneado y al comprador se le hará CK.</li>
      <li>Si el dueño de una casa/negocio se encuentra inactivo durante 30 días seguidos, la propiedad será expropiada sin ningún tipo de responsabilidad o devolución.</li>
      <li>En caso de hacerte CK, se te devolverá las cosas que allá comprado.</li>
      <li>En caso no hayas entrado a la ciudad en todo el 2025 tu personaje junto a sus cosas ha sido eliminadas sin derecho a retorno.</li>
    </ul>
    <br>
    <h4>La administración puede modificar esta normativa cuando sea necesario y sin previo aviso. El desconocimiento de la misma no te exime de su incumplimiento.</h4>`
  },
  'ems_1': {
    number: '01',
    title: 'JERARQUIA',
    content: `<h4>Una vez seas aceptado en la facción, ingresaras como paramédico y podrás escalar conforme a tu desempeño y actitud. Te dejo la lista de rangos:</h4>
    <ul>
      <li>Paramédico</li>
      <li>Enfermero</li>
      <li>Doctor</li>
      <li>Cirujano</li>
      <li>Director general</li>
      <li>Ministro de la salud</li>
    </ul>`
  },
  'ems_2': {
    number: '02',
    title: 'ASCENSOS',
    content: `<h4>Para subir de rango debes cumplir con los siguientes requisitos:</h4>
    <ul>
      <li>Ser buena persona, buen compañero, buen empleado y respetuoso con todo el mundo.</li>
      <li>Tener un buen desempeño en tu trabajo y una buena actividad/facturación semanal.</li>
      <li>Saber cómo delegar/asignar las alertas que llegan a la Tablet.</li>
      <li>Los ascensos se realizan quincenal/mensualmente o según tu desempeño.</li>
    </ul>`
  },
  'ems_3': {
    number: '03',
    title: 'UNIFORME',
    content: `<ul>
      <li>En el discord encontraras las fotografías de los uniformes, es importante que cumplas con el uniforme reglamentario, los zapatos y accesorios son a tu gusto, mientras no afecten a estética de la vestimenta.</li>
    </ul>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Nota
      </div>
      <ul>
        <li><p style="color: cyan;">Si cambia o altera alguna de la estética del uniforme puede llevar una sanción.</p></li>
      </ul>
    </div>`
  },
  'ems_4': {
    number: '04',
    title: 'INGRESO A SERVICIO',
    content: `<h4>Para entrar a laboral debes hacer los siguiente:</h4>
    <ul>
      <li>Abre el F5 y ponte en servicio.</li>
      <li>Colócate el uniforme que te corresponde. (previamente debes haberlo creado)</li>
      <li>Ingresa a la Tablet de EMS, entras a la opción de servicio y en la opción de radio. En este debes asignarte un icono de carrito en el F7, azul si eres chico y rosa si eres chica.</li>
      <li>Vas al Locker de medicina y buscas tus implementos de trabajo.</li>
      <li>Antes de ir a una alerta preguntar siempre si es zona segura.</li>
    </ul>
    <br>
    <h4>Una vez hagas todo eso, ya estas listo para trabajar, solo esperar que te sean asignadas las alertas por el líder de turno y listo.</h4>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Notas
      </div>
      <ul>
        <li>Al estar en servicio y te llegan alertas para ir a revivir a los jugadores y las ignoras puede llevar una sanción.</li>
        <li>Si te vas de turno y no te sales de servicio también puede llevar una sanción.</li>
      </ul>
    </div>`
  },
  'ems_5': {
    number: '05',
    title: 'CONSIDERACIONES EN SERVICIO',
    content: `<h4>Es importante que tomes en cuenta los siguientes para llevar un buen servicio:</h4>
    <ul>
      <li>Siempre debes estar en la radio.</li>
      <li>Debes estar con tu uniforme completo y debes corresponder al rango que tengas.</li>
      <li>No puedes tener armas ni nada ilícito en tus bolsillos ni en tu locker.</li>
      <li>Si necesitas ausentarte por menos de 2 minutos, puedes pedir permiso al jefe de turno, si es por más tiempo, salte de la radio y de servicio y cuando regrese vuelve a entrar a servicio.</li>
      <li>Si tu ambulancia se accidenta o se lo lleva la grúa, puedes pedir tu vehículo a través de la aplicación o llamar a un compañero que te recoja. E ir a buscar una nueva ambulancia en el garaje.</li>
      <li>En caso de que alguien te pida un favor de llevarlo a un lugar. Puede dejarlo cerca de un garaje.</li>
      <li>Si eres el único ems debes quedarte en el hospital y realizar las atenciones. asimismo, envía contantemente por las nubes de que hay un solo ems que lleven los pacientes al hospital. (SIEMPRE VA A VER UNA PERSONA EN EL HOSPITAL)</li>
    </ul>
    <div class="norma-tip">
      <div class="norma-tip-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Nota
      </div>
      <ul>
        <li>Está de más mencionar que no puedes realizar actos delictivos puedes llevar sanción.</li>
      </ul>
    </div>`
  },
  'ems_6': {
    number: '06',
    title: 'ATENCIONES',
    content: `<ul>
      <li>Siempre debes tratar con respeto y amabilidad a los pacientes, recuerda que eres un profesional, pregúntale su estado de salud, como se siente, etc., trata de ejecutar un buen rol sin importar el desempeño del recto.</li>
      <li>Debes atender siempre en la sala de emergencia o alguna de la sala del hospital, está prohibido atender fuera o en la puerta.</li>
      <li>Una vez te asignen una alerta, deberás enviar por las nubes con el comando /anuncio que estas asistiendo a su llamado. <strong>Ejemplo: camino a la ubicación en cp. X</strong></li>
      <li>En caso de que estes atendiendo a un paciente y el/los acompañantes se están comportando de forma inapropiada puedes acceder a retirarte del lugar sin realizar la atención solicitada.</li>
      <li>Si el paciente evita el rol no respondiendo al pulso con el /do. Procedes a rolearle /do no tendría pulso.</li>
      <li>Para ejecutar las atenciones comunes tendrás en el discord algunos ejemplos con el /me /do que te ayudaran. En caso necesites realizar atenciones más detallada o alguna operación, es importante sepas utilizar el /me /do para una mejor experiencia de todos. No hace falta que se sepas sobre medicina, solo improvisa. <strong>Ejemplo: /me hace un rcp de emergencia y luego /me prepara la factura del rcp de emergencia.</strong></li>
    </ul>`
  },
  'ems_7': {
    number: '07',
    title: 'CONSIDERACIONES FUERA DE SERVICIO',
    content: `<ul>
      <li>Puedes hacer actos delictivos como civil, pero si te agarra la policía en el acto, estos notificaran al hospital y será motivo de PKTE administrativo.</li>
      <li>No puedes usar ninguna herramienta, vehículo y/o beneficio del hospital.</li>
      <li>Por ningún motivo debes tener el trabajo sin estar presentando servicio, recuerda que esto afecta al compañero que estén trabajando y también puede conllevar una sanción ic y ooc.</li>
      <li>No puedes tener ningún implemento (desfibrilador, medikit) en tus bolsillos. Debes dejarlo en el locker del hospital antes de salir de servicio.</li>
      <li>Si necesitas ausentarte por un periodo de 3 a 5 días deberías notificarlo vía discord en el canal de ausencia-permisos. En caso de que te ausenté por más tiempo sin notificar corres el riesgo de perder el trabajo.</li>
    </ul>`
  },
  'ems_8': {
    number: '08',
    title: 'IMPORTANTE',
    content: `<ul>
      <li>Solo se podrán vender 20 vendas por persona en el dia.</li>
      <li>Está prohibido vender, traficar, negociar con cualquier implemento de trabajo.</li>
      <li>Está prohibido realizar modificaciones estéticas a los vehículos del hospital.</li>
      <li>Debes trabajar 10 horas a la semana, para no ser degradado de rango o despedido.</li>
      <li>Si tienes un mal comportamiento con los pacientes, con tus compañeros y/o con los jefes podrás ser removido de tu cargo laboral.</li>
      <li>En caso hayas sido ems anteriormente y deseas retomarlo, podrás ingresar a la facción como cualquier nuevo ingresado como paramédico.</li>
      <li>Nuevamente te recuerdo que cuando dejes de trabajar en el hospital debes salir inmediatamente de servicio, esto es super importante.</li>
      <li>Faltado 5 minutos para las tormentas del dia, deberás regresar al hospital y todas las atenciones se deberán realizar adentro del hospital.</li>
      <li>Una vez termines tus labores, puedes ir a cambiarte al vestidor y ponerte un vestuario que tengas creado, por nada del mundo puedes quedarte en servicio creado o buscando un outfit nuevo.</li>
      <li>No puedes pertenecer a una facción ilegal y legal al mismo tiempo esto lleva un PKTE automáticamente.</li>
      <li>En caso de que ustedes estén ocupados los pacientes pueden hacer uso del “cubano”. También es importante que estén pendiente de los ingresos para evitar que se les pase un paciente y si aun así los ignoran y se van directo al cubano, esto puede tomarse como evasión de rol y puede reportarlo con su debido clip.</li>
      <li>En caso disparen a su alrededor o aún peor, les disparen a ustedes, pueden reportar inmediato con su clip para sancionar como corresponden.</li>
      <li>No pueden robarte ni secuestrarte, pero en caso lo hagas debes continúa con el rol, tomar clip y reportar al terminar. Trata de tomártelo más chill.</li>
      <li>Los ems no podrán utilizar taser esto puede ser sancionable. En caso de que tengas algún problema con un ciudadano favor de llamar a la policía para que no te sancionen.</li>
      <li>Al momento de ir a una atención entre dos o más grupos, debes atender con prioridad al grupo que este de pie, si no logras identificarlo pregunta antes de proceder.</li>
      <li>Está prohibido ingresar a zonas peligrosas incluyendo cayo perico, a los barrios podrán ingresar si los delictivo le piden la ayuda o los policías.</li>
      <li>En el hospital está prohibido utilizar mascara. En caso de que la persona no se la quite proceda a llamar a la policía para que se haga cargo de problema o reporte para que sea sancionado.</li>
      <li>No puedes cobrar más del monto establecido en las tarifas del hospital, pero si el paciente desea darle una propina puede recibirla a parte de lo que te ganas en el trabajo.</li>
      <li>Obligatoriamente antes de atender una alerta debe preguntar si es zona segura. En caso de que no te respondan valla a la próxima alerta.</li>
    </ul>
    <br>
    <ul>
      <li>🌟 Recuerden que el incumplimiento de todo lo mencionado puede incurrir en una sanción tanto ic como occ (administrativa).</li>
      <li>🌟 Muchas gracias por tu apoyo.</li>
    </ul>
    <br>
    <h4>La administración puede modificar esta normativa cuando sea necesario y sin previo aviso. El desconocimiento de la misma no te exime de su incumplimiento.</h4>`
  },
  'negocios_1': {
    number: '01',
    title: 'INGRESO Y SERVICIO',
    content: `<ul>
      <li>Al entrar en servicio será obligatorio entrar al radio correspondiente, anunciar ic utilizando el siguiente comando: <strong>/anuncio + mensaje de publicación de la empresa</strong>.</li>
      <li>Abrir la respectiva bitácora de ingreso con el formato correspondiente y editar la misma al salir. Para que la bitácora sea válida deberás estar mínimo 2 horas en servicio.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Ejemplo de Bitácora
        </div>
        <ul>
          <li><strong>Empleado:</strong> nena</li>
          <li><strong>Ingreso:</strong> 4:00pm</li>
          <li><strong>Salida:</strong> 6:00pm</li>
          <li><strong>Tiempo:</strong> 2h</li>
          <li><strong>País:</strong> Inmigrante RP</li>
        </ul>
      </div>
      <br>
      <li>Prohibido estar AFK en el negocio o radio sin comunicárselo a su superior de turno.</li>
      <li>En caso de que algún empleado desee rolear de civil deberá salirse de servicio y asimismo quitarse el uniforme de la facción.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Nota
        </div>
        <ul>
          <li>De no respetar la norma de quitarse el uniforme y salir de servicio, se le dará su respectiva sanción.</li>
        </ul>
      </div>
      <br>
      <li>Está totalmente prohibido atender llamadas por teléfono personal, solo se puede atender la llamada si la persona llama a la empresa.</li>
    </ul>`
  },
  'negocios_2': {
    number: '02',
    title: 'PRECIOS Y COBROS',
    content: `<ul>
      <li>Los precios pueden ser actualizados en cualquier momento.</li>
      <li>Está prohibido no respetar los costos que se establezcan en la empresa.</li>
      <li>De acuerdo con el desempeño se asignan bonos semanales que acreditará el dueño del negocio.</li>
      <li>Está totalmente prohibido cobrar con transferencia que no sea hecha con el punto de cobro.</li>
    </ul>
    <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Nota
        </div>
        <ul>
          <li><p style="color: cyan;">Empleado que sea descubierto cobrando por transferencia será despedido de la empresa.</p></li>
        </ul>
    </div>`
  },
  'negocios_3': {
    number: '03',
    title: 'VEHICULOS E IMPLEMENTOS',
    content: `<ul>
      <li>Está prohibido entregar comida en un vehículo personal que no sea el vehículo de la facción.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Nota
        </div>
        <ul>
          <li>Empleado que no tenga uniforme y sea descubierto entregando comida será sancionado.</li>
        </ul>
      </div>
      <br>
      <li>Está prohibido el uso de vehículos de la facción para transportar civiles, a menos que sea empleado de la empresa y tenga el uniforme.</li>
      <li>NO DAR GRATIS NINGUN IMPLEMENTO DE LA EMPRESA.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Sanción
        </div>
        <ul>
          <li><p style="color: cyan;">En caso de regalar implementos, el empleado será inmediatamente despedido.</p></li>
        </ul>
      </div>
    </ul>`
  },
  'negocios_4': {
    number: '04',
    title: 'COMPORTAMIENTO CIVIL',
    content: `<ul>
      <li>Cualquier empleado que no ponga orden en el negocio será sancionado.</li>
      <li>Jamás debes ser un empleado CORRUPTO.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Advertencia
        </div>
        <ul>
          <li><p style="color: cyan;">Empleado que sea descubierto o reportado siendo corrupto recibirá AUTOMÁTICAMENTE UN PKTE.</p></li>
        </ul>
      </div>
      <br>
      <li>Está totalmente prohibida la falta de respeto entre un empleado y un civil o entre compañeros.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Sustentos de Casos
        </div>
        <ul>
          <li>En caso de que sea reportado por faltar el respeto, perderá su trabajo y recibirá automáticamente un PKTE.</li>
          <li>Todo depende del caso: si el que faltó el respeto primero fue el ciudadano, se le dará su sanción a él. Recuerda ante todo el respeto para no ser sancionado también.</li>
          <li>Si la falta de respeto es de ambas partes, no hay culpable exclusivo y ambas personas serán sancionadas.</li>
          <li><span style="color: cyan;">Siempre debes tener clip del evento. Si el que reporta no tiene clip, no se atenderá (OJO).</span></li>
        </ul>
      </div>
      <br>
      <li>El empleado tiene derecho a denegar el servicio si este es agredido verbal o físicamente. <strong>Nota: Debe tener pruebas con clip.</strong></li>
    </ul>`
  },
  'negocios_5': {
    number: '05',
    title: 'ACTOS ILICITOS Y ARMAS',
    content: `<ul>
      <li>Está totalmente prohibido portar armamento estando en servicio y dentro de la empresa.</li>
      <li>No se podrá realizar ningún tipo de rol agresivo estando en servicio.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Nota
        </div>
        <ul>
          <li>Ciudadano que sea descubierto con rol agresivo estando en servicio será sancionado.</li>
        </ul>
      </div>
      <br>
      <li>En caso de que un EMPLEADO esté en una organización ilegal y algún policía lo agarra en el acto, este será despedido, recibirá automáticamente un PKTE y perderá el trabajo.</li>
      <li>En caso de que el DUEÑO de la empresa esté en una organización ilegal y un policía lo agarra, automáticamente se pondrá en investigación el negocio y podría perder su empresa.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Penalización de Empresa
        </div>
        <ul>
          <li><p style="color: cyan;">Negocio que se ponga bajo investigación y la policía encuentre pruebas, se le quitará al dueño y se pondrá en venta nuevamente (OJO).</p></li>
        </ul>
      </div>
    </ul>`
  },
  'negocios_6': {
    number: '06',
    title: 'GESTION DE DUEÑOS',
    content: `<ul>
      <li>El total de empleados máximos por empresa es de 12.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Límites y Empleados Inactivos
        </div>
        <ul>
          <li>Empresa que tenga más de la cantidad asignada se le dará un strike (al 3er strike se le quitará la empresa).</li>
          <li>Empleado que no trabaje durante 3 días será despedido, a menos que haya notificado a su jefe su indisponibilidad por motivos personales.</li>
        </ul>
      </div>
      <br>
      <li><strong>Inactividad del Dueño:</strong> Si el dueño no tiene su negocio activo en la ciudad durante un mes, se le quitará y se pondrá nuevamente en venta.</li>
      <li>Si el dueño tuvo o tiene un problema personal, debe dejar a alguien de confianza llevando su negocio (su mano derecha) para no perder la empresa.</li>
      <li>Si usted cree que no puede hacerse responsable, ponga a alguien a trabajarlo o entregue el negocio para que otra persona pueda darle uso.</li>
      <li>Dueño que no pague los meses de renta de su empresa, le será expropiada.</li>
      <li>Cada dueño o encargado de una empresa tiene que realizar <strong>5 eventos cada mes</strong> para que no le den un strike. (Al 3er strike se le quitará la empresa).</li>
    </ul>`
  },
  'negocios_7': {
    number: '07',
    title: 'IMPORTANTE',
    content: `<ul>
      <li>🌟 EL STAFF DE INMIGRANTE RP V2 SE RESERVARÁ EL DERECHO DE EDITAR ESTAS NORMAS CUANDO LO VEA NECESARIO SIN PREVIO AVISO. EL DESCONOCIMIENTO DE ESTAS NO TE EXIME DE SU CUMPLIMIENTO.</li>
    </ul>`
  },
  'mecanicos_1': {
    number: '01',
    title: 'INGRESO Y SERVICIO',
    content: `<ul>
      <li>Al entrar en servicio será obligatorio entrar al radio correspondiente, anunciar ic utilizando el siguiente comando: <strong>/anuncio + mensaje de publicación del taller</strong>.</li>
      <li>Abrir la respectiva bitácora de ingreso con el formato correspondiente y editar la misma al salir. Para que la bitácora sea válida deberás estar mínimo 2 horas en servicio.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Ejemplo de Bitácora
        </div>
        <ul>
          <li><strong>Mecánico:</strong> nena</li>
          <li><strong>Ingreso:</strong> 4:00pm</li>
          <li><strong>Salida:</strong> 6:00pm</li>
          <li><strong>Tiempo:</strong> 2h</li>
          <li><strong>País:</strong> Inmigrante RP</li>
        </ul>
      </div>
      <br>
      <li>Prohibido estar AFK en el taller o radio sin comunicárselo a su superior de turno.</li>
      <li>En caso de que algún mecánico desee rolear de civil deberá salirse de servicio y asimismo quitarse el uniforme de la facción.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Nota
        </div>
        <ul>
          <li>De no respetar la norma de quitarse el uniforme y salir de servicio, se le dará su respectiva sanción.</li>
        </ul>
      </div>
      <br>
      <li>Está totalmente prohibido atender alertas que sean llamadas por teléfono personal, solo se puede atender las alertas si la persona llama al negocio.</li>
    </ul>`
  },
  'mecanicos_2': {
    number: '02',
    title: 'PRECIOS Y COBROS',
    content: `<ul>
      <li>Los precios pueden ser actualizados en cualquier momento.</li>
      <li>Está prohibido no respetar los costos de reparación y/o Tuning.</li>
      <li>De acuerdo con el desempeño se asignan bonos semanales que acreditará el dueño del taller.</li>
      <li>Está totalmente prohibida cobrar el servicio con transferencia que no sea hecha con el punto de cobro o hecha con la Tablet del trabajo.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Sanción de Transferencias
        </div>
        <ul>
          <li><p style="color: cyan;">Empleado que sea descubierto cobrando por transferencia será despedido de la empresa.</p></li>
        </ul>
      </div>
      <br>
      <li>Para no afectar la economía de la ciudad solo <strong>mantenimiento y reparación será gratis para los empleados</strong>; si desea ponerle motor y entre otras cosas a su vehículo se le cobrará el 50% de su factura para así tener un balance.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Sanción por Abuso de Beneficios
        </div>
        <ul>
          <li>Empleado que no siga las normas del 50% será despedido del trabajo y automáticamente un PKTE.</li>
        </ul>
      </div>
      <br>
      <li>A los vehículos de facciones el servicio se les dará gratis y con prioridad ante un civil (policía, EMS, taxis).</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Nota
        </div>
        <ul>
          <li>Solo será gratuito a los vehículos de organización, el vehículo personal se le cobrará estando fuera de su servicio.</li>
        </ul>
      </div>
    </ul>`
  },
  'mecanicos_3': {
    number: '03',
    title: 'VEHICULOS E IMPLEMENTOS',
    content: `<ul>
      <li>Está prohibido atender alertas en un vehículo personal, fuera de servicio o sin uniforme.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Nota
        </div>
        <ul>
          <li>Mecánico que no tenga uniforme y sea descubierto atendiendo alerta con vehículo personal será sancionado.</li>
        </ul>
      </div>
      <br>
      <li>Está totalmente prohibido hacer mantenimiento, motor entre otros fuera del taller. Ciudadano que se vea haciendo esos trabajos a un carro fuera del taller será sancionado.</li>
      <li>Todo vehículo que esté volteado <strong>no podrá ser reparado</strong>. Al menos que la grúa se lo lleve y lo pueda volver a sacar del garaje.</li>
      <li>Está prohibido el uso de vehículos de la facción para transportar civiles, a menos que sea el dueño del carro que será llevado al mecánico para ser arreglado.</li>
      <li>NO DAR GRATIS NINGUNA MEJORA O IMPLEMENTO DEL TALLER.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Sanción
        </div>
        <ul>
          <li><p style="color: cyan;">En caso de regalar mejoras, el mecánico será inmediatamente despedido.</p></li>
        </ul>
      </div>
    </ul>`
  },
  'mecanicos_4': {
    number: '04',
    title: 'COMPORTAMIENTO CIVIL',
    content: `<ul>
      <li>Cualquier mecánico que no ponga orden en el taller será sancionado.</li>
      <li>Jamás debes ser un mecánico CORRUPTO.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Advertencia
        </div>
        <ul>
          <li><p style="color: cyan;">Mecánico que sea descubierto o reportado siendo corrupto recibirá AUTOMÁTICAMENTE UN PKTE.</p></li>
        </ul>
      </div>
      <br>
      <li>Está totalmente prohibida la falta de respeto entre un mecánico y un civil o entre compañeros.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Sustentos de Casos
        </div>
        <ul>
          <li>En caso de que sea reportado por faltar el respeto, perderá su trabajo y recibirá automáticamente un PKTE.</li>
          <li>Todo depende del caso: si el que faltó el respeto primero fue el ciudadano, se le dará su sanción a él. Recuerda ante todo el respeto para no ser sancionado también.</li>
          <li>Si la falta de respeto es de ambas partes, no hay culpable exclusivo y ambas personas serán sancionadas.</li>
          <li><span style="color: cyan;">Siempre debes tener clip del evento. Si el que reporta no tiene clip, no se atenderá (OJO).</span></li>
        </ul>
      </div>
      <br>
      <li>El mecánico tiene derecho a denegar el servicio si este es agredido verbal o físicamente. <strong>Nota: Debe tener pruebas con clip.</strong></li>
    </ul>`
  },
  'mecanicos_5': {
    number: '05',
    title: 'ACTOS ILICITOS Y ARMAS',
    content: `<ul>
      <li>Está totalmente prohibido portar armamento estando en servicio y dentro del negocio.</li>
      <li>No se podrá realizar ningún tipo de rol agresivo estando en servicio.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Nota
        </div>
        <ul>
          <li>Ciudadano que sea descubierto con rol agresivo estando en servicio será sancionado.</li>
        </ul>
      </div>
      <br>
      <li>En caso de que un MECANICO esté en una organización ilegal y algún policía lo agarra en el acto, este será despedido, recibirá automáticamente un PKTE y perderá el trabajo.</li>
      <li>En caso de que el DUEÑO del taller esté en una organización ilegal y un policía lo agarra, automáticamente se pondrá en investigación el negocio y podría perder su empresa.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Penalización de Empresa
        </div>
        <ul>
          <li><p style="color: cyan;">Negocio que se ponga bajo investigación y la policía encuentre pruebas, se le quitará al dueño y se pondrá en venta nuevamente (OJO).</p></li>
        </ul>
      </div>
    </ul>`
  },
  'mecanicos_6': {
    number: '06',
    title: 'GESTION DE DUEÑOS',
    content: `<ul>
      <li>El total de empleados máximos por empresa es de 12.</li>
      <div class="norma-tip">
        <div class="norma-tip-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Límites y Empleados Inactivos
        </div>
        <ul>
          <li>Empresa que tenga más de la cantidad asignada se le dará un strike (al 3er strike se le quitará la empresa).</li>
          <li>Empleado que no trabaje durante 3 días será despedido, a menos que haya notificado a su jefe su indisponibilidad por motivos personales.</li>
        </ul>
      </div>
      <br>
      <li><strong>Inactividad del Dueño:</strong> Si el dueño no tiene su negocio activo en la ciudad durante un mes, se le quitará y se pondrá nuevamente en venta.</li>
      <li>Si el dueño tuvo o tiene un problema personal, debe dejar a alguien de confianza llevando su negocio (su mano derecha) para no perder la empresa.</li>
      <li>Si usted cree que no puede hacerse responsable, ponga a alguien a trabajarlo o entregue el negocio para que otra persona pueda darle uso.</li>
      <li>Cada dueño o encargado de una empresa tiene que realizar <strong>5 eventos cada mes</strong> para que no le den un strike. (Al 3er strike se le quitará la empresa).</li>
    </ul>`
  },
  'mecanicos_7': {
    number: '07',
    title: 'IMPORTANTE',
    content: `<ul>
      <li>🌟 EL STAFF DE INMIGRANTE RP V2 SE RESERVARÁ EL DERECHO DE EDITAR ESTAS NORMAS CUANDO LO VEA NECESARIO SIN PREVIO AVISO. EL DESCONOCIMIENTO DE ESTAS NO TE EXIME DE SU CUMPLIMIENTO.</li>
    </ul>`
  }
};

// ===== SECTION SWITCHING =====
function switchSection(sectionName) {
  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`.nav-btn[data-section="${sectionName}"]`).classList.add('active');

  // Update page sections
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
  });
  const targetSection = document.getElementById(`section-${sectionName}`);
  targetSection.classList.add('active');

  // Reset scroll position of the new section
  targetSection.scrollTop = 0;

  // Reset card animations when switching to normativa
  if (sectionName === 'normativa') {
    resetCardAnimations();
  }

  // Reset tienda item animations
  if (sectionName === 'tienda') {
    resetTiendaAnimations();
  }
}

function resetCardAnimations() {
  const items = document.querySelectorAll('.norma-card');
  items.forEach(item => {
    item.style.animation = 'none';
    item.offsetHeight; // Force reflow
    item.style.animation = '';
  });
}

function resetTiendaAnimations() {
  const items = document.querySelectorAll('.paquete-card, .tienda-item');
  items.forEach(item => {
    item.style.animation = 'none';
    item.offsetHeight;
    item.style.animation = '';
  });
}

// ===== MODAL FUNCTIONS =====
function openNormaModal(id) {
  let data = normaData[id];

  if (!data) {
    let num = '01';
    let titleStr = 'Regla en Construccion';

    if (typeof id === 'string' && id.includes('_')) {
      const parts = id.split('_');
      num = parts[1].padStart(2, '0');
      const categoryName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
      titleStr = `Regla ${parts[1]} (${categoryName})`;
    } else {
      num = String(id).padStart(2, '0');
    }

    data = {
      number: num,
      title: titleStr,
      content: `<ul>
          <li>El contenido para esta seccion aun no ha sido redactado.</li>
          <li>Por favor, agrega el texto correspondiente en el archivo <code>script.js</code> usando la clave <strong>'${id}'</strong> en el objeto <code>normaData</code>.</li>
        </ul>
        <div class="norma-tip">
          <div class="norma-tip-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            Tip para crear contenido
          </div>
          Puedes agregar cajas como esta usando el codigo HTML: <code>&lt;div class="norma-tip"&gt;...&lt;/div&gt;</code> al momento de redactar la norma.
        </div>`
    };
  }

  document.getElementById('normaModalNumber').textContent = data.number;
  document.getElementById('normaModalTitle').textContent = data.title;
  document.getElementById('normaModalBody').innerHTML = data.content;

  const overlay = document.getElementById('normaModalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeNormaModal(event, forceClose) {
  if (forceClose || event.target === document.getElementById('normaModalOverlay')) {
    const overlay = document.getElementById('normaModalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ===== TIENDA DATA & FUNCTIONS =====

// --- PAQUETES ---
const tiendaData = {
  'paquete_plata': {
    title: 'Paquete Plata',
    price: '$5 USD',
    image: 'img/paquete_plata.png',
    description: `<div class="modal-desc">
      <p>El paquete inicial para apoyar al servidor con beneficios basicos:</p>
      <ul>
        <li>Acceso a vehiculos VIP basicos</li>
        <li>Rol de donador Plata en Discord</li>
        <li>1 propiedad VIP pequena</li>
        <li>Skin personalizada basica</li>
      </ul>
      <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 16px;">* Los beneficios estan sujetos a cambios. Consulta en Discord para mas detalles.</p>
    </div>`
  },
  'paquete_oro': {
    title: 'Paquete Oro',
    price: '$15 USD',
    image: 'img/paquete_oro.png',
    description: `<div class="modal-desc">
      <p>El paquete mas popular con beneficios premium:</p>
      <ul>
        <li>Todo lo del Paquete Plata</li>
        <li>Acceso a vehiculos VIP premium</li>
        <li>Rol de donador Oro en Discord</li>
        <li>2 propiedades VIP</li>
        <li>Skins personalizadas avanzadas</li>
        <li>Prioridad en cola del servidor</li>
      </ul>
      <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 16px;">* Los beneficios estan sujetos a cambios. Consulta en Discord para mas detalles.</p>
    </div>`
  },
  'paquete_diamante': {
    title: 'Paquete Diamante',
    price: '$30 USD',
    image: 'img/paquete_diamante.png',
    description: `<div class="modal-desc">
      <p>El paquete definitivo con los mejores beneficios del servidor:</p>
      <ul>
        <li>Todo lo del Paquete Oro</li>
        <li>Acceso a todos los vehiculos VIP</li>
        <li>Rol de donador Diamante en Discord</li>
        <li>3 propiedades VIP</li>
        <li>Negocio VIP exclusivo</li>
        <li>Acceso prioritario al servidor</li>
        <li>Soporte VIP dedicado</li>
      </ul>
      <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 16px;">* Los beneficios estan sujetos a cambios. Consulta en Discord para mas detalles.</p>
    </div>`
  }
};

// --- ARTICULOS INDIVIDUALES ---
// ============================================================
// PARA AGREGAR MAS ARTICULOS:
// Simplemente agrega un nuevo objeto al array tiendaItems
// con los campos: id, name, price, image (ruta), description
// Si no tienes imagen, pon image: null y se mostrara un placeholder.
// Ejemplo:
// {
//   id: 'item_nuevo',
//   name: 'Nombre del articulo',
//   price: '$10 USD',
//   image: 'img/mi_articulo.png',   // o null si no hay imagen
//   description: 'Descripcion del articulo aqui.'
// }
// ============================================================
const tiendaItems = [
  {
    id: 'item_carro_deportivo',
    name: 'Carro Deportivo VIP',
    price: '$8 USD',
    image: 'img/item_carro.png',
    description: 'Un vehiculo deportivo exclusivo para donadores. Alta velocidad y diseno unico en la ciudad.'
  },
  {
    id: 'item_casa_mansion',
    name: 'Mansion VIP',
    price: '$20 USD',
    image: 'img/item_mansion.png',
    description: 'Una mansion de lujo con interior completamente amueblado y garaje para multiples vehiculos.'
  },
  {
    id: 'item_skin_exclusiva',
    name: 'Skin Exclusiva',
    price: '$5 USD',
    image: 'img/item_skin.png',
    description: 'Ropa y accesorios exclusivos que no estan disponibles en las tiendas de la ciudad.'
  },
  {
    id: 'item_arma_skin',
    name: 'Skin de Arma',
    price: '$3 USD',
    image: 'img/item_arma.png',
    description: 'Personaliza tus armas con skins unicas que destacan en cualquier situacion de rol.'
  }
];

// Discord button HTML (reusable)
const discordBtnHTML = `<a href="https://discord.com/channels/1396571726917140550/1494443611104870480" target="_blank" class="btn btn-discord" style="display:inline-flex;align-items:center;gap:10px;margin-top:20px;padding:12px 28px;width:100%;justify-content:center;text-decoration:none;">
  <svg style="width:20px;height:20px;flex-shrink:0;" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
  Solicitar en Discord
</a>`;

// Render items in the grid
function renderTiendaItems() {
  const grid = document.getElementById('tiendaItemsGrid');
  if (!grid) return;

  grid.innerHTML = tiendaItems.map(item => {
    const imgHTML = item.image
      ? `<div class="tienda-item-img"><img src="${item.image}" alt="${item.name}"></div>`
      : `<div class="tienda-item-placeholder">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
             <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
             <circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
           </svg>
         </div>`;

    return `
      <div class="tienda-item" onclick="openTiendaModal('${item.id}')">
        ${imgHTML}
        <div class="tienda-item-info">
          <div class="tienda-item-name">${item.name}</div>
          <div class="tienda-item-price">${item.price}</div>
        </div>
      </div>`;
  }).join('');
}

// Open tienda modal
function openTiendaModal(id) {
  const overlay = document.getElementById('tiendaModalOverlay');
  const content = document.getElementById('tiendaModalContent');

  // Check packages first
  if (tiendaData[id]) {
    const pkg = tiendaData[id];
    const imgTag = pkg.image ? `<img class="modal-item-img" src="${pkg.image}" alt="${pkg.title}">` : '';
    content.innerHTML = `
      ${imgTag}
      <h2>${pkg.title}</h2>
      <p class="modal-price">${pkg.price}</p>
      ${pkg.description}
      ${discordBtnHTML}`;
  } else {
    // Check individual items
    const item = tiendaItems.find(i => i.id === id);
    if (item) {
      const imgTag = item.image
        ? `<img class="modal-item-img" src="${item.image}" alt="${item.name}">`
        : '';
      content.innerHTML = `
        ${imgTag}
        <h2>${item.name}</h2>
        <p class="modal-price">${item.price}</p>
        <div class="modal-desc"><p>${item.description}</p></div>
        ${discordBtnHTML}`;
    } else {
      content.innerHTML = `<h2>Articulo no encontrado</h2><p class="modal-desc">Este articulo no existe en la tienda.</p>`;
    }
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}


function closeTiendaModal(event, forceClose) {
  if (forceClose || event.target === document.getElementById('tiendaModalOverlay')) {
    const overlay = document.getElementById('tiendaModalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ===== KEYBOARD ACCESSIBILITY =====
function initKeyboardNav() {
  // Card keyboard support
  document.querySelectorAll('.norma-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Nav buttons keyboard support
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        switchSection(btn.dataset.section);
      }
    });
  });
}

// ===== KEYBOARD SHORTCUTS =====
function initShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Don't trigger if user is typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === '1') switchSection('inicio');
    if (e.key === '2') switchSection('normativa');
    if (e.key === '3') switchSection('tienda');

    // Close modals with Escape
    if (e.key === 'Escape') {
      const normaOverlay = document.getElementById('normaModalOverlay');
      if (normaOverlay.classList.contains('active')) {
        normaOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
      const tiendaOverlay = document.getElementById('tiendaModalOverlay');
      if (tiendaOverlay.classList.contains('active')) {
        tiendaOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  initKeyboardNav();
  initShortcuts();
  renderTiendaItems();
});

