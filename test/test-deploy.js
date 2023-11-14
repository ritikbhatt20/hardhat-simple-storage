// describe is a keyword that hardhat and mocha will recognise 
const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// describe("SimpleStorage", () => {})
describe("SimpleStorage", function () {
  // let simpleStorageFactory
  // let simpleStorage
  let simpleStorageFactory, simpleStorage
  // before each fn tells us what to do before each of our it 
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })
  // it is where we should write our code to run our tests 
  it("Should start with a favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve()
    const expectedValue = "0"
    // assert
    // expect
    assert.equal(currentValue.toString(), expectedValue)
    // expect(currentValue.toString()).to.equal(expectedValue)
  })
  it.only("Should update when we call store", async function () {
    const expectedValue = "7"
    const transactionResponse = await simpleStorage.store(expectedValue)
    await transactionResponse.wait(1)

    const currentValue = await simpleStorage.retrieve()
    assert.equal(currentValue.toString(), expectedValue)
  })

  // // Extra - this is not in the video
  // it("Should work correctly with the people struct and array", async function () {
  //   const expectedPersonName = "Patrick"
  //   const expectedFavoriteNumber = "16"
  //   const transactionResponse = await simpleStorage.addPerson(
  //     expectedPersonName,
  //     expectedFavoriteNumber
  //   )
  //   await transactionResponse.wait(1)
  //   const { favoriteNumber, name } = await simpleStorage.people(0)
  //   // We could also do it like this
  //   // const person = await simpleStorage.people(0)
  //   // const favNumber = person.favoriteNumber
  //   // const pName = person.name

  //   assert.equal(name, expectedPersonName)
  //   assert.equal(favoriteNumber, expectedFavoriteNumber)
  
})