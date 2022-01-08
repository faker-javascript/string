import fakeString from './index.js';
import test from 'ava';

test('fakeString return type to be string', t => {
	t.is(typeof fakeString(), 'string');
});

test('fakeString string length is 10', t => {
	t.is(fakeString(10).length, 10);
});
