const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => {
    for (let i = 0; i < profileDataArr.length; i+= 1) {
        console.log(profileDataArr[i]);
    }
    console.log('================');

    //is the same as 
    profileDataArr.forEach(profileItem => console.log(profileItem));
    
  };
  
  printProfileData(profileDataArgs);