import 'vconsole';
import countdown from '../src/index';

countdown({
	currentTime: new Date('2018-04-14 21:00:00').getTime(),
	timeEnd: (new Date('2018-04-14 22:45:05').getTime()),
	msgPattern: '剩{days}天{hours}时{seconds}秒',
	selector: '#example',
	// beforeCount() {
	// 	console.log('倒计时未开始钩子');
	// },
	// startCount() {
	// 	console.log('倒计时开始钩子');
	// },
	afterCount() {
		console.log('倒计时结束钩子');
	}
});
// countdown({
// 	gmt_end: new Date().getTime() / 1000 + 5000,
//     msgPattern: '剩{days}天{hours}时{seconds}秒',
// 	selector: '#example'
// })
