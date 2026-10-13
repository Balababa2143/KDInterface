// Publishes the kd-structured bundle through an import map so that mods can `import('kd-structured')`.
// This file is executed after kd-structured/bundle.es is registered in KDModFiles (see mod.json fileorder).
;(async () => {
    const modFile = KDModFiles['Game/kd-structured/bundle.es']
    const originalBlob = await (await fetch(modFile)).blob()
    const newBlob = originalBlob.slice(0, originalBlob.size, 'text/javascript')
    const newBlobUri = URL.createObjectURL(newBlob)
    const importMap = {
        imports: {
            'kd-structured': newBlobUri
        }
    }

    const injectPoint = document.createElement('script')
    injectPoint.type = 'importmap'
    injectPoint.innerHTML = JSON.stringify(importMap)
    document.head.prepend(injectPoint)
    console.log('kd-structured ready')
})()