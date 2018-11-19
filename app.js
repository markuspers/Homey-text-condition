'use strict';

const Homey = require('homey');

class MyApp extends Homey.App {

	onInit() {
		this.log('Condition with text input is running...');
		let isAboveCondition = new Homey.FlowCardCondition('is_above');
		isAboveCondition
			.register()
			.registerRunListener((args, state) => {
				let result = false;
				if (args.droptoken)
				{
					let parsedDropToken = Number(args.droptoken);
					let triggerValue = Number(args["trigger_value"]);
					result = parsedDropToken > triggerValue;
					this.log(parsedDropToken + " > " + triggerValue + " = " + result);
				}
				return Promise.resolve(result);
			})
	}
}

module.exports = MyApp;