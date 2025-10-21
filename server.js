const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // 处理根路径
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    // 获取文件扩展名
    const extname = path.extname(filePath);
    let contentType = 'text/html';

    // 根据扩展名设置Content-Type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
        case '.pdf':
            contentType = 'application/pdf';
            break;
    }

    // 读取文件
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1><p>The requested file was not found.</p>');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 Server Error</h1><p>Internal server error.</p>');
                console.error('Server Error:', err);
            }
        } else {
            // 成功返回文件内容
            res.writeHead(200, {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*'  // 允许跨域访问
            });

            // 对于非文本文件，不要使用utf8编码
            if (contentType.startsWith('image/') || contentType === 'application/pdf') {
                res.end(content);
            } else {
                res.end(content, 'utf8');
            }
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Personal photo feature is now ready for testing!');
});
