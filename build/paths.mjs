import path from 'node:path'

export const currentDir = process.cwd()
export const sourcePath = path.resolve('.storybook')
export const targetPath = path.resolve('.storybook')
export const modulePath = path.join(currentDir, 'node_modules')
