class Catch {
    constructor(isLocal = true) {
        this.storage = isLocal ? localStorage : sessionStorage;
    }

    setItem(key: string, value: string) {
        if (typeof value === "object") value = JSON.stringify(value);
        this.storage.setItem(key, value);
    }

    getItem(key: string) {
        try {
            return JSON.parse(this.storage.getItem(key));
        } catch (err) {
            this.storage.getItem(key);
        }
    }

    removeItem(key: string) {
        this.storage.removeItem(key);
    }

    clear() {
        this.storage.clear();
    }

    key(index: string) {
        return this.storage.key(index);
    }

    length() {
        return this.storage.lenght;
    }
}

const localCache = new Catch();
const sessionCache = new Catch(false);

export {localCache, sessionCache};