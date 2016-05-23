# vue-date-time-picker

date-time picker for Vue

## Demo

[Deom](http://dongss.github.io/vue-date-time-picker/demo/)

## Usage

### Install

`npm install vue-date-time-picker --save`

### Example

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

### Options(props)

* dateResult: type: `String`, default: `''`, the date picked
* allowNow: type: `Boolean`, default: `true`, if show "now" button
* maxDate: type: `String`, default: `''`, example: `'2016-01-01'`
* minDate: type: `String`, default: `''`, example: `'2016-01-01'`
* maxHour: type: `Number`, default: `23`
* minHour: type: `Number`, default: `0`
* maxMinute: type: `Number`, default: `59`
* minMinute: type: `Number`, default: `0`
* maxSecond: type: `Number`, default: `59`
* minSecond: type: `Number`, default: `0`

Options example: 

```
<v-date-picker                 
:date-result.sync="myDate"     
:max-date="'2016-05-01'"       
:min-date="'2016-04-16'"       
:max-hour="10"></v-date-picker>
```
