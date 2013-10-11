describe("Math API", function() {
  var mapi = MathAPI;

  it("Round(4, 2) should return 4", function() {
    expect(mapi.round(4,2)).toEqual(4);
  });

  it("Round(0, 0) should return NaN", function() {
    expect(mapi.round(0,0)).toBeNaN();
  });


  it("Ceil(10, 6) should return 12", function() {
    expect(mapi.ceil(10,6)).toEqual(12);
  });

  it("Ceil(0, 0) should return NaN", function() {
    expect(mapi.ceil(0,0)).toBeNaN();
  });


  it("Clamp(10, 2, 5) should return 5", function() {
    expect(mapi.clamp(10,2, 5)).toEqual(5);
  });

  it("Clamp() should return undefined", function() {
    expect(mapi.clamp()).toBeUndefined();
  });

  /* ... */

  it("CountSteps(16, 8) should return 2", function() {
    expect(mapi.countSteps(16, 8)).toEqual(2);
  });

  it("InRange(10, 2, 5, 15) should return true", function() {
    expect(mapi.inRange(10, 2, 5, 15)).toBeTruthy();
  });

  it("Lerp(10, 5, 8) should return 35", function() {
    expect(mapi.lerp(10, 5, 8)).toEqual(35);
  });  

  it("Loop(10, 5, 20) should return 10", function() {
    expect(mapi.loop(10, 5, 20)).toEqual(10);
  });

  it("Norm(10, 2, 7) should return 1.6", function() {
    expect(mapi.norm(10, 2, 7)).toEqual(1.6)
  });  
});