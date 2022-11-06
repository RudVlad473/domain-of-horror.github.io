const box = {
    locked: true,
    unlock() {
        this.locked = false
    },

    lock() {
        this.locked = true
    },
    _content: [],
    get content() {
        if(this.locked) throw new Error("Locked!")
        return this._content
    },
    
}

function withBoxUnlocked(box, callback) {
    const wasLocked = box.locked
    try {        
        box.unlock()
        callback(box.content)  
    } finally {
        if(!wasLocked) box.lock()
    }
}

withBoxUnlocked(box, (box) => {
    throw new Error("Gotcha")
}
)