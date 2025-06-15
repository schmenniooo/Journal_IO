
class StorageHandler {

    read(accessor) {
        try {
            const data = localStorage.getItem(accessor);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error(`Failed to parse ${accessor}:`, e);
            return [];
        }
    }

    write(accessor, data) {
        try {
            localStorage.setItem(accessor, JSON.stringify(data));
        } catch (e) {
            console.error(`Failed to write ${accessor}:`, e);
        }
    }
}

export default new StorageHandler();
