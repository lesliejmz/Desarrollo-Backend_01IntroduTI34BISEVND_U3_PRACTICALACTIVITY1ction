// Declare una variable denominada challenge y asígnela a un valor inicial '30 Days Of JavaScript'.
var challenge = '30 Days Of JavaScript';

// Imprima la cadena en la consola del navegador usando console.log()
console.log(challenge);

// Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(challenge.length);

// Cambie todos los caracteres de la cadena a letras mayúsculas usando el método toUpperCase()
console.log(challenge.toUpperCase());

// Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(challenge.toLowerCase());

// Corta (corta) la primera palabra de la cadena usando el método substr() o substring()
console.log(challenge.substr(0, 2)); // Corta las dos primeras letras

// Corta la frase 'Days Of JavaScript' de '30 Days Of JavaScript'.
console.log(challenge.substr(3));

// Compruebe si la cadena contiene una palabra 'Script' usando el método include()
console.log(challenge.includes('Script'));

// Divida la cadena en una matriz usando el método split()
console.log(challenge.split(' ')); // Divide por espacios en blanco

// Divida la cadena '30 días de JavaScript' en el espacio usando el método split()
console.log(challenge.split(' '));

// 'Facebook , Google , Microsoft , Apple, IBM , Oracle , Amazon ' divide la cadena por la coma y la cambia a una matriz.
var companies = 'Facebook , Google , Microsoft , Apple, IBM , Oracle , Amazon ';
console.log(companies.split(','));

// Cambie '30 días de JavaScript' a '30 días de Node' usando el método reemplazar().
console.log(challenge.replace('JavaScript', 'Node'));

// ¿Cuál es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log(challenge.charAt(15));

// ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()?
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// Utilice indexOf para determinar la posición de la primera aparición de 'a' en '30 días de JavaScript'
console.log(challenge.indexOf('a'));

// Utilice lastIndexOf para determinar la posición de la última aparición de 'a' en '30 días de JavaScript.'
console.log(challenge.lastIndexOf('a'));

// Utilice indexOf para encontrar la posición de la primera aparición de la palabra 'porque' en la siguiente oración: 'No puedes terminar una oración con porque porque porque es una conjunción'
var sentence = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(sentence.indexOf('porque'));

// Utilice lastIndexOf para encontrar la posición de la última aparición de la palabra 'porque' en la siguiente oración: 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(sentence.lastIndexOf('porque'));

// Utilice search para encontrar la posición de la primera aparición de la palabra 'porque' en la siguiente oración: "No se puede terminar una oración con porque porque porque es una conjunción ".
console.log(sentence.search('porque'));

// Utilice trim() para eliminar cualquier espacio en blanco al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
var stringWithSpaces = ' 30 días de JavaScript ';
console.log(stringWithSpaces.trim());

// Utilice el método startsWith() con la cadena '30 Days Of JavaScript' y haga que el resultado sea verdadero
console.log(challenge.startsWith('30 Days'));

// Utilice el método endsWith() con la cadena '30 días de JavaScript' y haga que el resultado sea verdadero
console.log(challenge.endsWith('JavaScript'));

// Utilice el método match() para encontrar todas las 'a' en '30 días de JavaScript'
console.log(challenge.match(/a/g));

// Utilice concat() y combine '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
var part1 = '30 días de ';
var part2 = 'JavaScript';
console.log(part1.concat(part2));

// Utilice el método repeat() para imprimir '30 días de JavaScript' 2 veces
console.log(challenge.repeat(2));
