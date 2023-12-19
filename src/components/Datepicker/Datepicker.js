import DatePicker from 'vue-datepicker-next';
//import 'vue-datepicker-next/index.css';

import { ref, watch, computed } from "vue";

export default {

    emits: ['update:modelValue', 'change', 'open', 'close', 'confirm', 'clear', 'input-error', 'pick', 'calendar-change', 'panel-change'],

    components: {
        DatePicker,
        // SlateInput,
        // SlateInputNumber,
        // SlateInputIcon,
        // SlateInputGroup,
        // SlateInputGroupAddon
    },

    props: {
        modelValue: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'date'
        },
        range: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'YYYY-MM-DD',
        },
        valueType: {
            type: String,
            default: 'date'
        },
        defaultValue: {
            type: Date,
            default: new Date()
        },
        placeholder: {
            type: String,
            default: ''
        },
        editable: {
            type: Boolean,
            default: true
        },
        clearable: {
            type: Boolean,
            default: true
        },
        confirm: {
            type: Boolean,
            default: false
        },
        confirmText: {
            type: String,
            default: 'OK'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        appendToBody: {
            type: Boolean,
            default: true
        },
        inputClass: {
            type: String,
            default: 'mx-input'
        },
        inputAttr: {
            type: Object,
            default: null
        },
        popupStyle: {
            type: Object,
            default: null
        },
        popupClass: {
            type: String,
            default: null
        },
        separator: {
            type: String,
            default: '~'
        },
        use12h: {
            type: Boolean,
            default: false
        },
        prefixClass: {
            type: String,
            default: 'mx'
        },
    },
    setup(props, { emit }) {
        let events = {
            onChange(date, type) {
                emit('change', date, type);
            },
            onOpen(event) {
                emit('open', event);
            },
            onClose() {
                emit('close');
            },
            onConfirm(date) {
                emit('confirm', date);
            },
            onClear() {
                emit('clear');
            },
            onInputError(text) {
                emit('input-error', text);
            },
            onPick(date) {
                emit('pick', date);
            },
            onCalendarChange(date) {
                emit('calendar-change', date);
            },
            onPanelChange(type, oldType) {
                emit('panel-change', type, oldType);
            }
        };

        const fieldValue = ref(props.modelValue);

        // watch(() => props.modelValue, (newValue) => {
        //     fieldValue.value = newValue;
        //     updateModelValue(newValue);
        // }, { immediate: true });

        watch(() => fieldValue.value, (newValue) => {
            updateModelValue(newValue);
        }, { immediate: true });

        function updateModelValue(value) {
            emit('update:modelValue', value);
        }

        let availableEvents = ['change', 'open', 'close', 'confirm', 'clear', 'input-error', 'pick', 'calendar-change', 'panel-change'];

        return {
            fieldValue,
            events, availableEvents
        };
    }
}