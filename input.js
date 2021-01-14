/**
 * Set up user interface
 * Specifically, so that we can handle user input via stdin
 */

let connection;
const { KEYS } = require('./constants');

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

  // look up the key
  for (key in KEYS) {
    if (data === key) {
      connection.write(KEYS[key]);
    }
  }
};

module.exports = { setupInput };