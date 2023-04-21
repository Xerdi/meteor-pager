Package.describe({
    name: 'xerdi:pager',
    version: '0.0.3',
    summary: 'Bootstrap pager',
    git: 'https://github.com/Xerdi/meteor-pager.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('2.11.0');
    api.use([
        'ecmascript',
        'reactive-var',
        'blaze-html-templates@2.0.0',
        'xerdi:common-helpers@0.0.3'
    ]);
    api.mainModule('index.js', 'client');
});
