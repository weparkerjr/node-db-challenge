
exports.seed = function(knex) {
  return knex('project').insert([
    { name: "Clean House", description: "Monday", completed: 'false'},
    { name: "Clean Car", description: "Tuesday", completed: 'false'},
    { name: "Clean Office", description: "Wednesday", completed: 'false'},
    { name: "Clean Instruments", description: "Thursday", completed: 'false'},
    { name: "Laundry", description: "Friday", completed: 'false'},
    { name: "Clean Boat", description: "Saturday", completed: 'false'},
    { name: "Clean Church", description: "Sunday", completed: 'false'}
  ]);
};