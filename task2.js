/* 2번 문제 답안을 작성해주세요. */
function solution(num_list) {
  let x = 0;
  let y = 0;
  let answer = [];

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) x = x + 1;
    else y = y + 1;
  }
  answer = [x, y];
  return answer;
}
