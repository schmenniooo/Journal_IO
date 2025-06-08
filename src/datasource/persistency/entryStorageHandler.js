
class StorageHandler {

    readEntries = () => {
        try {
            const data = localStorage.getItem("journalEntries");
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Failed to parse journal entries:", e);
            return [];
        }
    }

    writeEntries = (entries) => {
        try {
            localStorage.setItem("journalEntries", JSON.stringify(entries));
        } catch (e) {
            console.error("Failed to write journal entries:", e);
        }
    }
}

export default new StorageHandler();
