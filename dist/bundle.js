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
//         //make array

//         const revSortedEntry = "http://localhost:8088/entries?_order=desc&_sort=date"
//         const sortedEntry = "http://localhost:8088/entries?_order=sort=date"



// // function renderProductList (productTypeId) {
// //     DataManager.getProducts()
// //         .then((products) => {
// //             const container = document.querySelector("#container")
// //             container.textContent = ""
// //             // Filter all products to the ones that have the correct type
// //             const filteredProducts = products.filter(product => {
// //                 return product.type === productTypeId
// //             })

// //             // Display only the products that are of the correct type
// //             filteredProducts.forEach(product => {
// //                 container.innerHTML += `<p>${product.name} $${product.price}</p>`
// //             })
// //         })
// // }

// module.exports = sortedEntry
// module.exports = revSortedEntry
},{}],3:[function(require,module,exports){
let journalEntry = (entry) => {
    return `<div>
                <h3>${entry.title}</h3>
                <h3>${entry.content}</h3>
                <h3>${entry.id}</h3>
                </div>

    `
}

module.exports = journalEntry;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
const FormManager = require("./JournalForm")
const dbCalls = require("./DataManager")
const sortedEntry = require("./EntryList")
const revSortedEntry = require("./EntryList")
const journalEntry = require("./JournalEntry")

document.querySelector("#journalForm").innerHTML = FormManager.renderEntryForm()
dbCalls.returnJournalEntry()
    .then(response => {
        response.forEach(post => {
            posts = journalEntry(post);
            document.querySelector("#journalEntrySpace").innerHTML += posts
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
},{"./DataManager":1,"./EntryList":2,"./JournalEntry":3,"./JournalForm":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9FbnRyeUxpc3QuanMiLCIuLi9zY3JpcHRzL0pvdXJuYWxFbnRyeS5qcyIsIi4uL3NjcmlwdHMvSm91cm5hbEZvcm0uanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qXG4gICAgUHVycG9zZTogU3RvcmUgYW5kIHJldHJpZXZlIGRhdGEgZnJvbSByZW1vdGUgQVBJXG4qL1xuXG4vL1RISVMgSVMgR09PRCBmb3IgUG9zdCBtZXRob2QgLSBpdCBzZW5kcyB0byBKU09OIHNlcnZlciA4MDg4XG5cbmNvbnN0IGRiQ2FsbHMgPSB7fTtcblxuZGJDYWxscy5zYXZlSm91cm5hbEVudHJ5ID0gKGVudHJ5KSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VudHJpZXNcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbnRyeSlcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbn1cblxuZGJDYWxscy5yZXR1cm5Kb3VybmFsRW50cnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VudHJpZXNcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG59XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkYkNhbGxzIiwiLy8gICAgICAgICAvL21ha2UgYXJyYXlcblxuLy8gICAgICAgICBjb25zdCByZXZTb3J0ZWRFbnRyeSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VudHJpZXM/X29yZGVyPWRlc2MmX3NvcnQ9ZGF0ZVwiXG4vLyAgICAgICAgIGNvbnN0IHNvcnRlZEVudHJ5ID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZW50cmllcz9fb3JkZXI9c29ydD1kYXRlXCJcblxuXG5cbi8vIC8vIGZ1bmN0aW9uIHJlbmRlclByb2R1Y3RMaXN0IChwcm9kdWN0VHlwZUlkKSB7XG4vLyAvLyAgICAgRGF0YU1hbmFnZXIuZ2V0UHJvZHVjdHMoKVxuLy8gLy8gICAgICAgICAudGhlbigocHJvZHVjdHMpID0+IHtcbi8vIC8vICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpXG4vLyAvLyAgICAgICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiXG4vLyAvLyAgICAgICAgICAgICAvLyBGaWx0ZXIgYWxsIHByb2R1Y3RzIHRvIHRoZSBvbmVzIHRoYXQgaGF2ZSB0aGUgY29ycmVjdCB0eXBlXG4vLyAvLyAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4ge1xuLy8gLy8gICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LnR5cGUgPT09IHByb2R1Y3RUeXBlSWRcbi8vIC8vICAgICAgICAgICAgIH0pXG5cbi8vIC8vICAgICAgICAgICAgIC8vIERpc3BsYXkgb25seSB0aGUgcHJvZHVjdHMgdGhhdCBhcmUgb2YgdGhlIGNvcnJlY3QgdHlwZVxuLy8gLy8gICAgICAgICAgICAgZmlsdGVyZWRQcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxwPiR7cHJvZHVjdC5uYW1lfSAkJHtwcm9kdWN0LnByaWNlfTwvcD5gXG4vLyAvLyAgICAgICAgICAgICB9KVxuLy8gLy8gICAgICAgICB9KVxuLy8gLy8gfVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHNvcnRlZEVudHJ5XG4vLyBtb2R1bGUuZXhwb3J0cyA9IHJldlNvcnRlZEVudHJ5IiwibGV0IGpvdXJuYWxFbnRyeSA9IChlbnRyeSkgPT4ge1xuICAgIHJldHVybiBgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+JHtlbnRyeS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIDxoMz4ke2VudHJ5LmNvbnRlbnR9PC9oMz5cbiAgICAgICAgICAgICAgICA8aDM+JHtlbnRyeS5pZH08L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgYFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGpvdXJuYWxFbnRyeTsiLCIvL3RoaXMgd2lsbCBzZW5kIHRvIEFQSSB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG5cbi8vIGNvbnN0IGFkZExpc3RlbmVyID0gKCkgPT4ge1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1zYXZlRW50cnlcIilcbi8vICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IHsgfVxuLy8gICAgICAgICAgICAgZW50cnkudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWVcbi8vICAgICAgICAgICAgIGVudHJ5LmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5Q29udGVudFwiKS52YWx1ZVxuLy8gICAgICAgICAgICAgZW50cnkuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlEYXRlXCIpLnZhbHVlXG4vLyAgICAgICAgICAgICBlbnRyeS5pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlJZFwiKS52YWx1ZVxuLy8gICAgICAgICB9KVxuLy8gfVxuXG4vLyAgUHVycG9zZTogQnVpbGQgdGhlIHByb2R1Y3QgZm9ybSBjb21wb25lbnQuXG5cbi8vT2JqZWN0LmNyZWF0ZSB3aWxsIG1ha2UgeW91IGFuIG9iamVjdCB3aGljaCBnZXRzIHN0b3JlZCBpbiBGb3JtIE1hbmFnZXIgLSAtIC0gQUxTTyBvYmplY3QuY3JlYXRlIGxldHMgdXMgY3JlYXRlIHRoZSBvYmplY3QgYW5kIGhhcyBzZWN1cml0eSB0byBoYXZlIHBlb3BsZSBub3QgbWFuaXB1bGF0ZSBvYmplY3QuXG5cbmNvbnN0IEZvcm1NYW5hZ2VyID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgY2xlYXJGb3JtOiB7XG4gICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWUgPSBcIiBcIlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeUNvbnRlbnRcIikudmFsdWUgPSBcIiBcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL2VudHJ5IGRhdGEgZm9ybVxuICAgIHJlbmRlckVudHJ5Rm9ybToge1xuICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW50cnlUaXRsZVwiPlByb2R1Y3QgdGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cImVudHJ5VGl0bGVcIj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVudHJ5Q29udGVudFwiPkRlZXAgdGhvdWdodHM6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cImVudHJ5Q29udGVudFwiPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1zYXZlRW50cnlCdXR0b25cIiBpZD1cInNhdmVFbnRyeUJ1dHRvblwiPlNhdmUgSm91cm5hbCBFbnRyeTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLWRlbGV0ZUVudHJ5QnV0dG9uXCIgaWQ9XCJkZWxldGVFbnRyeUJ1dHRvblwiPkRlbGV0ZSBMYXN0IEVudHJ5PC9idXR0b24+XG4gICAgICAgIGBcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbi8vICA8L2ZpZWxkc2V0PlxuICAgICAgICAvLyA8ZmllbGRzZXQ+XG4gICAgICAgIC8vICAgICA8bGFiZWwgZm9yPVwiZW50cnlEYXRlXCI+UHJpY2U6PC9sYWJlbD5cbiAgICAgICAgLy8gICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImVudHJ5RGF0ZVwiIGlkPVwiZW50cnlEYXRlXCI+XG4gICAgICAgIC8vIDwvZmllbGRzZXQ+XG5cbiAgICAgICAgLy90aGlzIHdvdWxkIGhlbHAgd2l0aCBudW1iZXJzLy9cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtTWFuYWdlciIsImNvbnN0IEZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vSm91cm5hbEZvcm1cIilcbmNvbnN0IGRiQ2FsbHMgPSByZXF1aXJlKFwiLi9EYXRhTWFuYWdlclwiKVxuY29uc3Qgc29ydGVkRW50cnkgPSByZXF1aXJlKFwiLi9FbnRyeUxpc3RcIilcbmNvbnN0IHJldlNvcnRlZEVudHJ5ID0gcmVxdWlyZShcIi4vRW50cnlMaXN0XCIpXG5jb25zdCBqb3VybmFsRW50cnkgPSByZXF1aXJlKFwiLi9Kb3VybmFsRW50cnlcIilcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqb3VybmFsRm9ybVwiKS5pbm5lckhUTUwgPSBGb3JtTWFuYWdlci5yZW5kZXJFbnRyeUZvcm0oKVxuZGJDYWxscy5yZXR1cm5Kb3VybmFsRW50cnkoKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChwb3N0ID0+IHtcbiAgICAgICAgICAgIHBvc3RzID0gam91cm5hbEVudHJ5KHBvc3QpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqb3VybmFsRW50cnlTcGFjZVwiKS5pbm5lckhUTUwgKz0gcG9zdHNcbiAgICAgICAgfSlcbiAgICB9KVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlRW50cnlCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvL2dldCBmb3JtIGZpZWxkIHZhbHVlcywgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlUaXRsZVwiKS52YWx1ZSAsZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeUNvbnRlbnRcIikudmFsdWUvL1RpbWVzdGFtcCBpdC8vY3JlYXRlIG9iamVjdCBmcm9tIHRoZW1cbiAgICBjb25zdCBuZXdFbnRyeSA9IHtcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlUaXRsZVwiKS52YWx1ZSxcbiAgICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeUNvbnRlbnRcIikudmFsdWUsXG4gICAgICAgIGRhdGU6IERhdGUubm93KClcbiAgICB9XG4gICAgLy9wb3N0aW5nIHRvIEFQSSBoZXJlXG4gICAgZGJDYWxscy5zYXZlSm91cm5hbEVudHJ5KG5ld0VudHJ5KS50aGVuKCgpID0+IHtcbiAgICAgICAgRm9ybU1hbmFnZXIuY2xlYXJGb3JtKClcbiAgICB9KVxuLy93cml0ZSB0byBET00gaGVyZSwgcHV0IEhUTUwgcmVwcmVzZW50YXRpb24gb24gdGhlIERPTVxuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pvdXJuYWxFbnRyeVNwYWNlXCIpLmlubmVySFRNTCA9IGVudHJpZXMuZGF0YSgpXG4vLyAgICAgZmV0Y2ggcmV0dXJuIHNvcnRlZEVudHJ5LnRoZW5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZUVudHJ5QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgc29ydGVkRW50cnkuc2hpZnQgPSB7XG5cbn0pIl19
