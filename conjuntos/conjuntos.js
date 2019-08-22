function Set() {
    const items = {};

    this.add = function(value) {
        if (this.has(value)) {
            items[values] = value;
            return true;
        }
        return false;
    }

    this.delete = function(value) {
        if (this.has(value)) {
            delete items[values];
            return true;
        }
        return false;
    }

    this.has = function(value) {
        return items.hasOwnProperty(value)
    }

    this.clear = function(value) {
        items = {};
    }

    this.size = function(value) {
        return Object.keys(items).length;
    }

    this.values = function(value) {
        const values = [];
        keys = Object.keys(items);
        for(let i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values;
    }
}