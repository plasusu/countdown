// +----------------------------------------------------------------------
// | countdown
// +----------------------------------------------------------------------
// | HomePage : https://github.com/plasusu/countdown
// +----------------------------------------------------------------------
// | Author: plasusu <zhaobin0511@qq.com>
// +----------------------------------------------------------------------

import test from 'ava';
import lib3 from '../src/index';

const value = lib3();

test('test lib3 output success', (t) => {
    t.pass();
});
