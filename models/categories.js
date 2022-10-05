module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('categories', {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        })
        return Categories
}