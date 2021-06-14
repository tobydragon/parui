import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserCreation from "../../main/js/UserCreation";
import React from "react";

test('UserCreationEachOptionChosen', ()=>{
    render(<UserCreation cohortIds = {["Random", "In Order", "Third Id"]}/>);
    //expect(screen.getByTestId('text').toBe("---Select Cohort---"));
    screen.debug();
    expect(userEvent.selectOptions(screen.getByRole("combobox"),"Random"));
    screen.debug();
    expect(userEvent.selectOptions(screen.getByRole("combobox"),"In Order"));
    screen.debug();
    expect(userEvent.selectOptions(screen.getByRole("combobox"),"Third Id"));
    screen.debug();
});