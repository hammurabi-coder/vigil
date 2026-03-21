import fs from 'fs'
import path from 'path'

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f)
    let isDirectory = fs.statSync(dirPath).isDirectory()
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f))
  })
}

walkDir('./src', function (filePath) {
  if (filePath.endsWith('.svelte') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8')
    let original = content

    content = content.replace(/nasa/g, 'ora')
    content = content.replace(/Nasa/g, 'Ora')
    content = content.replace(/NASA/g, 'ORA')
    content = content.replace(/cream/g, 'void')
    content = content.replace(/Cream/g, 'Void')
    content = content.replace(/CREAM/g, 'VOID')

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Updated: ${filePath}`)
    }
  }
})

// Also update tailwind.config.js
let twPath = './tailwind.config.js'
let twContent = fs.readFileSync(twPath, 'utf8')
let originalTwContent = twContent
twContent = twContent.replace(/nasa/g, 'ora')
twContent = twContent.replace(/cream/g, 'void')
// We actually need to remove void: colors.void (wait, cream became void. So we might have void: colors.void twice).
// Let's fix tailwind.config.js properly
// It had:
// void: colors.void,
// bg: colors.bg,
// nasa: colors.nasa,
// cream: colors.cream,
twContent = twContent.replace(/ora:\s*colors\.ora,\n\s*void:\s*colors\.void,/g, 'ora: colors.ora,')
if (twContent !== originalTwContent) {
  fs.writeFileSync(twPath, twContent, 'utf8')
  console.log(`Updated tailwind.config.js`)
}

console.log('Done reverting theme colors.')
