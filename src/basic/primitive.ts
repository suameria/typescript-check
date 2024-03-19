export default function primitiveSample() {
  let name: string = "ameria";
  // name = 123;
  console.log("primitive sample 1", typeof name, name);

  let age: number = 33;
  // age = "abc";
  console.log("primitive sample 2", typeof age, age);

  let isSingle: boolean = true;
  // isSingle = 23;
  console.log("primitive sample 3", typeof isSingle, isSingle);

  const isOver20: boolean = age >= 20;
  console.log("primitive sample 4", typeof isOver20, isOver20);
}
