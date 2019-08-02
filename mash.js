function mash () {
    result1 = getHome();
    result2 = getChildrenCount();
    result3 = getCar()
    return "You will live in a " + result1 + "," + " and you will have " + result2 + " kids, and you drive a " + result3 
    
}

console.log(mash());

function getHome (){
    const home = ["mansion", "apartment", "shack","house", "the NYC Sewer System"]
    home.push(process.argv[2]);
    const random = (Math.random()) * home.length;
    const randomHome = Math.floor(random);
    return (home[randomHome])
    
}

function getChildrenCount () {
    const oneOrtheOther = []
    const childRNG = Math.random() * 100
    const childrenCnt = Math.ceil(childRNG)
    oneOrtheOther.push(childrenCnt)
    oneOrtheOther.push(process.argv[3]);
    const childrenRNG = (Math.random() * 2)
    const childOutput = Math.floor(childrenRNG)
    return oneOrtheOther[childOutput]
}

function getCar() {
    const cars = ["Bugatti Veyron", "Food Truck", "Honda Civic", "run down car", "Koenigsegg CCXR Trevita", "Rolls Royce Phantom", "Lightning McQueen", "Dodge Demon", "Chevrolet Suburban", "M4 Sherman Tank"]
    cars.push(process.argv[4])
    const random2 = (Math.random()) * cars.length;
    const randomCar = Math.floor(random2);
    return (cars[randomCar])
}

