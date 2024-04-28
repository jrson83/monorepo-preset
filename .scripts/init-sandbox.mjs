#!/usr/bin/env node
import { resolve } from 'node:path'
import { execa } from 'execa'

const root = process.cwd()

async function init() {
  execa(
    'npx',
    [
      'preset',
      'apply',
      resolve(root, 'packages', 'presets'),
    ],
    { env: { FORCE_COLOR: 'true' } }
  ).stdout?.pipe(process.stdout)
}

init().catch((err) => {
  if (err instanceof Error)
    console.error(`${err.name} - ${err.message}`)
})
