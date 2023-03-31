/* 3번 문제 답안을 작성해주세요. */
function solution(n) {
  let x = 1;

  for (let i = 1; i <= 10; i++) {
    x *= i;
    if (x > n) {
      return i - 1;
    }
  }
}
