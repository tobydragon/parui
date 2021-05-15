import { calcResponseState, DONT_KNOW_TEXT, NOTHING_SELECTED_TEXT, ResponseStateAndIcon } from "../../main/js/DropdownResponseArea";

describe('DropDownResponseAreaTest', () => {
    test('calcResponseState', () => {
        expect(calcResponseState("x y z ", "x y z ")).toBe(ResponseStateAndIcon.CORRECT);
        //white space is trimmed from both current and correct
        expect(calcResponseState("x y", "x y z \t")).toBe(ResponseStateAndIcon.INCORRECT);

        expect(calcResponseState("x y ", "x y z ")).toBe(ResponseStateAndIcon.INCORRECT);
        expect(calcResponseState(ResponseStateAndIcon.NOTHING_SELECTED.text, "x y z ")).toBe(ResponseStateAndIcon.NOTHING_SELECTED); 
        expect(calcResponseState(ResponseStateAndIcon.DONT_KNOW.text, "x y z ")).toBe(ResponseStateAndIcon.DONT_KNOW);
    });
});