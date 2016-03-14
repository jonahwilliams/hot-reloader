import babel from 'rollup-plugin-babel';

export default {
  entry: './hot/Editor.js',
  plugins: [ babel() ],
  format: 'iife',
  moduleName: 'Editor',
  dest: './hot/EditorCompiled.js'
};
