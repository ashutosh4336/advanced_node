process.env.UV_THREADPOOL_SIZE = 4;
console.log(process.env.UV_THREADPOOL_SIZE);

import crypto from 'crypto';

const start = Date.now();

/*
const pendingTimers = []
const pendingOSTasks = []
const pendingOperation = []


function shouldContinue() {
    // Check One : Any Pending setTimeOut, setInterval, setImmediate
    // Check Two : Any Pending OS Task ? (Like Server Listening on PORT)
    // Check Three : Any Pending Long Running Operation  -  like FS module
    return pendingTimers.length || pendingOSTasks.length || pendingOperation.length
}

while(shouldContinue()) {
    // 1. Node Looks at pendingTimers and sees if any functions
    // are ready to be called. setTimeOut, setInterval


    // 2. Node looks at pendingOSTasks and pendingOperations
    // and calls relevent callBacks


    // 3. Pauses Execuation. Continue When....
    -- a new PendingOSTask is Done
    -- a new PendingOperation is Done
    -- a new timer is about to 


    // 4. Looks at pendingTimers. call any setImmediate


    // 5. Handle any Close Event

}

Exit Back toi Terminal



*/

// crypto.pbkdf2('a', 'b', 1000000, 521, 'sha512', () => {
//   console.log('1st Timestamp : ', Date.now());
//  console.log('1st Timetaken : ', Date.now() - start);
// });

// // Second Fun
// crypto.pbkdf2('a', 'b', 1000000, 521, 'sha512', () => {
//   console.log('2nd Timestamp : ', Date.now());
//   console.log('2nd Timetaken : ', Date.now() - start);
// });

// crypto.pbkdf2('a', 'b', 1000000, 521, 'sha512', () => {
//   console.log('3rd Timestamp : ', Date.now());
//   console.log('3rd Timetaken : ', Date.now() - start);
// });

// crypto.pbkdf2('a', 'b', 1000000, 521, 'sha512', () => {
//   console.log('4th Timestamp : ', Date.now());
//   console.log('4th Timetaken : ', Date.now() - start);
// });

// crypto.pbkdf2('a', 'b', 1000000, 521, 'sha512', () => {
//   console.log('5th Timestamp : ', Date.now());
//   console.log('5th Timetaken : ', Date.now() - start);
// });

// For Some standard library function calls the node C++ side and Libuv decide to do expensive calculation ouside of the Event Loop

// They make use of Thread pool. a Thread pool is a series of 4 (By Default) Threads that is used for computation intensive Task
//  e.g - PBKDF2

// Javascript
//    |
// PBKDF2
//    |
//   V8
//    |
// Node C++ Side
//    |
//  Thread Pool (Combination of 4 Threads)

/*

While Running 5 PBKDF2 function takes 10 second to finish for first 4 Function because
Though  the CPU is multi threaded but each function takes 5Second so each Core had to Do Twice the Work So It took Approximately 10 Second to Finish


while the last (5th) function took roughly 5Sec to Finish Because It was only task left and Assigned to a Core which Finished in 5 Second. 

*/

/*

|--->   node fileName.js --> 
|    --> process and executes the code in fileName.js -->
|    --> Do we've still work to do, look at timers, OS tasks, Threadpool -->
|    --> 2 Possible OutCome -->
|    --> No - Exit the Program
|    --> Yes - Run setTimeout's, setInterval's
|    --> Run any call backs for any os Tasks or Threadpool tasks that are done (99% of Our Code) -->
|    --> Pause and Wait for stuff to Happen -->
|    --> Run any 'setImmediate' function -->
|    --> Handle Close Event ---------|
|                                    |
------------------Repeate-------------


*/
