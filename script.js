document.addEventListener('DOMContentLoaded', function () {
  var infixInput = document.getElementById('infixInput');
  var postfixOutput = document.getElementById('postfix');
  var valueOutput = document.getElementById('value');
  var submitButton = document.querySelector('button');

  function checkPrecedence(c) {
    if (c == "^") {
      return 3;
    } else if (c == "/" || c == "*") {
      return 2;
    } else if (c == "+" || c == "-") {
      return 1;
    } else {
      return -1;
    }
  }

  function operator(c) {
    if (
      c == "+" ||
      c == "-" ||
      c == "/" ||
      c == "*" ||
      c == "^" ||
      c == "(" ||
      c == ")"
    ) {
      return 1;
    }
    return 0;
  }

  function infixToPostFix(s) {
    let infix = [];
    let tempstr = "";
    for (let i = 0; i < s.length; i++) {
      if (operator(s[i]) == 0) {
        tempstr += s[i];
      } else {
        if (tempstr !== "") {
          infix.push(tempstr);
        }
        infix.push(s[i]);
        tempstr = "";
      }
    }
    if (tempstr != "") {
      infix.push(tempstr);
      tempstr = "";
    }
    for (let i = 0; i < infix.length; i++) {
      console.log(infix[i]);
    }
    let stack = [];
    let result = [];
    for (let i = 0; i < infix.length; i++) {
      if (operator(infix[i]) == 0) {
        result.push(infix[i]);
      } else if (infix[i] == "(") {
        stack.push(infix[i]);
      } else if (infix[i] == ")") {
        while (stack.length != 0 && stack[stack.length - 1] != '(') {
          let temp = stack.pop();
          result.push(temp);
        }
        if (stack.length != 0) {
          stack.pop();
        }
      } else {
        while (
          stack.length != 0 &&
          checkPrecedence(stack[stack.length - 1]) >= checkPrecedence(infix[i])
        ) {
          let temp = stack.pop();
          result.push(temp);
        }
        stack.push(infix[i]);
      }
    }
    while (stack.length != 0) {
      let temp = stack.pop();
      result.push(temp);
    }
    return result;
  }

  function evaluate_Postfix(postfix) {
    let stack = [];
    for (let i = 0; i < postfix.length; i++) {
      if (operator(postfix[i]) == 0) {
        stack.push(postfix[i] - '0');
      }
      else {
        let operand2 = stack.pop();
        let operand1 = stack.pop();
        switch (postfix[i]) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            stack.push(operand1 / operand2);
            break;
          case '^':
            stack.push(Math.pow(operand1, operand2));
            break;
        }
      }
    }
    return stack[0];
  }


  submitButton.addEventListener('click', function () {
    var infixExpression = infixInput.value;

    var postfixExpression = infixToPostFix(infixExpression);
    var resultValue = evaluate_Postfix(postfixExpression);
    let PostFix = "";
    for (let i = 0; i < postfixExpression.length; i++) {
      PostFix += postfixExpression[i];

    }
    postfixOutput.textContent = 'Postfix Expression: ' + PostFix;
    valueOutput.textContent = 'Value: ' + resultValue;
  });
});
