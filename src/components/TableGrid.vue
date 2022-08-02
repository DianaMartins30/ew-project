<template>
    <div class="p-12">
        <h1 class="text-3xl font-bold underline flex justify-center mb-12 text-blue-400">
            Energy Works Chalenge
        </h1>
        <div class="grid grid-cols-50 gap-1">
            <template v-for="(row, indexRow) in matrix" :key="indexRow">
                <div :class="element.background" class="flex items-center justify-center rounded cursor-pointer"
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
        }
    },

    created() {
        this.populateMatrix();
    },

    methods: {
        populateMatrix() {
            for (var i = 0; i < 50; i++) {
                this.matrix.push([])
                for (var j = 0; j < 50; j++) {
                    this.matrix[i].push({ value: 0, background: "bg-blue-200" });
                }
            }
        },

        increment(indexRow, indexElement) {
            for (let i = 0; i < 50; i++) {
                this.matrix[indexRow][i].value++;
                this.matrix[indexRow][i].background = "bg-yellow-200";

            }
            for (let i = 0; i < 50; i++) {
                if (indexRow != i) {
                    this.matrix[i][indexElement].value++;
                    this.matrix[i][indexElement].background = "bg-yellow-200";
                }

            }

        }

    },
}
</script>