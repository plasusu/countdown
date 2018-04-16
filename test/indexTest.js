// +----------------------------------------------------------------------
// | countdown
// +----------------------------------------------------------------------
// | HomePage : https://github.com/plasusu/countdown
// +----------------------------------------------------------------------
// | Author: plasusu <zhaobin0511@qq.com>
// +----------------------------------------------------------------------

import test from 'ava';
import {JSDOM} from 'jsdom';
const rewire = require('rewire');
let countdown = rewire('../src/index');

const html = `
    <!DOCTYPE html>
    <html>
    <head></head>
    <body>
        <p class="J_countdown"></p>
    </body>
    </html>
`;
const {window} = new JSDOM(html, {
    runScripts: 'dangerously',
});
const document = window.document;
countdown.__set__({
    document,
});
const Countdown = countdown.__get__('Countdown');

test('test constructor', (t) => {
    t.plan(4);
    const c1 = new Countdown({});
    t.is(Object.keys(c1).length, 10);
    t.is(c1.selector, '.J_countdown');
    t.is(c1.msgPattern, '{days}天{hours}时{minutes}分{seconds}秒{decimal}');
    t.is(c1.showZero, true);
});

test('test init', (t) => {
    t.plan(2);
    const c1 = new Countdown({
        currentTime: new Date().getTime(),
        timeEnd: new Date().getTime() - 1000,
    });
    c1.init();
    t.is(document.querySelector(c1.selector).innerHTML, '');

    const c2 = new Countdown({
        currentTime: new Date().getTime(),
        timeEnd: new Date().getTime() + 1000,
    });
    c2.init();
    t.not(c2.timer, null);
});

test('test isOver', (t) => {
    t.plan(2);
    const c1 = new Countdown({
        currentTime: new Date().getTime(),
        timeEnd: new Date().getTime() - 1000,
    });
    t.true(c1.isOver());

    const c2 = new Countdown({
        currentTime: new Date().getTime(),
        timeEnd: new Date().getTime() + 1000,
    });
    t.false(c2.isOver());
});

test('test updateView', (t) => {
    t.plan(1);

    const c1 = new Countdown({
        currentTime: new Date().getTime(),
        timeEnd: new Date().getTime() + 1000,
    });
    t.is(document.querySelector(c1.selector).innerHTML, '0天0时0分01秒0');
});

test('test overTime', (t) => {
    t.plan(1);

    const c1 = new Countdown({
        currentTime: new Date().getTime(),
        timeEnd: new Date().getTime() + 1000,
    });
    c1.overTime();
    t.is(c1.timer, null);
});

test.cb('test runTimer', (t) => {
    const c1 = new Countdown({
        currentTime: new Date().getTime(),
        timeEnd: new Date().getTime() + 1000,
    });
    const num = 900;
    c1.runTimer();
    setTimeout(() => {
        t.is(c1.distance, num);
        t.end();
    }, 100);
});

test.cb('test runTimer', (t) => {
    const c1 = new Countdown({
        currentTime: new Date().getTime(),
        timeEnd: new Date().getTime() + 1000,
    });
    const num = 1100;
    c1.runTimer();
    setTimeout(() => {
        t.is(c1.distance <= 0, true);
        t.end();
    }, num);
});

test('test export function', (t) => {
    t.plan(1);

    t.notThrows(() => {
        countdown();
    });
});

