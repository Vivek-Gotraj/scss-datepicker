<template>
    <div>
        <date-picker v-model:value="fieldValue" :type="type" :range="range" :format="format" :valueType="valueType"
            :defaultValue="defaultValue" :placeholder="placeholder" :editable="editable" :clearable="clearable"
            :confirm="confirm" :confirmText="confirmText" :multiple="multiple" :disabled="disabled"
            :appendToBody="appendToBody" :inputClass="inputClass" :inputAttr="inputAttr" :popupStyle="popupStyle"
            :popupClass="popupClass" :separator="separator" :use12h="use12h" :prefixClass="prefixClass"
            @change="events.onChange" @open="events.onOpen" @close="events.onClose" @confirm="events.onConfirm"
            @clear="events.onClear" @input-error="events.onInputError" @pick="events.onPick"
            @calendar-change="events.onCalendarChange" @panel-change="events.onPanelChange">

            <template v-if="$slots['icon-calendar']" v-slot:icon-calendar>
                <slot name="icon-calendar">

                </slot>
            </template>
            <template v-if="$slots['icon-clear']" v-slot:icon-clear>
                <slot name="icon-clear">

                </slot>
            </template>
            <template v-if="$slots['input']" v-slot:input>
                <slot name="input">

                </slot>
            </template>
            <template v-if="$slots['header']" v-slot:header="{ emit }">
                <slot name="header" :emit="emit">

                </slot>
            </template>
            <template v-if="$slots['footer']" v-slot:footer="{ emit }">
                <slot name="footer" :emit="emit">

                </slot>
            </template>
            <template v-if="$slots['sidebar']" v-slot:sidebar="{ emit }">
                <slot name="sidebar" :emit="emit">

                </slot>
            </template>
        </date-picker>
    </div>

    <!-- <div>
        <date-picker v-model:value="fieldValue" :type="type" :range="range" :format="format" :valueType="valueType"
            :defaultValue="defaultValue" :placeholder="placeholder" :editable="editable" :clearable="clearable"
            :confirm="confirm" :confirmText="confirmText" :multiple="multiple" :disabled="disabled"
            :appendToBody="appendToBody" :inputClass="inputClass" :popupClass="popupClass" :separator="separator"
            :use12h="use12h" :prefixClass="prefixClass">
        </date-picker>
    </div> -->

    <!-- <div>
        <date-picker v-model:value="fieldValue" :format="format" :type="type" :placeholder="placeholder"
            :defaultValue="defaultValue" :valueType="valueType" :clearable="clearable">
            <template #footer="{ emit }">
                <div style="text-align: center">
                    <button class="mx-btn mx-btn-text" @click="emit(new Date())">
                        Today
                    </button>
                </div>
            </template>
        </date-picker>
    </div> -->

    <!-- <date-picker v-model:value="fieldValue" format="YYYY/MM/DD" type="date" placeholder="Select date"
        valueType="YYYY-MM-DD">
        <template #footer="{ emit }">
            <div style="text-align: center">
                <button class="mx-btn mx-btn-text" @click="emit(new Date())">
                    Today
                </button>
            </div>
        </template>
    </date-picker> -->

    <!-- <div>
        <template v-if="type == 'date'">
            <date-picker v-model:value="fieldValue" format="YYYY-MM-DD" type="date" placeholder="Select date"
                valueType="YYYY-MM-DD">
                <template #footer="{ emit }">
                    <div style="text-align: center">
                        <button class="mx-btn mx-btn-text" @click="emit(new Date())">
                            Today
                        </button>
                    </div>
                </template>
            </date-picker>
        </template>
        <template v-else-if="type == 'datetime'">
            <date-picker v-model:value="fieldValue" format="YYYY-MM-DD HH:mm:ss" type="datetime"
                placeholder="Select datetime" valueType="YYYY-MM-DDTHH:mm:ss">
                <template #footer="{ emit }">
                    <div style="text-align: center">
                        <button class="mx-btn mx-btn-text" @click="emit(new Date())">
                            Today
                        </button>
                    </div>
                </template>
            </date-picker>
        </template>
        <template v-else-if="type == 'Time'">
            <date-picker v-model:value="fieldValue" format="HH:mm:ss" type="time" placeholder="Select time"
                valueType="HH:mm:ss">
                <template #footer="{ emit }">
                    <div style="text-align: center">
                        <button class="mx-btn mx-btn-text" @click="emit(new Date())">
                            Today
                        </button>
                    </div>
                </template>
            </date-picker>
        </template>
    </div> -->
</template>

<!-- <style lang="scss">
@import '../assets/css/Datepicker.scss';
</style> -->

<script src="./Datepicker.js"></script>