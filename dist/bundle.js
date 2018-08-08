(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
    Purpose: Store and retrieve data from remote API
*/

//THIS IS GOOD!

const saveJournalEntry = (entry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())
}

module.exports = saveJournalEntry
},{}],2:[function(require,module,exports){
        //make array

        const revSortedEntry = "http://localhost:8088/entries?_order=desc&_sort=date"
        const sortedEntry = "http://localhost:8088/entries?_order=sort=date"



// function renderProductList (productTypeId) {
//     DataManager.getProducts()
//         .then((products) => {
//             const container = document.querySelector("#container")
//             container.textContent = ""
//             // Filter all products to the ones that have the correct type
//             const filteredProducts = products.filter(product => {
//                 return product.type === productTypeId
//             })

//             // Display only the products that are of the correct type
//             filteredProducts.forEach(product => {
//                 container.innerHTML += `<p>${product.name} $${product.price}</p>`
//             })
//         })
// }

module.exports = sortedEntry
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
const saveJournalEntry = require("./DataManager")
const sortedEntry = require("./EntryList")
const revSortedEntry = require("./EntryList")

document.querySelector("#journalForm").innerHTML = FormManager.renderEntryForm()
document.querySelector("#saveEntryButton").addEventListener("click", () => {
    //get form field values
    // document.querySelector("#entryTitle").value
    // document.querySelector("#entryContent").value
    //Timestamp it
    //create object from them
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date.now()
    }
    //post to API
    saveJournalEntry(newEntry).then(() => {
        FormManager.clearForm()
        //clear form
    })
    document.querySelector("#journalEntrySpace").innerHTML += `<p>${sortedEntry}`
    document.querySelector("#journalEntrySpace").innerHTML += `<p>${newEntry.title}, ${newEntry.content}</p>`
    document.querySelector("#journalEntrySpace").innerHTML = `<p>${sortedEntry}</p>`

    //write to the DOM (put HTML representation to the DOM)
})

document.querySelector("#saveEntryButton").addEventListener("click", () => {
    return sortedEntry.shift
})
},{"./DataManager":1,"./EntryList":2,"./JournalForm":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9FbnRyeUxpc3QuanMiLCIuLi9zY3JpcHRzL0pvdXJuYWxGb3JtLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLypcbiAgICBQdXJwb3NlOiBTdG9yZSBhbmQgcmV0cmlldmUgZGF0YSBmcm9tIHJlbW90ZSBBUElcbiovXG5cbi8vVEhJUyBJUyBHT09EIVxuXG5jb25zdCBzYXZlSm91cm5hbEVudHJ5ID0gKGVudHJ5KSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VudHJpZXNcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbnRyeSlcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzYXZlSm91cm5hbEVudHJ5IiwiICAgICAgICAvL21ha2UgYXJyYXlcblxuICAgICAgICBjb25zdCByZXZTb3J0ZWRFbnRyeSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VudHJpZXM/X29yZGVyPWRlc2MmX3NvcnQ9ZGF0ZVwiXG4gICAgICAgIGNvbnN0IHNvcnRlZEVudHJ5ID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZW50cmllcz9fb3JkZXI9c29ydD1kYXRlXCJcblxuXG5cbi8vIGZ1bmN0aW9uIHJlbmRlclByb2R1Y3RMaXN0IChwcm9kdWN0VHlwZUlkKSB7XG4vLyAgICAgRGF0YU1hbmFnZXIuZ2V0UHJvZHVjdHMoKVxuLy8gICAgICAgICAudGhlbigocHJvZHVjdHMpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpXG4vLyAgICAgICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiXG4vLyAgICAgICAgICAgICAvLyBGaWx0ZXIgYWxsIHByb2R1Y3RzIHRvIHRoZSBvbmVzIHRoYXQgaGF2ZSB0aGUgY29ycmVjdCB0eXBlXG4vLyAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LnR5cGUgPT09IHByb2R1Y3RUeXBlSWRcbi8vICAgICAgICAgICAgIH0pXG5cbi8vICAgICAgICAgICAgIC8vIERpc3BsYXkgb25seSB0aGUgcHJvZHVjdHMgdGhhdCBhcmUgb2YgdGhlIGNvcnJlY3QgdHlwZVxuLy8gICAgICAgICAgICAgZmlsdGVyZWRQcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxwPiR7cHJvZHVjdC5uYW1lfSAkJHtwcm9kdWN0LnByaWNlfTwvcD5gXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9KVxuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNvcnRlZEVudHJ5IiwiLy90aGlzIHdpbGwgc2VuZCB0byBBUEkgd2hlbiBidXR0b24gaXMgY2xpY2tlZFxuXG4vLyBjb25zdCBhZGRMaXN0ZW5lciA9ICgpID0+IHtcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0tc2F2ZUVudHJ5XCIpXG4vLyAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgZW50cnkgPSB7IH1cbi8vICAgICAgICAgICAgIGVudHJ5LnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeVRpdGxlXCIpLnZhbHVlXG4vLyAgICAgICAgICAgICBlbnRyeS5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeUNvbnRlbnRcIikudmFsdWVcbi8vICAgICAgICAgICAgIGVudHJ5LmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5RGF0ZVwiKS52YWx1ZVxuLy8gICAgICAgICAgICAgZW50cnkuaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5SWRcIikudmFsdWVcbi8vICAgICAgICAgfSlcbi8vIH1cblxuLy8gIFB1cnBvc2U6IEJ1aWxkIHRoZSBwcm9kdWN0IGZvcm0gY29tcG9uZW50LlxuXG4vL09iamVjdC5jcmVhdGUgd2lsbCBtYWtlIHlvdSBhbiBvYmplY3Qgd2hpY2ggZ2V0cyBzdG9yZWQgaW4gRm9ybSBNYW5hZ2VyIC0gLSAtIEFMU08gb2JqZWN0LmNyZWF0ZSBsZXRzIHVzIGNyZWF0ZSB0aGUgb2JqZWN0IGFuZCBoYXMgc2VjdXJpdHkgdG8gaGF2ZSBwZW9wbGUgbm90IG1hbmlwdWxhdGUgb2JqZWN0LlxuXG5jb25zdCBGb3JtTWFuYWdlciA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGNsZWFyRm9ybToge1xuICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeVRpdGxlXCIpLnZhbHVlID0gXCIgXCJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlDb250ZW50XCIpLnZhbHVlID0gXCIgXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyRW50cnlGb3JtOiB7XG4gICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbnRyeVRpdGxlXCI+UHJvZHVjdCB0aXRsZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwiZW50cnlUaXRsZVwiPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW50cnlDb250ZW50XCI+RGVlcCB0aG91Z2h0czo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwiZW50cnlDb250ZW50XCI+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLXNhdmVFbnRyeUJ1dHRvblwiIGlkPVwic2F2ZUVudHJ5QnV0dG9uXCI+U2F2ZSBKb3VybmFsIEVudHJ5PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0tZGVsZXRlRW50cnlCdXR0b25cIiBpZD1cImRlbGV0ZUVudHJ5QnV0dG9uXCI+RGVsZXRlIExhc3QgRW50cnk8L2J1dHRvbj5cbiAgICAgICAgYFxuICAgICAgICB9XG4gICAgfVxufSlcblxuLy8gIDwvZmllbGRzZXQ+XG4gICAgICAgIC8vIDxmaWVsZHNldD5cbiAgICAgICAgLy8gICAgIDxsYWJlbCBmb3I9XCJlbnRyeURhdGVcIj5QcmljZTo8L2xhYmVsPlxuICAgICAgICAvLyAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZW50cnlEYXRlXCIgaWQ9XCJlbnRyeURhdGVcIj5cbiAgICAgICAgLy8gPC9maWVsZHNldD5cblxuICAgICAgICAvL3RoaXMgd291bGQgaGVscCB3aXRoIG51bWJlcnMvL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1NYW5hZ2VyIiwiY29uc3QgRm9ybU1hbmFnZXIgPSByZXF1aXJlKFwiLi9Kb3VybmFsRm9ybVwiKVxuY29uc3Qgc2F2ZUpvdXJuYWxFbnRyeSA9IHJlcXVpcmUoXCIuL0RhdGFNYW5hZ2VyXCIpXG5jb25zdCBzb3J0ZWRFbnRyeSA9IHJlcXVpcmUoXCIuL0VudHJ5TGlzdFwiKVxuY29uc3QgcmV2U29ydGVkRW50cnkgPSByZXF1aXJlKFwiLi9FbnRyeUxpc3RcIilcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqb3VybmFsRm9ybVwiKS5pbm5lckhUTUwgPSBGb3JtTWFuYWdlci5yZW5kZXJFbnRyeUZvcm0oKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlRW50cnlCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvL2dldCBmb3JtIGZpZWxkIHZhbHVlc1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlUaXRsZVwiKS52YWx1ZVxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlDb250ZW50XCIpLnZhbHVlXG4gICAgLy9UaW1lc3RhbXAgaXRcbiAgICAvL2NyZWF0ZSBvYmplY3QgZnJvbSB0aGVtXG4gICAgY29uc3QgbmV3RW50cnkgPSB7XG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWUsXG4gICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlDb250ZW50XCIpLnZhbHVlLFxuICAgICAgICBkYXRlOiBEYXRlLm5vdygpXG4gICAgfVxuICAgIC8vcG9zdCB0byBBUElcbiAgICBzYXZlSm91cm5hbEVudHJ5KG5ld0VudHJ5KS50aGVuKCgpID0+IHtcbiAgICAgICAgRm9ybU1hbmFnZXIuY2xlYXJGb3JtKClcbiAgICAgICAgLy9jbGVhciBmb3JtXG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pvdXJuYWxFbnRyeVNwYWNlXCIpLmlubmVySFRNTCArPSBgPHA+JHtzb3J0ZWRFbnRyeX1gXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqb3VybmFsRW50cnlTcGFjZVwiKS5pbm5lckhUTUwgKz0gYDxwPiR7bmV3RW50cnkudGl0bGV9LCAke25ld0VudHJ5LmNvbnRlbnR9PC9wPmBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pvdXJuYWxFbnRyeVNwYWNlXCIpLmlubmVySFRNTCA9IGA8cD4ke3NvcnRlZEVudHJ5fTwvcD5gXG5cbiAgICAvL3dyaXRlIHRvIHRoZSBET00gKHB1dCBIVE1MIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBET00pXG59KVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVFbnRyeUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJldHVybiBzb3J0ZWRFbnRyeS5zaGlmdFxufSkiXX0=
