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
			return console.log("no ui specified")
		}
		
		await extractTemplates({
			title: 'extract templates',
			from: options.ui,
		})
	},
})
