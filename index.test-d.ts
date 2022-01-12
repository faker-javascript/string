import {expectType} from 'tsd';
import string from './index.js';

expectType<string>(string());
expectType<string>(string({length: -1}));
expectType<string>(string({length: 10}));
expectType<string>(string({length: 10, keyspace: '0123456789'}));
