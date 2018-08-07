(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//this will send to API when button is clicked

// const addListener = () => {
//     document.querySelector(".btn--saveEntry")
//         .addEventListener("click", () => {
//             const entry = { }
//             entry.title = document.querySelector("#entryTitle").value
//             entry.content = document.querySelector("#entryContent").value
//             entry.date = document.querySelector("#entryDate").value
//             entry.id = document.querySelector("#entryId").value
//         })
// }

//  Purpose: Build the product form component


const buildFormTemplate = () => {
    return `
        <fieldset>
            <label for="entryTitle">Product title:</label>
            <input required type="text" id="entryTitle">
        </fieldset>
        <fieldset>
            <label for="entryContent">Deep thoughts:</label>
            <input required type="text" id="entryContent">
        </fieldset>
        <button class="btn btn--saveEntryButton">Save Journal Entry</button>
    `
}

//  </fieldset>
        // <fieldset>
        //     <label for="entryDate">Price:</label>
        //     <input required type="number" name="entryDate" id="entryDate">
        // </fieldset>

        //this would help with numbers//

module.exports = buildFormTemplate
},{}],2:[function(require,module,exports){
const buildFormTemplate = require("./JournalForm")

document.querySelector("#journalForm").innerHTML = buildFormTemplate()
},{"./JournalForm":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0pvdXJuYWxGb3JtLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL3RoaXMgd2lsbCBzZW5kIHRvIEFQSSB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG5cbi8vIGNvbnN0IGFkZExpc3RlbmVyID0gKCkgPT4ge1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1zYXZlRW50cnlcIilcbi8vICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IHsgfVxuLy8gICAgICAgICAgICAgZW50cnkudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWVcbi8vICAgICAgICAgICAgIGVudHJ5LmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5Q29udGVudFwiKS52YWx1ZVxuLy8gICAgICAgICAgICAgZW50cnkuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlEYXRlXCIpLnZhbHVlXG4vLyAgICAgICAgICAgICBlbnRyeS5pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlJZFwiKS52YWx1ZVxuLy8gICAgICAgICB9KVxuLy8gfVxuXG4vLyAgUHVycG9zZTogQnVpbGQgdGhlIHByb2R1Y3QgZm9ybSBjb21wb25lbnRcblxuXG5jb25zdCBidWlsZEZvcm1UZW1wbGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW50cnlUaXRsZVwiPlByb2R1Y3QgdGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwiZW50cnlUaXRsZVwiPlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW50cnlDb250ZW50XCI+RGVlcCB0aG91Z2h0czo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbnRyeUNvbnRlbnRcIj5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLXNhdmVFbnRyeUJ1dHRvblwiPlNhdmUgSm91cm5hbCBFbnRyeTwvYnV0dG9uPlxuICAgIGBcbn1cblxuLy8gIDwvZmllbGRzZXQ+XG4gICAgICAgIC8vIDxmaWVsZHNldD5cbiAgICAgICAgLy8gICAgIDxsYWJlbCBmb3I9XCJlbnRyeURhdGVcIj5QcmljZTo8L2xhYmVsPlxuICAgICAgICAvLyAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZW50cnlEYXRlXCIgaWQ9XCJlbnRyeURhdGVcIj5cbiAgICAgICAgLy8gPC9maWVsZHNldD5cblxuICAgICAgICAvL3RoaXMgd291bGQgaGVscCB3aXRoIG51bWJlcnMvL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkRm9ybVRlbXBsYXRlIiwiY29uc3QgYnVpbGRGb3JtVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9Kb3VybmFsRm9ybVwiKVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pvdXJuYWxGb3JtXCIpLmlubmVySFRNTCA9IGJ1aWxkRm9ybVRlbXBsYXRlKCkiXX0=
