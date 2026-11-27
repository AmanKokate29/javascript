function add(a, b, c){
    return function (b){
        return function (c){
            return a + b + c;
        }
    }
}

// function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`Sending Email to ${to} with subjet ${subject}: ${body}`);
            
//         }
//     }

// }


const sendAutoEmail = (to) => (subject) => (body) => `Sending Email to ${to} with subjet ${subject}: ${body}`;

let step1 = sendAutoEmail("amankokate29@gmail.com");
let step2 = step1('New Order Confirmation');

console.log(step2("Hey Aman, Here is Something for you"));
