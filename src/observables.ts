import { timer, zip } from "rxjs";
import { map, take, skip } from "rxjs/operators";

const numbers = timer(0, 0).pipe(skip(1));

const fizzes = numbers.pipe(map(i => (i % 3 ? "" : "Fizz")));

const buzzes = numbers.pipe(map(i => (i % 5 ? "" : "Buzz")));

const fizzBuzzes = zip(fizzes, buzzes).pipe(map(([fizz, buzz]) => fizz + buzz));

const result = zip(numbers, fizzBuzzes).pipe(
  map(([number, fizzBuzz]) => fizzBuzz || number.toFixed())
);

result.pipe(take(100)).subscribe(console.log);
