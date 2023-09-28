import Vue from 'vue'
import BigNumber from 'bignumber.js';
import moment from 'moment';

const filter = {
    moment: (value, formatString) => {
        formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
        return moment(Number.parseInt(new Date(value).getTime())).format(formatString);
    },
    shiftedBy: (val, by) => {
        return val ? new BigNumber(val).shiftedBy(by).toString() : '--';
    },
    hash:(hash)=> {
        return  hash ? hash.substr(0, 6) + '...' + hash.substr(hash.length - 6) : '-';
    },
};

for (let key in filter) {
    Vue.filter(key, filter[key]);
}

export {filter} ;
