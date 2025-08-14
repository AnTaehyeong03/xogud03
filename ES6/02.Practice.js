const obj = {
    name: "홍길동",
    normalFn: function() {
        console.log("일반 함수:", this.name);
    },
    arrowFn: () => {
        console.log("화살표 함수:", this.name);
    }
};

obj.normalFn(); // 일반 함수: 홍길동
obj.arrowFn();  // 화살표 함수: 홍길동

const person = {
    name: "안찰스",
    greet: function() {
        const innerArrow = () => console.log(this.name);
        const innerNormal = function() { console.log(this.name); };
        
        innerArrow();
        innerNormal();
    }
};

person.greet();
// innerArrow 출력: 
// innerNormal 출력: 

function User(name) {
    this.name = name;
    setTimeout(function() {
        console.log("Hello, " + this.name);
    }, 1000);
}

new User("찰스"); // "Hello, undefined"

const tom = {
    name : 'Tom',
    sayName : function(){
        console.log(this.name);
    }
}

const alice = { name: "Alice" };

tom.sayName(); // ??
tom.sayName.call(alice); // ??

this.tag = "Error";

function print() {
  console.log(this.tag); 
}
const obj2 = { tag: "OK" };

const boundPrint = print.bind(obj2);

print(); // ??
boundPrint(); // ??