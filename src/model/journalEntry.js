
class JournalEntry{

    constructor(title, description) {
        this.title = title;
        this.content = description;
    }

    getTitle(){
        return this.title;
    }

    getContent(){
        return this.content;
    }
}

export default JournalEntry;