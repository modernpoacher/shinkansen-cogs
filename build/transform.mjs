import debug from 'debug'

import {
  relative,
  join
} from 'node:path'

import {
  readFile,
  writeFile
} from 'node:fs/promises'

import {
  currentDir,
  sourcePath,
  targetPath
} from '#build/paths'

const log = debug('@modernpoacher/cogs/build/transform')

log('`cogs` is awake')

// eslint-disable-next-line no-irregular-whitespace
// \u200b
// ✓ \u2713
// • \u2022

const CSS = /(<style.*>)[ -~"'+-:;,#%{}()/*\n\s\u200b\u2713\u2022]*(<\/style>)/gm // eslint-disable-line no-irregular-whitespace

const SOURCE_PATH = relative(currentDir, sourcePath)
const TARGET_PATH = relative(currentDir, targetPath)

async function getCss () {
  log('getCss')

  const filePath = join(SOURCE_PATH, 'css/preview-head.css')

  return `$1\n${(await readFile(filePath, 'utf8')).trim()}\n$2`.trim()
}

export default async function transform () {
  log('transform')

  const filePath = join(TARGET_PATH, 'preview-head.html')

  return (await writeFile(filePath, (await readFile(filePath, 'utf8')).replace(CSS, await getCss()), 'utf8'))
}
