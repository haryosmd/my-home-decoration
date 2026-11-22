const { chromium } = require('playwright');
(async () => {
  const [n, prefix, spec, views] = process.argv.slice(2);
  const b = await chromium.launch({ args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1600, height: 1000 } });
  p.on('pageerror', e => console.log('ERR', e.message));
  p.on('console', m => { if (m.type()==='error') console.log('CONSOLE', m.text().slice(0,200)); });
  for (let i = 0; i < +n; i++) {
    await p.goto(`http://127.0.0.1:8765/still.html?view=${i}&spec=${spec||'spec.json'}&views=${views||'views.json'}`);
    await p.waitForFunction(() => document.title === 'done', null, { timeout: 120000 });
    await p.waitForTimeout(300);
    await p.screenshot({ path: `${prefix}${i}.png` });
    console.log('shot', i);
  }
  await b.close();
})();
