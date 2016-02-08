function step1Error (item, t){
  return new Promise((resolve, reject) => {
    if (item % 2 === 1)
      reject(new Error('Item not valid'));
    setTimeout(()=>{
      resolve('step 1 for item ' + item);
    }, t);
  });
}
export function step1NoError (item, t){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('step 1 for item ' + item);
    }, t);
  });
}

export function step2 (item, t){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('step 2 for item ' + item);
    },t);
  });
}

export function step3 (item, t){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('step 3 for item ' + item);
    }, t);
  });
}

export function processItemNoError (item, time = 1000) {
  let p = [step1NoError, step2, step3];
  return p.reduce((promise, next)=>{
    return promise.then(res =>{
      if(res)
        console.log(res);
      return next(item,time);
    }).then(res => {
      console.log(res);
    }).catch(err =>{
      console.log(err);
    });
  },Promise.resolve());
}


export function processItemError (item) {
  return step1Error(item, 1000).then(result =>{
    console.log(result);
    return step2(item, 1000);
  }).then(result =>{
    console.log(result);
    return step3(item, 1000);
  }).then(result =>{
    console.log(result);
    return ('finished process of item ' + item);
  }).catch(err =>{
    throw (err);
  });
}

export function fastrESNoError (item) {
  return step1NoError(item, 1).then(result =>{
    console.log(result);
    return step2(item, 1);
  }).then(result =>{
    console.log(result);
    return step3(item, 1);
  }).then(result =>{
    console.log(result);
    return ('finished process of item ' + item);
  }).catch(err =>{
    throw (err);
  });
}

export function fastrESError (item) {
  return step1Error(item, 1).then(result =>{
    console.log(result);
    return step2(item, 1);
  }).then(result =>{
    console.log(result);
    return step3(item, 1);
  }).then(result =>{
    console.log(result);
    return ('finished process of item ' + item);
  }).catch(err =>{
    throw (err);
  });
}
