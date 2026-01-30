const assert = require('assert')
const Calculator = require('../app/calculator')
const { describe } = require('mocha')

describe ("Validating Calculator class", () =>  {

    // Nestsed describe for grouping related tests
    // Addition Tests
    describe("Addition Tests", () => {

        it("Pass: Addition of (5, 2) should return 7", () => {
        try {

            assert.strictEqual(Calculator.add(5, 2), 7) // (not)strictEqual for value and type comparison
            console.log("Addition Test Passed")

        } catch (error) {

            console.error("Addition Test Failed:", error.message)

        }
        })

        it("Fail: Addition of (5, 2) should NOT return 8", () => {
            try {

                assert.notStrictEqual(Calculator.add(5, 2), 8)
                console.log("Addition Negative Test Passed")
                
            } catch (error) {

                console.error("Addition Negative Test Failed:", error.message)

            }
        })
    
    }) 


    // Subtraction Tests
    describe("Subtraction Tests", () => {

        it("Pass: Subtraction of (5, 2) should return 3", () => {
            try {

                assert.strictEqual(Calculator.sub(5, 2), 3)
                console.log("Subtraction Test Passed")

            } catch (error) {

                console.error("Subtraction Test Failed:", error.message)
            
            }
        })
        
        it("Fail: Subtraction of (5, 2) should NOT return 5", () => {
            try {

                assert.notStrictEqual(Calculator.sub(5, 2), 5)
                console.log("Subtraction Negative Test Passed")

            } catch (error) {

                console.error("Subtraction Negative Test Failed:", error.message)

            }
        })
    })
    
    // Multiplication Tests
    describe("Multiplication Tests", () => {

        it("Pass: Multiplication of (5, 2) should return 10", () => {
            try {

                assert.strictEqual(Calculator.mul(5, 2), 10)
                console.log("Multiplication Test Passed")

            } catch (error) {

                console.error("Multiplication Test Failed:", error.message)

            }
        })

        it("Fail: Multiplication of (5, 2) should NOT return 12", () => {
            try {

                assert.notStrictEqual(Calculator.mul(5, 2), 12)
                console.log("Multiplication Negative Test Passed")

            } catch (error) {

                console.error("Multiplication Negative Test Failed:", error.message)

            }
        })
    })

    // Division Tests
    describe("Division Tests", () => {

        it("Pass: Division of (10, 2) should return 5", () => {
            try {

                assert.strictEqual(Calculator.div(10, 2), 5)
                console.log("Division Test Passed")

            } catch (error) {

                console.error("Division Test Failed:", error.message)

            }
        })

        it("Fail: Division of (10, 2) should NOT return 2", () => {
            try {

                assert.notStrictEqual(Calculator.div(10, 2), 2)
                console.log("Division Negative Test Passed")

            } catch (error) {

                console.error("Division Negative Test Failed:", error.message)
            }

        })
    })
})