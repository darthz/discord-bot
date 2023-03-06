// gets the message and returns a list of every role that the message.user has
function getRoles(message) {
  const member = message.member;
  // Get the list of roles for the member
  const roles = member.roles.cache;

  //every role
  const roles_name = [];

  // Loop through the roles and log each one
  roles.forEach((role) => {
    // console.log(role.name);
    roles_name.push(role.name);
  });

  // console.log(roles_name);
  return roles_name;
}

function replyMessage(message, reply) {
  const msg = reply[0].toUpperCase() + reply.slice(1);
  message.reply(msg);
  return;
}

module.exports = { getRoles, replyMessage };
