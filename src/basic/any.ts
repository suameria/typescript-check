export default function anySample() {
  let name: any = "ameria";
  console.log("any sample 1:", typeof name, name);

  // 代入できてしまい、nameの取り扱いが怪しくなる
  name = 123;
  console.log("any sample 1:", typeof name, name);
}
