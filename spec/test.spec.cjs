import Test from "../src/components/test.svelte"

describe(Test.name, ()=>{
    it("can be instantiated", ()=>{
        new Test();
    })
})