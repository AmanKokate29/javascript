// Iterators

function makIterator(start = 0, end = Infinity, step = 1){
    let nextStart = start;
    let iterationCount = 0;


    return{
        next(){
            let result;
            if(iterationCount < end){
                result = {value: nextStart, done: false};
                nextStart = nextStart + step;
                iterationCount++;
                return result;
            }

            return {value: iterationCount, done: true}
        }
    }
}


