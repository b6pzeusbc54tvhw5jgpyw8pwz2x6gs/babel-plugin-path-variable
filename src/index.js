import nodePath from 'path'

export default function ({types: t}) {
    return {
        visitor: {
            Identifier(path, state) {
                if (path.node.name === '__filename') {
                    let filename = state.file.opts.filename
                    path.replaceWith(t.stringLiteral(filename))
                }
                if (path.node.name === '__dirname') {
                    let dirname = nodePath.dirname(state.file.opts.filename, '../')
                    path.replaceWith(t.stringLiteral(dirname))
                }
            }
        }
    }
}
