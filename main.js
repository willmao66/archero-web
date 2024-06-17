document.getElementById('connectButton').addEventListener('click', async () => {
    try {
        // 使用 TON Connect SDK
        const ton = new TonConnect({
            manifestUrl: 'https://archero.ttgames.xyz/manifest/archero.json' // 替换为你的manifest URL
        });

        // 请求连接
        const response = await ton.connect({
            permissions: ['account']
        });

        console.log('Connected:', response);
    } catch (error) {
        console.error('Connection failed:', error);
    }
});
