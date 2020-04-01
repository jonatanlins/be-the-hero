const generateUniqueId = require("../../src/utils/generateUniqueId");

describe("Generate unique ID", () => {
  it("should generate an unique ID", () => {
    const id1 = generateUniqueId();
    const id2 = generateUniqueId();

    expect(id1).toHaveLength(8);
    expect(id2).toHaveLength(8);
    expect(id1).not.toEqual(id2);
  });
});
