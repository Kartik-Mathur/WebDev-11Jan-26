function createCounter(){
    let cnt = 0;

    return function(){
        cnt++;

        return cnt;
    }
}

