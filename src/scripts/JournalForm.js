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
const FormManager = Object.create(null, {
    clearFrom: {
        value: () => {
            document.querySelector("#entryTitle").value = " "
            document.querySelector("#entryContent").value = " "
        }
    },
    renderEntryForm: {
        value: () =>
    }
})


const clearForm = () => {

}

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