module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    deployedLink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    repositoryLink: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    projectDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  Project.associate = function(models) {
    // We're saying that Project belongs to an user
    // Project can't exist without an user due to the foreign key constraint
    Project.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  //syncs with DB
  // Project.sync();
  //creates the table
  return Project;
};
