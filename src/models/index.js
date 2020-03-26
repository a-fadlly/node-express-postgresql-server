import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'mysql',
  },
);

const models = {
  User: sequelize.import('./user.model'),
  Ticket: sequelize.import('./ticket.model'),
  Status: sequelize.import('./status.model'),
  Priority: sequelize.import('./priority.model'),
  Type: sequelize.import('./type.model'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
