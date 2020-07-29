const Ray = function() {
    return {
        length: 0,

        push: function (value) {
            this[this.length] = value;
            this.length ++
            
        },

        pop: function () {
            const lastIndex = this.length - 1;
            const toBeRemoved = this[lastIndex];
            this.length --;
            delete this[lastIndex]; /*this[this.length];*/ 
            return toBeRemoved;
        },

        includes: function (value) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === value) {
                    return true 
                }
            }
            return false;
        },

        indexOf: function (value) {
            for (let i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return this[this.length] 
            } else {
                return -1
            }
        }


        },

        shift: function () {
            const removedElement = this[0];
            for(let i = 0; i < this.length - 1 ; i++) {
                //pushes all elements but the first to a key one lower
                this[i] = this[i + 1]//pushes up 
            }
            delete this[this.length - 1];
            this.length --;
            return removedElement; 
        },

        unshift: function (value) {
            this[this.length] = value
            this.length ++
            this[0] = value
            //pushes down
            this[i] = this[i - 1]
            
            

        },
    }
    return Ray;
}


module.exports = Ray
