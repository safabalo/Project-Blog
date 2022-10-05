module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('comments', {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description:{
                type: DataTypes.STRING,
                allowNull: false,
            }
        })
        return Comments
}