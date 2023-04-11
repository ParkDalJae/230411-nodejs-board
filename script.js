const a = ["사과", "배", "귤", "감", "쥐", "닭"];
const b = ["사과", "딸기", "감", "귤", "복숭아"];
const c = a.length < b.length ? b.length : a.length;
//a와 b 배열이 있다. 이 둘의 length값을 비교 한 뒤 더 큰쪽을 반복문의 조건문 부분의 최대반복횟수로 지정하고, 더 작은쪽에 더 큰 쪽의 값을 넣는다면?
for (let i = 0; i < c; i++) {
  b.push(a[i]);
}
console.log(b);
