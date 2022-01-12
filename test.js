import test from 'ava';
import string from './index.js';

test('string return type to be string', t => {
    t.is(typeof string(), 'string');
});

test('string length is 10', t => {
    t.is(string({length: 10}).length, 10);
});

test('string length is -1', t => {
    t.is(string({length: -1}).length, 1);
});

test('string length is 10 with keyspace 0123456789', t => {
    t.is(string({length: 10, keyspace: '0123456789'}).length, 10);
});
