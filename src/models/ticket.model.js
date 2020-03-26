const ticket = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('ticket', {
        subject: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        assign_agent: {
            type: DataTypes.STRING,
        },
    });

    Ticket.associate = function (models) {
        Ticket.belongsTo(models.Priority, { foreignKey: 'priority_id' });
        Ticket.belongsTo(models.Status, { foreignKey: 'status_id' });
        Ticket.belongsTo(models.Type, { foreignKey: 'type_id' });
    };

    return Ticket;
};

export default ticket;
