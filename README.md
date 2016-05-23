# vue-date-time-picker

date-time picker for Vue

## Demo

[Deom](http://dongss.github.io/vue-date-time-picker/demo/)

## Usage

Install:

`npm install vue-date-time-picker --save`

Example:

```
<template>
    <div>
        Choose Date：
        <v-date-picker
        :date-result.sync="myDate"></v-date-picker>
    </div>
    <div>
        Date: {{myDate || 'No date yet'}}
    </div>
</template>

<script>                                                                 
    import VDatePicker from 'vue-date-time-picker/src/date_picker.vue';

    export default {
        data () {
            return {
                myDate: ''
            };
        },
        components: { VDatePicker }
    };
</script>

```
