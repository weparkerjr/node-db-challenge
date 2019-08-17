
exports.seed = function(knex) {
  return knex('task').insert([
    { description: "Make bed", notes: "Queen", completed: 'false', project_id: 1},
    { description: "Clean Sink", notes: "Use Scubber", completed: 'false', project_id: 2},
    { description: "Clean Windshield", notes: "WIndex", completed: 'false', project_id: 1},
    { description: "Change Oil", notes: "OW-20", completed: 'false', project_id: 3},
    { description: "Pump Tires", notes: "32lbs", completed: 'false', project_id: 1},
    { description: "File Paper", notes: "32lbs", completed: 'false', project_id: 4}
  ]);
};