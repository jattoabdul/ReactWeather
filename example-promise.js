/**
 * Created by IrshaadTechnologies on 4/20/2017.
 */

/*
function getTempCallBack(location, callback) {
    callback(undefined, 78);
    callback("City Not Found");

}

getTempCallBack('Lagos', function (err, temp) {
    if (err){
        console.log('error', err);
    }else{
        console.log('success', temp);
    }
});

function getTempPromise(location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(79);
            reject('City Not Found');
        }, 1000);
    });
}


getTempPromise('Lagos').then(function (temp) {
    console.log('Promise Success', temp);
}, function (err) {
    console.log('Promise Error', err);
});*/

//Challenge Area
/*
function addPromise(a, b) {
     return new Promise(function (resolve, reject) {
         if(typeof a === 'number' && typeof b === 'number'){
             resolve(a+b);
         }else {
             reject('One of the number are not valid numbers');
         }
     });
}

addPromise(2, 3).then(function (sum) {
    console.log('Promise Success', sum);
}, function (err) {
    console.log('Promise Error', err);
});

addPromise('jatto', 3).then(function (sum) {
    console.log('Promise Success, shouldnt show this', sum);
}, function (err) {
    console.log('Promise Error', err);
});*/
