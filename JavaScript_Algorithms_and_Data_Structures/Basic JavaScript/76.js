// Selecting from Many Options with Switch Statements

// case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

//   Write a switch statement which tests val and sets answer for the following conditions:
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta

function caseInSwitch(val) {
    let answer = "";
    switch (val){
      case 1:
        answer = "alpha";
        break;
       case 2:
        answer = "beta";
        break;
       case 3:
        answer = "gamma";
        break;
       case 4:
        answer = "delta";
        break;
    }
  
    return answer;
  }
  
  console.log(caseInSwitch(3));