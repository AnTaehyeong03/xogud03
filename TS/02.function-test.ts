// 1.
const apply:(a:number, b:number) => number = (a,b) => a+b;

// 2. 
export type PrintType = (name:string, favorite:'돈까스'|'제육'|'치킨') => void;
const print:PrintType = (name, favorite) => {
    console.log(`안녕하세요 . 제 이름은 ${name}입니다. 제 최애 음식은 ${favorite}입니다,
    하나만 사주세요`);
}

// 3.
let data:string; 
data = racoonInfo('podong' , 10, 'male', true );
console.log(data);//이름 : podong , 무게 : 10 , 성별 : male, 중성화 : true
data = racoonInfo('coco',4, 'female' );
console.log(data);//이름 : coco , 무게 : 4 , 성별 : female

function racoonInfo(name:string, weight:number, gender:'male'|'female', tf?:boolean) {
    return `이름 : ${name} , 무게 : ${weight} , 성별 : ${gender}`+(tf ?`, 중성화: ${tf}`:``);
}

// 4.
const array2:(string|number|number[])[] = ['1',2,3,4,'5',[1,2,3,4,5]];
function sum(array2: (string|number|number[])[]) : number{
    let result = 0;
    for(let num of array2){
        if(typeof num === 'string'){
            result += Number(num);
        }else if(typeof num === 'number'){
            result += num;
        }else if(typeof num === 'object' && Array.isArray(num)){
            result += num.reduce((prev, curr) => prev+curr);
        }else{
            const check:never = num;
        }
    }
    return result;
}
const total = sum(array2);
console.log(total); // 30

export default total;

// 5.
function abc(param:string|number|string[]|number[]) : number|number[]{
    if(typeof param === 'string'){
        return Number(param);
    } else if(typeof param === 'number'){
        return param;
    } else if(typeof param === 'object' && Array.isArray(param)){
        let numberArr:number[] = [];
        for(let num of param){
            if(typeof num === 'string'){
                numberArr.push(Number(num));
            }else{
                numberArr.push(num);
            }
        }
        return numberArr;
    }else{
        const check:never = param;
        return check;
    }
}

// 6.
function multiplyAll(num:number, ...nums:number[]): number {
    let result = 1;
    for(let index of nums)
    result *= num[index];
    return result;
}
console.log(multiplyAll(2)); // 2
console.log(multiplyAll(2, 2)); // 4
console.log(multiplyAll(2, 2, 2)); // 8
console.log(multiplyAll(2, 2, 2, 2)); // 16
console.log(multiplyAll(2, 2, 2, 2, 2)); // 32
//...

// 7.
type Types = string|number|boolean;
function handleValue(value:Types) {
    if(typeof value === 'string'){
        console.log('문자열 입니다');
    }else if(typeof value === 'number'){
        console.log('숫자열 입니다');
    }else if(typeof value === 'boolean'){
        console.log('불린 입니다');
    }else{
        assertNever(value);
    }
}

function assertNever(value : never){
    throw new Error("에러입니다.")
}

// 8.
type FnType = ([first, ...rest]:[number, ...number[]]) => number[];
const fn:FnType  = ([first, ...rest]) => {
    for(let i = 0; i<rest.length; i++){
        rest[i] += first;
    }
    return rest;
}
//fn([]) // 컴파일에러
fn([1]); // []
fn([1,2]); // [3]
fn([1,2,3]); // [3,4]
fn([1,2,3,4]); // [3,4,5]

