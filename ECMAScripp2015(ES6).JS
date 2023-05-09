let arr = ["Tom", "Sam", "Ray", "Bob"];//task 1
let [x, y, zz, ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

let data = {//task 2
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let {names: [name1,name2,name3,name4], ages: [age1, age2, age3, age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

function mul(a, b, c, d, e) {//task 3
    let i = 0;
    let mas = [a, b, c, d, e];
    let bbb = false;
    for(let j = 0; j < mas.length; j++)
    {
        if(typeof(mas[j]) == "number") 
        {
            if(i == 0){i = mas[j];}
            else{i = i * mas[j];}
            bbb= true;
        }
    }
    if(bbb){return i;}
    return 0;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

function mapBuilder (keysArray, valuesArrays)//task 4
{
    let mmm = new Map;
    if(keysArray.length == valuesArrays.length)
    { 
        for(let i = 0; i < keysArray.length; i++)
        {
            mmm.set(keysArray[i], valuesArrays[i]);
        }
    }
    return mmm;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"