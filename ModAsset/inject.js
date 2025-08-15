if (!KDEventMapGeneric['afterLoadMods']) {
    KDEventMapGeneric['afterLoadMods'] = {}
}

KDEventMapGeneric['afterLoadMods']['kd-structured'] = (async () => {
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
});