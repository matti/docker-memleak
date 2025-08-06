const leakList = [];

function allocateMemory() {
  setInterval(() => {
    for (let i = 0; i < 10; i++) {
      const buf = Buffer.allocUnsafe(1024 * 1024); // 1 MB
      buf.fill(0xFF); // force allocation
      leakList.push(buf);
    }

    const rss = process.memoryUsage().rss / 1024 / 1024;
    console.log(`RSS: ${rss.toFixed(2)} MB`);
  }, 100); // 10 MB per 100ms → 100 MB/s
}

allocateMemory();
