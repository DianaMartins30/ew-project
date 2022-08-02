<template>
    <div class="p-12">
        <h1 class="text-3xl font-bold underline flex justify-center mb-12 text-blue-400">
            Energy Works Challenge
        </h1>
        <div class="grid grid-cols-50 gap-1">
            <template v-for="(row, indexRow) in matrix" :key="indexRow">
                <div :class="element.background" class="flex items-center justify-center rounded cursor-pointer p-1"
                    v-for="(element, indexElement) in row" :key="indexElement"
                    @click="increment(indexRow, indexElement)">
                    {{ element.value }}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            matrix: [],
            numberOfRows: 50,
            numberOfElements: 50
        }
    },

    created() {
        this.populateMatrix();
    },

    methods: {
        populateMatrix() {
            for (var i = 0; i < this.numberOfRows; i++) {
                this.matrix.push([])
                for (var j = 0; j < this.numberOfElements; j++) {
                    this.matrix[i].push({ value: 0, background: "bg-blue-200" });
                }
            }
        },

        perfectSquare(value) {
            let aux = parseInt(Math.sqrt(value));
            return (aux * aux == value);
        },

        isFibonacci(value) {
            return this.perfectSquare(5 * value * value + 4) ||
                this.perfectSquare(5 * value * value - 4);
        },


        increment(indexRow, indexElement) {
            for (let i = 0; i < this.numberOfElements; i++) {
                this.matrix[indexRow][i].value++;
                this.matrix[indexRow][i].background = "transition bg-yellow-200 duration-300";

                if (this.isFibonacci(this.matrix[indexRow][i].value)) {
                    this.matrix[indexRow][i].background = "transition bg-green-200 duration-300";

                } else {
                    this.matrix[indexRow][i].background = "transition bg-yellow-200 duration-300";

                }

            }
            for (let i = 0; i < 50; i++) {
                if (indexRow != i) {
                    this.matrix[i][indexElement].value++;
                    this.matrix[i][indexElement].background = "transition bg-yellow-200 duration-300";

                    if (this.isFibonacci(this.matrix[i][indexElement].value)) {
                        this.matrix[i][indexElement].background = "transition bg-green-200 duration-300";

                    } else {
                        this.matrix[i][indexElement].background = "transition bg-yellow-200 duration-300";

                    }
                }

            }



        },

    },
}
</script>