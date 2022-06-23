console.clear()




const pc = {

}

function storage(item, depth = 0) {
    let size = 0;

    if (item.type === `folder`) {
        for (const innerItem of item.content) {
            size += storage(innerItem, depth +1);
        }
    } else {
        size = item.size;
    }

    return depth ? size : size / 8;
}

const totalKBs = storage(pc);
console.log(`Used space:`, totalKBs, `KB`);

const files = [

]

function fileSearch(input) { // fuzzyFinding = false;
    return {
        folder: [],
        files: [],
    };

}