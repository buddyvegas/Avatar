// import svelte from 'rollup-plugin-svelte';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import livereload from 'rollup-plugin-livereload';
// import { terser } from 'rollup-plugin-terser';

// const production = !process.env.ROLLUP_WATCH;

// function serve() {
// 	let server;
	
// 	function toExit() {
// 		if (server) server.kill(0);
// 	}

// 	return {
// 		writeBundle() {
// 			if (server) return;
// 			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
// 				stdio: ['ignore', 'inherit', 'inherit'],
// 				shell: true
// 			});

// 			process.on('SIGTERM', toExit);
// 			process.on('exit', toExit);
// 		}
// 	};
// }

// export default {
// 	input: 'src/main.js',
// 	output: {
// 		sourcemap: true,
// 		format: 'esm',
// 		name: 'Avatar',
// 		file: '../app-react/src/libs/avatar-svelte.js'
// 	},
// 	plugins: [
// 		svelte({
// 			// enable run-time checks when not in production
// 			dev: !production,
// 			// // we'll extract any component CSS out into
// 			// // a separate file - better for performance
// 			// css: css => {
// 			// 	css.write('public/build/bundle.css');
// 			// },
// 		}),

// 		// If you have external dependencies installed from
// 		// npm, you'll most likely need these plugins. In
// 		// some cases you'll need additional configuration -
// 		// consult the documentation for details:
// 		// https://github.com/rollup/plugins/tree/master/packages/commonjs
// 		resolve({
// 			browser: true,
// 			dedupe: ['svelte']
// 		}),
// 		commonjs(),

// 		// In dev mode, call `npm run start` once
// 		// the bundle has been generated
// 		!production && serve(),

// 		// Watch the `public` directory and refresh the
// 		// browser on changes when not in production
// 		!production && livereload('public'),

// 		// If we're building for production (npm run build
// 		// instead of npm run dev), minify
// 		production && terser()
// 	],
// 	watch: {
// 		clearScreen: false
// 	}
// };

// ---

// import svelte from 'rollup-plugin-svelte';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';
// import babel from '@rollup/plugin-babel';

// const pkg = require('./package.json');

// export default {
//     input: 'src/main.js',
//     // input: 'src/Avatar/index.js',
//     output: [
//         {
//           file: pkg.main,
//           format: 'iife',
//           name: 'AfAvatar'
//         },
//       ],
//     plugins: [
//         svelte(),
//         resolve(),
//         commonjs(),
//         // babel({ babelHelpers: 'bundled' }),
//         // terser()
//     ],
// };

// ---
// fonctionne sans terser et en supprimant les commentaires du linter...
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

export default {
	input: 'src/main.js',
	output: {
		format: 'es',
		file: 'dist/index.js',
		plugins: [terser({
			module: true
		})]
	},
	plugins: [
		svelte(),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs()
	],
	watch: {
		clearScreen: false
	}
};
