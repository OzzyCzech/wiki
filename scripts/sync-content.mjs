#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const target = join(process.cwd(), 'src', 'content', 'docs');
const repo = 'https://github.com/OzzyCzech/wiki.git';

if (existsSync(join(target, '.git'))) {
	console.log('content: pulling latest from wiki');
	execSync('git pull --ff-only', { cwd: target, stdio: 'inherit' });
} else if (existsSync(target)) {
	console.error(`content: ${target} exists but is not a git checkout — aborting`);
	process.exit(1);
} else {
	console.log(`content: cloning wiki into ${target}`);
	execSync(`git clone --depth=1 ${repo} "${target}"`, { stdio: 'inherit' });
}
