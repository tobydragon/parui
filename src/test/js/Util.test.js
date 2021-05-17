import {diffNewArray} from "../../main/js/Util"

test ("diffNewArray", ()=>{
    expect(diffNewArray([1, 2, 3], 0, 0)).toEqual([0, 2, 3]);
    expect(diffNewArray([1, 2, 3], 1, 0)).toEqual([1, 0, 3]);
    expect(diffNewArray([1, 2, 3], 2, 0)).toEqual([1, 2, 0]);

    expect(diffNewArray([1], 0, 0)).toEqual([0]);

    expect(()=>(diffNewArray([], 0, 0))).toThrow();
    expect(()=>(diffNewArray([1, 2, 3], 3, 0))).toThrow();
    expect(()=>(diffNewArray([1, 2, 3], 52, 0))).toThrow();
});