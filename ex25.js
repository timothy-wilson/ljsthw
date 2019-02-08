const counter = (start, end) => {
    if (start < end) {
        console.log("counter", start, end);
        counter(start+1, end);
    }
}

counter(0, 5)

const call_back = (start, end, cb) => {
    if (start < end) {
        cb(start, end)
        call_back(start+1, end, cb)
    }
}

call_back(0, 5, (i, j) => {console.log(i, j)})