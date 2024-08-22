import generarFizzBuzz from "./fizzbuzz";

describe("Fizzbuzz", () =>{
    it("generar el mismo numero si no sigue ninguna regla", () =>{
        expect(generarFizzBuzz(1)).toEqual("1");
    });
    it("generar el numero para cualquier numero si no sigue ninguna regla", () =>{
        expect(generarFizzBuzz(2)).toEqual("2");
    });
   

});