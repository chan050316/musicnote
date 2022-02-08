module.exports = (sequelize, DataTypes) => {
  const Songs = sequelize.define(
    "Song",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      song: {
        type: DataTypes.STRING(100),
      },
      actor: {
        type: DataTypes.STRING(50),
      },
    },
    {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      tableName: "Song", // 테이블 이름 정의
      timestamps: true, // createAt, updateAt 활성화
      paranoid: true, // deleteAt 옵션
    }
  );

  return Songs;
};
