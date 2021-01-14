/**
 * Set up user interface
 * Specifically, so that we can handle user input via stdin
 */

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();

  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }

  // create movements and special messages
  switch (data) {
  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  case '1':
    connection.write('Say: Wreck it!');
    break;
  case '2':
    connection.write('Say: Hit it!');
    break;
  case '3':
    connection.write('Say: Tank it!');
    break;
  }
};

module.exports = { setupInput };