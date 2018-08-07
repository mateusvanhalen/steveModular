const buildFormTemplate = require("./JournalForm")
const saveJournalEntry = require("./DataManager")

document.querySelector("#journalForm").innerHTML = buildFormTemplate()

document.querySelector("saveEntryButton").addEventListener("click", () => {
    //get form field values
    // document.querySelector("#entryTitle").value
    // document.querySelector("#entryContent").value
    //Timestamp that mofo

    //create object from them

    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date.now()
    }

    //post to API

    //clear form

    //write to the DOM (put HTML representation to the DOM)



}