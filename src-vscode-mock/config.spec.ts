import { expect } from 'chai';
import { DefaultConfig } from './config';

describe('default config', () => {
	it('read property', () => {
		const config = new DefaultConfig()
		const property: string = config.get('buildOnSave')
		expect(property).to.equal('package')
	})
})