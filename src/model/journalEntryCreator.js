import JournalEntry from "./journalEntry.js";

class JournalEntryCreator {

    createJournalEntry(title, description) {

        return new JournalEntry(title, description);
    }
}