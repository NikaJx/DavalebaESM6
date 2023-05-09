//დავალება 1 

const numFunc = (...n) => {
    for(const num of n) {
        
    }
}

console.log(numFunc());

//დავალება 2

const user = {
    banks: {
        stret: 'Marjanishvili',
        address: {
            city: 'Tbilisi'
        }
    }
};

const objFunc = (user) => {
    const { banks: { address: { city } = {} } } = user; 
    return city;
}

console.log(objFunc(user));


//დავალება 3

const phoneModel = {
    model: 'ipone',
    aboutPhone: {
        memory: '32gb',
        processor: '4gb'
    },
    operatingSystem: {
        ios: '13'
    },
    phoneColor: ['black', 'red', 'blue']
}

const phoneFunc = (phoneModel) => {
    const newPhone = {
        ...phoneModel,
        aboutPhone: {
            ...phoneModel.aboutPhone
        },
        operatingSystem: {
            ...phoneModel.operatingSystem
        },
        phoneColor: [...phoneModel.phoneColor]
    }
    console.log(newPhone);
}


phoneFunc(phoneModel);