// code your solution here
// saturdayFun - function declaration with default parameter
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// mondayWork - function expression with default parameter
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// wrapAdjective - returns a function (closure) with default parameter for flair and inner function parameter default
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}