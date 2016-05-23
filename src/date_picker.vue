<template>
    <input type="text" class="v-date-picker-result"
        v-on:click="onInputFocus"
        v-model="dateResult"
    ></input>
    <div class="v-date-picker-input"
        v-bind:style="{ left: inputPosition.left + 'px', right: inputPosition.right + 'px' }"
        v-show="showPiker">
        <input type="date" min="1970-01-01" 
            v-model="datePicked"
        >
        </input>
        <span>{{timePicked}}</span>
        <br />
        <span class="key">Hour</span> <input type="range" max="24" min="0" step="1" v-model="hourPicked"></input>
        <br />
        <span class="key">Minute</span> <input type="range" max="60" min="0" step="1" v-model="minutePicked"></input>
        <br />
        <span class="key">Second</span> <input type="range" max="60" min="0" step="1" v-model="secondPicked"></input>
        <br />
        <div class="divider"></div>
        <button v-on:click="setNow">Now</button>
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
            setNow () {
                let now = new Date();
                this.datePicked = now.getFullYear() + '-' + this.addZero(now.getMonth() + 1) + '-' + this.addZero(now.getDate());
                this.hourPicked = this.addZero(now.getHours());
                this.minutePicked = this.addZero(now.getMinutes());
                this.secondPicked = this.addZero(now.getSeconds());
            },
            setDate (date) {
                if (date === ' 00:00:00') {
                    this.setNow();
                    this.dateResult = this.date;
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
