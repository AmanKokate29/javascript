// 1. Switch Statement
// Used to execute different code blocks based on a value.

const month = 3;

switch (month) {

    case 1:
        console.log("Jan");
        break;

    case 2:
        console.log("Feb");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid month");
        break;
}

// Output: March




//Multiple Cases Example
const day = 6;

switch (day) {
    case 6:
    case 7:
        console.log("Weekend");
        break;

    default:
        console.log("Working day");
}


// Output: Weekend

