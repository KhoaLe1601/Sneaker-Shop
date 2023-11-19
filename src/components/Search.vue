<script>
export default {
    props: {
        modelValue: {type: String, default: ""},
    },
    emits: ['submit', 'update:modelValue'],
    methods: {
        updateModelValue(e) {
            this.$emit('update:modelValue', e.target.value);
        },
        submit() {
            this.$emit('submit');
        },
    },
};
</script>

<template>
    <div class="col-md-6 col-lg-6 col-11 mx-auto my-auto search-box">
        <div class="input-group form-container">
            <input
                type="text"
                class="form-control search-input"
                placeholder="Tìm kiếm trong Sneaker Shop"
                autofocus="autofocus"
                autocomplete="off"
                :value="modelValue"
                @input="updateModelValue"
                @keyup.enter="submit"
                onclick="setDarkBg()"
            />
            <span class="input-group-btn btn-outline-success">
                <button
                    type="button"
                    class="btn btn-search"
                    @click="submit"
                >
                <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </span>
        </div>
    </div>
</template>

<style scoped>
.search-box {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}

.btn.btn-search {
    border-radius: 3px;
    height: 50px;
    background: #fff;
    color: #050d55;
}

.search-input {
    left: -5px;
}
.search-input:focus {
    outline: none;
    box-shadow: none;
}
</style>