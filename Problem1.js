var problem1 = function(){
  var answer = 0;

  for (num = 0; num < 1000; num++)
  {
    if(num % 3 === 0)
    {
      answer += num;
    }
    else if(num % 5 === 0)
    {
      answer += num;
    }
  }

  return answer;
};

console.log(problem1());
