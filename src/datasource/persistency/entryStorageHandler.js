
class StorageHandler {

    readEntries = () => {
        return localStorage.getItem("journalEntries");
    }

    writeEntries = (entries) => {
        localStorage.setItem("journalEntries", JSON.stringify(entries));
    }
}

export default new StorageHandler();
