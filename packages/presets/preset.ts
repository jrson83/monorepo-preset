interface Options {
  ui: 'preact' | 'react' | 'vue'
}

export default definePreset<Options>({
	name: 'presets',
	options: {
		ui: 'react'
	},
	handler: async({ options }) => {
		
		await extractTemplates({
			title: 'extract templates',
			from: options.ui,
		})
	},
})
