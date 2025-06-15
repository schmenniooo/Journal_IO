
class StorageHandler {

    readEntries() {
        try {
            const data = localStorage.getItem("journalEntries");
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Failed to parse journal entries:", e);
            return [];
        }
    }

    writeEntries(entries) {
        try {
            localStorage.setItem("journalEntries", JSON.stringify(entries));
        } catch (e) {
            console.error("Failed to write journal entries:", e);
        }
    }

    readStreak() {
        try {
            const data = localStorage.getItem("streak");
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Failed to parse streak:", e);
            return 0;
        }
    }

    writeStreak(value) {
        try {
            localStorage.setItem("streak", JSON.stringify(value));
        } catch (e) {
            console.error("Failed to write journal entries:", e);
        }
    }
}

export default new StorageHandler();
