Package.describe({
    name: 'xerdi:pager',
    version: '0.0.2',
    summary: 'Bootstrap pager',
    git: 'https://github.com/Xerdi/meteor-pager.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('2.8.0');
    api.use([
        'ecmascript',
        'reactive-var',
        'blaze-html-templates@1.2.1',
        'xerdi:common-helpers@0.0.1'
    ]);
    api.mainModule('index.js', 'client');
});
