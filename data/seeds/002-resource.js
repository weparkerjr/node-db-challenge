
exports.seed = function(knex) {
  return knex('resource').insert([
    { name: "Caroline", description: "Grandma"},
    { name: "Phyllis", description: "Mother"},
    { name: "Edwin", description: "Dad"},
    { name: "Camille", description: "Daughter"},
    { name: "Sebastian", description: "Son"},
    { name: "Liam", description: "Son"},
    { name: "David", description: "Friend"}
  ]);
};