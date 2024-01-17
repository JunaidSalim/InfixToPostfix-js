# InfixToPostfix-js
This is repo for JavaScript program that will convert an Infix expression to Postfix expression.

You can check it live at
**Infix to Postfix Converter**
This JavaScript program converts infix expressions to postfix notation. It utilizes a stack-based approach to handle operators and parentheses.

**Approach**
**Input:** The user provides an infix expression (e.g., 3 + 4 * (2 - 1)).
**Tokenization:** The input expression is split into individual tokens (numbers, operators, and parentheses).
**Conversion to Postfix:**
Initialize an empty stack and an empty result array.
Iterate through each token in the infix expression.
If the token is an operand (number), add it to the result array.
If the token is an operator:
Pop operators from the stack and add them to the result until an operator with lower precedence is encountered or an opening parenthesis is at the top of the stack.
Push the current operator onto the stack.
If the token is an opening parenthesis, push it onto the stack.
If the token is a closing parenthesis:
Pop operators from the stack and add them to the result until an opening parenthesis is encountered.
Discard the opening parenthesis.
Output: The result contains the postfix expression.
