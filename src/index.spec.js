import {
    transformFileSync
} from 'babel-core'

import path from 'path'


const pluginPath = __dirname

const babelOptions = {
    plugins: [pluginPath]
}

const emptyOptions = {}

test('__dirname', () => {

    const dirname_path = path.join(__dirname, '../test_folder/dirname.js')

    const pluginRes = transformFileSync(dirname_path, babelOptions).code
    const originRes = transformFileSync(dirname_path, emptyOptions).code

    const expectRes = originRes.replace('__dirname', `"${path.dirname(dirname_path)}"`)
    expect(pluginRes).toBe(expectRes)

})

test('__dirname_string', () => {

    const dirname_path = path.join(__dirname, '../test_folder/dirname_string.js')

    const pluginRes = transformFileSync(dirname_path, babelOptions).code
    const originRes = transformFileSync(dirname_path, emptyOptions).code

    const expectRes = originRes
    expect(pluginRes).toBe(expectRes)

})

test('__filename', () => {

    const filename_path = path.join(__dirname, '../test_folder/filename.js')

    const pluginRes = transformFileSync(filename_path, babelOptions).code
    const originRes = transformFileSync(filename_path, emptyOptions).code

    const expectRes = originRes.replace('__filename', `"${filename_path}"`)
    expect(pluginRes).toBe(expectRes)

})

test('__filename_string', () => {

    const filename_path = path.join(__dirname, '../test_folder/filename_string.js')

    const pluginRes = transformFileSync(filename_path, babelOptions).code
    const originRes = transformFileSync(filename_path, emptyOptions).code

    const expectRes = originRes
    expect(pluginRes).toBe(expectRes)

})
