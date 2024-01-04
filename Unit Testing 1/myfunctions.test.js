const { sum, myFunction, fetchData, fetchPromise, fetchPromise2 } = require('./myfunctions');

//test('description', testFunction)

// toBe() - primitive values like numbers, strings and Booleans
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', ()=>{
    expect(2+2).toBe(4);
})


// toBe() - objects and arrays 
test('object assignment', () => {
    const data = { one: 1};
    data['two'] = 2;
    
    expect(data).toEqual({ one: 1, two: 2 });
});

// toBeFalsy, use falsy to check if a value is null, undefined, blank, alien, false or zero
test('null is falsy', () => {
    const n = null; // or const n = 0;
    expect(n).toBeFalsy();
});

// toBeTruthy
test('one is truthy', () => {
    const n = 1 
    expect(n).toBeTruthy();
});

// toThrow - to test whether a particular function throws an error
test('throws on invalid input', () => {
    invalidInput = 'Emma'
    // invalidInput = 3 - the error will fail
    expect(() => {
        myFunction(invalidInput);
    }).toThrow();
})

// ====== Testing asynchronous code =============================

// testing callback functions
test('1: the data is peanut butter', done => {
    function callback(data){
        try{
            expect(data).toBe('peanut butter');
            done(); // signals to jest that the test is complete
        }catch(error){
            done(error);
        }
    }

    fetchData(callback);
});

// testing promise based functions
test('2: the data is peanut butter', () => {
    return expect(fetchPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
    return expect(fetchPromise2()).rejects.toThrow('error');
});

// testing async functions
test('3: the data is peanut butter', async () => {
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
});

// const mockCallback = jest.fn(x => 42 + x);
// mockCallback(0);
// mockCallback(1);

test('mock implementation of a basic function', () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1); // checks that the mock function was called with the correct argument
})

test('spying on a method of an object', ()=> {
    const video = {
        play(){
            return true;
        },
    };

    const spy = jest.spyOn(video, 'play'); // track the times when play has been called
    video.play();

    expect(spy).toHaveBeenCalled(); // check if the play method has been called

    spy.mockRestore(); // used to restore the original implementation of that function
})