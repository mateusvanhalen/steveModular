(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
    Purpose: Store and retrieve data from remote API
*/

//THIS IS GOOD for Post method - it sends to JSON server 8088

const dbCalls = {};

dbCalls.saveJournalEntry = (entry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())
}

dbCalls.returnJournalEntry = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
}
    module.exports = dbCalls
},{}],2:[function(require,module,exports){
let journalEntry = (entry) => {
    return `<div id="journalEntrySpace">
                <h3>${entry.title}</h3>
                <h2>${entry.content}</h2>
                </div>

    `
}

module.exports = journalEntry;
},{}],3:[function(require,module,exports){
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

//  Purpose: Build the product form component.

//Object.create will make you an object which gets stored in Form Manager - - - ALSO object.create lets us create the object and has security to have people not manipulate object.

const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = " "
            document.querySelector("#entryContent").value = " "
        }
    },
    //entry data form
    renderEntryForm: {
        value: () => {
            return `
            <fieldset>
                <label for="entryTitle">Product title:</label>
                <input required type="text" id="entryTitle">
            </fieldset>
            <fieldset>
                <label for="entryContent">Deep thoughts:</label>
                <input required type="text" id="entryContent">
            </fieldset>
            <button class="btn btn--saveEntryButton" id="saveEntryButton">Save Journal Entry</button>
            <button class="btn btn--deleteEntryButton" id="deleteEntryButton">Delete Last Entry</button>
        `
        }
    }
})

//  </fieldset>
        // <fieldset>
        //     <label for="entryDate">Price:</label>
        //     <input required type="number" name="entryDate" id="entryDate">
        // </fieldset>

        //this would help with numbers//

module.exports = FormManager
},{}],4:[function(require,module,exports){
const FormManager = require("./JournalForm")
const dbCalls = require("./DataManager")
// const sortedEntry = require("./EntryList")
// const revSortedEntry = require("./EntryList")
const journalEntry = require("./JournalEntry")

//this is where i send the data to the DOM.
document.querySelector("#journalForm").innerHTML = FormManager.renderEntryForm()
dbCalls.returnJournalEntry()
    .then(response => {
        response.forEach(post => {
            posts = journalEntry(post);
            document.querySelector("#journalEntrySpace").innerHTML += posts

            // const filteredPosts = posts.sort(post => {
            //     return entry.ID === entryTypeID
        })
    })
document.querySelector("#saveEntryButton").addEventListener("click", () => {
    //get form field values,  document.querySelector("#entryTitle").value ,document.querySelector("#entryContent").value//Timestamp it//create object from them
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date.now()
    }
    //posting to API here
    dbCalls.saveJournalEntry(newEntry).then(() => {
        FormManager.clearForm()
    })
//write to DOM here, put HTML representation on the DOM

// document.querySelector("#journalEntrySpace").innerHTML = entries.data()
//     fetch return sortedEntry.then
// document.querySelector("#saveEntryButton").addEventListener("click", () => {
//     sortedEntry.shift = {

})
},{"./DataManager":1,"./JournalEntry":2,"./JournalForm":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9Kb3VybmFsRW50cnkuanMiLCIuLi9zY3JpcHRzL0pvdXJuYWxGb3JtLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKlxuICAgIFB1cnBvc2U6IFN0b3JlIGFuZCByZXRyaWV2ZSBkYXRhIGZyb20gcmVtb3RlIEFQSVxuKi9cblxuLy9USElTIElTIEdPT0QgZm9yIFBvc3QgbWV0aG9kIC0gaXQgc2VuZHMgdG8gSlNPTiBzZXJ2ZXIgODA4OFxuXG5jb25zdCBkYkNhbGxzID0ge307XG5cbmRiQ2FsbHMuc2F2ZUpvdXJuYWxFbnRyeSA9IChlbnRyeSkgPT4ge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbnRyaWVzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW50cnkpXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG59XG5cbmRiQ2FsbHMucmV0dXJuSm91cm5hbEVudHJ5ID0gKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbnRyaWVzXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxufVxuICAgIG1vZHVsZS5leHBvcnRzID0gZGJDYWxscyIsImxldCBqb3VybmFsRW50cnkgPSAoZW50cnkpID0+IHtcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJqb3VybmFsRW50cnlTcGFjZVwiPlxuICAgICAgICAgICAgICAgIDxoMz4ke2VudHJ5LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPGgyPiR7ZW50cnkuY29udGVudH08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgYFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGpvdXJuYWxFbnRyeTsiLCIvL3RoaXMgd2lsbCBzZW5kIHRvIEFQSSB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG5cbi8vIGNvbnN0IGFkZExpc3RlbmVyID0gKCkgPT4ge1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1zYXZlRW50cnlcIilcbi8vICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IHsgfVxuLy8gICAgICAgICAgICAgZW50cnkudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWVcbi8vICAgICAgICAgICAgIGVudHJ5LmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5Q29udGVudFwiKS52YWx1ZVxuLy8gICAgICAgICAgICAgZW50cnkuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlEYXRlXCIpLnZhbHVlXG4vLyAgICAgICAgICAgICBlbnRyeS5pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlJZFwiKS52YWx1ZVxuLy8gICAgICAgICB9KVxuLy8gfVxuXG4vLyAgUHVycG9zZTogQnVpbGQgdGhlIHByb2R1Y3QgZm9ybSBjb21wb25lbnQuXG5cbi8vT2JqZWN0LmNyZWF0ZSB3aWxsIG1ha2UgeW91IGFuIG9iamVjdCB3aGljaCBnZXRzIHN0b3JlZCBpbiBGb3JtIE1hbmFnZXIgLSAtIC0gQUxTTyBvYmplY3QuY3JlYXRlIGxldHMgdXMgY3JlYXRlIHRoZSBvYmplY3QgYW5kIGhhcyBzZWN1cml0eSB0byBoYXZlIHBlb3BsZSBub3QgbWFuaXB1bGF0ZSBvYmplY3QuXG5cbmNvbnN0IEZvcm1NYW5hZ2VyID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgY2xlYXJGb3JtOiB7XG4gICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWUgPSBcIiBcIlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeUNvbnRlbnRcIikudmFsdWUgPSBcIiBcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL2VudHJ5IGRhdGEgZm9ybVxuICAgIHJlbmRlckVudHJ5Rm9ybToge1xuICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW50cnlUaXRsZVwiPlByb2R1Y3QgdGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cImVudHJ5VGl0bGVcIj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVudHJ5Q29udGVudFwiPkRlZXAgdGhvdWdodHM6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cImVudHJ5Q29udGVudFwiPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1zYXZlRW50cnlCdXR0b25cIiBpZD1cInNhdmVFbnRyeUJ1dHRvblwiPlNhdmUgSm91cm5hbCBFbnRyeTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLWRlbGV0ZUVudHJ5QnV0dG9uXCIgaWQ9XCJkZWxldGVFbnRyeUJ1dHRvblwiPkRlbGV0ZSBMYXN0IEVudHJ5PC9idXR0b24+XG4gICAgICAgIGBcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbi8vICA8L2ZpZWxkc2V0PlxuICAgICAgICAvLyA8ZmllbGRzZXQ+XG4gICAgICAgIC8vICAgICA8bGFiZWwgZm9yPVwiZW50cnlEYXRlXCI+UHJpY2U6PC9sYWJlbD5cbiAgICAgICAgLy8gICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImVudHJ5RGF0ZVwiIGlkPVwiZW50cnlEYXRlXCI+XG4gICAgICAgIC8vIDwvZmllbGRzZXQ+XG5cbiAgICAgICAgLy90aGlzIHdvdWxkIGhlbHAgd2l0aCBudW1iZXJzLy9cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtTWFuYWdlciIsImNvbnN0IEZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vSm91cm5hbEZvcm1cIilcbmNvbnN0IGRiQ2FsbHMgPSByZXF1aXJlKFwiLi9EYXRhTWFuYWdlclwiKVxuLy8gY29uc3Qgc29ydGVkRW50cnkgPSByZXF1aXJlKFwiLi9FbnRyeUxpc3RcIilcbi8vIGNvbnN0IHJldlNvcnRlZEVudHJ5ID0gcmVxdWlyZShcIi4vRW50cnlMaXN0XCIpXG5jb25zdCBqb3VybmFsRW50cnkgPSByZXF1aXJlKFwiLi9Kb3VybmFsRW50cnlcIilcblxuLy90aGlzIGlzIHdoZXJlIGkgc2VuZCB0aGUgZGF0YSB0byB0aGUgRE9NLlxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqb3VybmFsRm9ybVwiKS5pbm5lckhUTUwgPSBGb3JtTWFuYWdlci5yZW5kZXJFbnRyeUZvcm0oKVxuZGJDYWxscy5yZXR1cm5Kb3VybmFsRW50cnkoKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChwb3N0ID0+IHtcbiAgICAgICAgICAgIHBvc3RzID0gam91cm5hbEVudHJ5KHBvc3QpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqb3VybmFsRW50cnlTcGFjZVwiKS5pbm5lckhUTUwgKz0gcG9zdHNcblxuICAgICAgICAgICAgLy8gY29uc3QgZmlsdGVyZWRQb3N0cyA9IHBvc3RzLnNvcnQocG9zdCA9PiB7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIGVudHJ5LklEID09PSBlbnRyeVR5cGVJRFxuICAgICAgICB9KVxuICAgIH0pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVFbnRyeUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vZ2V0IGZvcm0gZmllbGQgdmFsdWVzLCAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeVRpdGxlXCIpLnZhbHVlICxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5Q29udGVudFwiKS52YWx1ZS8vVGltZXN0YW1wIGl0Ly9jcmVhdGUgb2JqZWN0IGZyb20gdGhlbVxuICAgIGNvbnN0IG5ld0VudHJ5ID0ge1xuICAgICAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeVRpdGxlXCIpLnZhbHVlLFxuICAgICAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5Q29udGVudFwiKS52YWx1ZSxcbiAgICAgICAgZGF0ZTogRGF0ZS5ub3coKVxuICAgIH1cbiAgICAvL3Bvc3RpbmcgdG8gQVBJIGhlcmVcbiAgICBkYkNhbGxzLnNhdmVKb3VybmFsRW50cnkobmV3RW50cnkpLnRoZW4oKCkgPT4ge1xuICAgICAgICBGb3JtTWFuYWdlci5jbGVhckZvcm0oKVxuICAgIH0pXG4vL3dyaXRlIHRvIERPTSBoZXJlLCBwdXQgSFRNTCByZXByZXNlbnRhdGlvbiBvbiB0aGUgRE9NXG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjam91cm5hbEVudHJ5U3BhY2VcIikuaW5uZXJIVE1MID0gZW50cmllcy5kYXRhKClcbi8vICAgICBmZXRjaCByZXR1cm4gc29ydGVkRW50cnkudGhlblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlRW50cnlCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICBzb3J0ZWRFbnRyeS5zaGlmdCA9IHtcblxufSkiXX0=
