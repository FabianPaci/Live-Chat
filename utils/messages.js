const moment = require("moment");

function formatMessage(username, text) {
  return {
    usernames,
    text,
    time: moment().format("h:mm a"),
  };
}

module.exports = formatMessage;
