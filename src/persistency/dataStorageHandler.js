
class StorageHandler {

    // Generic read method to reduce redundancy
    read(key, defaultValue) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.error(`Failed to parse ${key}:`, e);
            return defaultValue;
        }
    }

    // Generic write method to reduce redundancy
    write(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(`Failed to write ${key}:`, e);
        }
    }

    // Specific methods using the generic ones
    readEntries() {
        return this.read("journalEntries", []);
    }

    writeEntries(entries) {
        this.write("journalEntries", entries);
    }

    readStreak() {
        return this.read("streak", null);
    }

    writeStreak(value) {
        this.write("streak", value);
    }
}

export default new StorageHandler();
