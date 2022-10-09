"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsSerializer = void 0;
const lodash_1 = require("lodash");
const querystring_1 = require("querystring");
const encodeFilter = (value, key) => encodeURIComponent(`${key}->${(0, lodash_1.castArray)(value).join('|')}`);
const paramsSerializer = (params) => {
    const encodedParams = (0, lodash_1.mapValues)(params, value => {
        if (!(0, lodash_1.isArray)(value) && !(0, lodash_1.isPlainObject)(value)) {
            return value.toString();
        }
        if ((0, lodash_1.isArray)(value)) {
            return `List(${value.join(',')})`;
        }
        const encodedList = (0, lodash_1.reduce)(value, (res, filterVal, filterKey) => `${res}${res ? ',' : ''}${encodeFilter(filterVal, filterKey)}`, '');
        return `List(${encodedList})`;
    });
    return (0, querystring_1.stringify)(encodedParams, undefined, undefined, {
        encodeURIComponent: uri => uri,
    });
};
exports.paramsSerializer = paramsSerializer;
//# sourceMappingURL=paramsSerializer.js.map