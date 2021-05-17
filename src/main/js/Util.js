
//returns a new shallow copy of the array with a single item changed
export const diffNewArray = (arrayToCopy, indexToOverWrite, newItem) => {
    if (indexToOverWrite<0 || indexToOverWrite >= arrayToCopy.length){
        throw new Error("Bad index: "+indexToOverWrite+ " in " + arrayToCopy);
    }
    const part1 = arrayToCopy.slice(0,indexToOverWrite);
    const part2 = arrayToCopy.slice(indexToOverWrite+1);
    return [...part1, newItem, ...part2];
}