module.exports = {
  setupFiles: ["<rootDir>/config/jest/jest.setup.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  rootDir: "../../",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"]
};
