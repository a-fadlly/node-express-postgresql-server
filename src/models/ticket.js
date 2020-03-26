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

    return Ticket;
};

export default ticket;
