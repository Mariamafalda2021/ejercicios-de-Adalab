
const cestaPeras = {
    max: 10,
    min: 5,
    current: 7,
    initial: 0,
}

cestaPeras.add = function () {
    this.current++;
}
cestaPeras.sub = function () {
    this.current--;
}
cestaPeras.add();
/*cestaPeras.sub();*/

cestaPeras.backCurrent = function () {
    this.current = this.initial;
}

cestaPeras.backCurrent();
console.log(cestaPeras);
