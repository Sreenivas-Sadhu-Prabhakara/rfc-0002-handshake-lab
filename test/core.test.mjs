import test from 'node:test';
import assert from 'node:assert/strict';
import { handshake } from '../core.mjs';
test('success requires verification',()=>assert.equal(handshake(2,5,'success',1000).at(-1).state,'ESTABLISHED'));
test('higher host ID wins collision in either orientation',()=>{ for(const [a,b] of [[2,5],[5,2]]) assert.match(handshake(a,b,'collision',1000)[2].message,/Higher ID 5/); });
test('timeout disconnects and enters error state',()=>{ const x=handshake(1,2,'timeout',700).at(-1); assert.equal(x.state,'ERROR'); assert.match(x.message,/700 ms/); assert.match(x.message,/disconnect/); });
test('unexpected response is an error',()=>assert.equal(handshake(1,2,'unexpected',100).at(-1).state,'ERROR'));
test('invalid IDs and scenario rejected',()=>{ assert.throws(()=>handshake(2,2,'success',100)); assert.throws(()=>handshake(-1,2,'success',100)); assert.throws(()=>handshake(1,2,'other',100)); assert.throws(()=>handshake(1,2,'success',NaN)); });
