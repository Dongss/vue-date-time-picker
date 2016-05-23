<template>
    <input type="text" class="v-date-picker-result"
        v-on:click="onInputFocus"
        v-model="dateResult"
    ></input>
    <div class="v-date-picker-input"
        v-bind:style="{ left: inputPosition.left + 'px', right: inputPosition.right + 'px' }"
        v-show="showPiker">
        <input type="date" min="{{minDate}}" max="{{maxDate}}" 
            v-model="datePicked"
        >
        </input>
        <span>{{timePicked}}</span>
        <br />
        <span class="key">Hour</span> <input type="range" max="{{maxHour}}" min="{{minHour}}" step="1" v-model="hourPicked"></input>
        <br />
        <span class="key">Minute</span> <input type="range" max="{{maxMinute}}" min="{{minMinute}}" step="1" v-model="minutePicked"></input>
        <br />
        <span class="key">Second</span> <input type="range" max="{{maxSecond}}" min="{{minSecond}}" step="1" v-model="secondPicked"></input>
        <br />
        <div class="divider"></div>
        <button v-on:click="setNow" v-show="allowNow">Now</button>
        <button v-on:click="setDate(date)">Done</button>
        <div class="divider"></div>
        <button class="close-btn" v-on:click="hidePicker">Cancel</button>
    </div>
</template>

<script>
    export default {
        props: {
            dateResult: {
                type: String,
                default: ''
            },
            allowNow: {
                type: Boolean,
                default: true
            },
            maxDate: {
                type: String,
                default: ''
            },
            minDate: {
                type: String,
                default: '1970-01-01'
            },
            maxHour: {
                type: Number,
                default: 23
            },
            minHour: {
                type: Number,
                default: 0
            },
            maxMinute: {
                type: Number,
                default: 59
            },
            minMinute: {
                type: Number,
                default: 0
            },
            maxSecond: {
                type: Number,
                default: 59
            },
            minSecond: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                showPiker: false,
                datePicked: '',
                hourPicked: 0,
                minutePicked: 0,
                secondPicked: 0,
                inputPosition: {
                    left: 0,
                    right: 0
                }
            };
        },
        computed: {
            date () {
                return this.datePicked + ' ' + this.timePicked;
            },
            timePicked () {
                let hour = this.addZero(this.hourPicked);
                let minute = this.addZero(this.minutePicked);
                let second = this.addZero(this.secondPicked);
                return hour + ':' + minute + ':' + second;
            }
        },
        methods: {
            addZero (val) {
                val = Number(val);
                if (val < 10) {
                    return '0' + val;
                }
                return val;
            },
            onInputFocus (e) {
                this.inputPosition.left = e.target.offsetLeft;
                this.inputPosition.top = e.target.offsetTop;
                this.showPiker = !this.showPiker;
            },
            ifOutOfRange (date, hour, minute, second) {
                if (this.maxDate && date > this.maxDate) {
                    return true;
                }
                if (this.minDate && date < this.minDate) {
                    return true;
                }
                if (this.maxHour && hour > this.maxHour) {
                    return true;
                }
                if (this.minHour && hour < this.minHour) {
                    return true;
                }
                if (this.maxMinute && minute > this.maxMinute) {
                    return true;
                }
                if (this.minMinute && minute < this.maxMinute) {
                    return true;
                }
                if (this.maxSecond && second > this.maxSecond) {
                    return true;
                }
                if (this.minSecond && second < this.minSecond) {
                    return true;
                }
                return false;
            },
            setNow () {
                let now = new Date();
                let _datePicked = now.getFullYear() + '-' + this.addZero(now.getMonth() + 1) + '-' + this.addZero(now.getDate());
                let _hourPicked = this.addZero(now.getHours());
                let _minutePicked = this.addZero(now.getMinutes());
                let _secondPicked = this.addZero(now.getSeconds());

                if (this.ifOutOfRange(_datePicked, _hourPicked, _minutePicked, _secondPicked)) {
                    alert('Out of range !');
                    return false;
                }

                this.datePicked = _datePicked;
                this.hourPicked = _hourPicked;
                this.minutePicked = _minutePicked;
                this.secondPicked = _secondPicked;
            },
            setDate (date) {
                if (date === ' 00:00:00') {
                    alert('Please choose a date');
                    return false;
                } else {
                    this.dateResult = date;
                }
                this.hidePicker();
            },
            hidePicker () {
                this.showPiker = false;
            }
        }
    };
</script>

<style scoped>
    .v-date-picker-result {
        text-align: center;
    }
    .v-date-picker-input {
        position: absolute;
        padding: 5px;
        text-align: center;
        background-color: #F5F5F5;
        width: 220px;
        z-index: 1;

    }
    .v-date-picker-input .divider {
        border-top: 1px solid rgba(34,36,38,.15);
        border-bottom: 1px solid rgba(255,255,255,.1);
        margin: 10px 0;
    }
    .v-date-picker-input .key {
        color: #FFFFFF;
        background-color: #807F7F;
        display: inline-block;
        width: 60px;
        text-align: center;
    }
    .v-date-picker-input .close-btn {
        width: 100%;
    }
</style>
