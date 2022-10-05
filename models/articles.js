module.exports = (sequelize, DataTypes) => {
    const Articles = sequelize.define('articles', {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },content: {
                type: DataTypes.STRING,
                allowNull: false,
            },author: {
                type: DataTypes.STRING,
                allowNull: false,
            },image: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        })
        return Articles
}