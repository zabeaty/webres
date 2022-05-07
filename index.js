const Crawler = require('crawler');

if(!process.argv[2]) {
    console.log('Usage: %s %s [URL]', process.argv[0], process.argv[1]);
    process.exit(1);
}

const requrestUrl = process.argv[2];

const c = new Crawler({
    callback: function(error, response) {
        if(error) {
            console.log(error)
            process.exit(1);
        } else {
            const urls = response.$('[href], [src]');
            urls.each((idx, url) => {
                const _url = new URL('src' in url.attribs ? url.attribs.src : url.attribs.href, requrestUrl);
                console.log(`[${url.name}] ${_url}`);
            });
        }
    }
});

c.queue(requrestUrl);