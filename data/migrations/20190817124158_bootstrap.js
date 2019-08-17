exports.up = function(knex) {
    return knex.schema
      .createTable("project", tbl => {
        tbl.increments();

        tbl
            .string("name", 128)
            .notNullable();
        tbl
            .string("description", 255);
        tbl
            .boolean("completed")
            .notNullable()
            .defaultTo(false);
      })
      .createTable("resource", tbl => {
        tbl
            .increments();
        
        tbl
          .string("name", 128)
          .unique()
          .notNullable();
        tbl
            .string("description", 255);
      })
      .createTable("task", tbl => {
        tbl
            .increments();
        
        tbl
            .string("description", 255)
            .notNullable();
        tbl
            .string("notes", 1000);
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(false);
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("project")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
      .createTable("project_resource", tbl => {
        tbl
            .increments();
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("project")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resource")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      });
  };
  
  exports.down = function(knex) {
    return (
      knex.schema
        .dropTableIfExists("project")
        .dropTableIfExists("resource")
        .dropTableIfExists("task")
        .dropTableIfExists("project_resource")
    );
  };
