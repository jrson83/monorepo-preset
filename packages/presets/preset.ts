interface Options {
  ui: 'preact' | 'react' | 'vue' | undefined
}

export default definePreset<Options>({
	name: 'presets',
	options: {
		ui: undefined
	},
	handler: async({ options }) => {
		
		if (!options.ui) {
			throw new Error(`The preset ui is missing.`)
		}

		await extractTemplates({
			title: 'extract templates',
			templates: "./templates",
			from: options.ui,
		})
	},
})
