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
  };

  if (data === 'w') {
    connection.write('Move: up');
  } else if (data === 'a') {
    connection.write('Move: left');
  } else if (data === 's') {
    connection.write('Move: down');
  } else if (data === 'd') {
    connection.write('Move: right');
  };
};

module.exports = { setupInput };