var button0 = foo2("div", "class", "container", "id", "contain");
var button01 = foo2("div", "class", "calculator", "id", "cal")
var input1 = foo1("input", "type", "text", "placeholder", "0", "id", "result")
var button1 = foo("button", "onclick", "Clear()", "id", "clear", "C");
var button2 = foo("button", "onclick", "del()", "id", "button2", "DEL");
var button3 = foo("button", "onclick", "display('%')", "id", "button3", "%");
var button4 = foo("button", "onclick", "display('*')", "id", "button4", "*");
var button5 = foo("button", "onclick", "display('7')", "id", "7", "7");
var button6 = foo("button", "onclick", "display('8')", "id", "8", "8");
var button7 = foo("button", "onclick", "display('9')", "id", "9", "9");
var button8 = foo("button", "onclick", "display('/')", "id", "button8", "/");
var button9 = foo("button", "onclick", "display('4')", "id", "4", "4");
var button10 = foo("button", "onclick", "display('5')", "id", "5", "5");
var button11 = foo("button", "onclick", "display('6')", "id", "6", "6");
var button12 = foo("button", "onclick", "display('-')", "id", "subtract", "-");
var button13 = foo("button", "onclick", "display('1')", "id", "1", "1");
var button14 = foo("button", "onclick", "display('2')", "id", "2", "2");
var button15 = foo("button", "onclick", "display('3')", "id", "3", "3");
var button16 = foo("button", "onclick", "display('+')", "id", "add", "+");
var button17 = foo("button", "onclick", "display('.')", "id", "button17", ".");
var button18 = foo("button", "onclick", "display('0')", "id", "button18", "0");
var button19 = foo("button", "onclick", "calculate()", "id", "equal", "=");

button01.append(input1, button1, button2, button3, button4, button5, button6,
    button7, button8, button9, button10, button11, button12, button13, button14, button15,
    button16, button17, button18, button19);
button0.append(button01);
document.body.append(button0);
function foo(tagname, attrname, attrvalue, atte, attw, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(atte, attw);
    ele.innerHTML = content;
    return ele;
}
function foo1(tagname, attrname, attrvalue, atte, arrw, att, ate) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(atte, arrw);
    ele.setAttribute(att, ate);
    return ele;
}
function foo2(tagname, attrname, attrvalue, atte, arrw) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(atte, arrw);
    return ele;
}
let output = document.getElementById("result");
function display(number) {
    output.value += number;
}
function calculate(number) {
    try {
        output.value = eval(output.value);
    }
    catch (err) {
        alert("Invalid operation")
    }
}
function Clear() {
    output.value = "";
}
function del() {
    output.value = output.value.slice(0, -1);
}