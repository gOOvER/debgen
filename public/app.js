(function () {
    var button = document.querySelector('button'),
        mirror = document.querySelector('select[name=mirror]'),
        arch = document.querySelector('select[name=arch]'),
        releases = document.querySelector('select[name=releases]'),
        list = document.querySelector('textarea[name=list]'),
        src = document.querySelector('input[name=src]'),
        contrib = document.querySelector('input[name=contrib]'),
        nonfree = document.querySelector('input[name=non-free]'),
        security = document.querySelector('input[name=security]');

    var sourceList = [];

    // Ubuntu releases for proper repository handling
    var ubuntuReleases = [
        'noble', 'mantic', 'lunar', 'jammy', 'impish', 'hirsute', 
        'groovy', 'focal', 'eoan', 'disco', 'cosmic', 'bionic'
    ];

    var getComponents = function () {
        var rel = releases.options[releases.selectedIndex].value;
        var components = ['main'];

        if (contrib.checked) {
            if (ubuntuReleases.includes(rel)) {
                components.push('universe');
            } else {
                components.push('contrib');
            }
        }
        
        if (nonfree.checked) {
            if (ubuntuReleases.includes(rel)) {
                components.push('multiverse');
                components.push('restricted');
            } else {
                components.push('non-free');
                components.push('non-free-firmware');
            }
        }

        return components.join(' ');
    };

    var getArch = function () {
        var value = arch.options[arch.selectedIndex].value;
        return value ? '[arch=' + value + ']' : '';
    };

    var appendSource = function (source) {
        sourceList.push(source.filter(function (element) { return element.length; }).join(' '));
    };

    var getSecurityUrl = function (rel) {
        if (ubuntuReleases.includes(rel)) {
            return 'http://security.ubuntu.com/ubuntu/';
        }
        return 'http://security.debian.org/debian-security/';
    };

    var getSecuritySuite = function (rel) {
        if (ubuntuReleases.includes(rel)) {
            return rel + '-security';
        }
        return rel + '-security';
    };

    var getMirrorUrl = function (rel) {
        var ftp = mirror.options[mirror.selectedIndex].value;
        
        if (ubuntuReleases.includes(rel) && ftp.includes('debian.org')) {
            // Use Ubuntu mirrors for Ubuntu releases
            return 'http://archive.ubuntu.com/ubuntu/';
        }
        
        return ftp;
    };

    var generate = function () {
        var ftp = mirror.options[mirror.selectedIndex].value,
            rel = releases.options[releases.selectedIndex].value;
        
        if ((ftp == "none") || rel == "none") return;

        var comps = getComponents();
        var archString = getArch();
        var mirrorUrl = getMirrorUrl(rel);

        appendSource(['deb', archString, mirrorUrl, rel, comps]);
        if (src.checked) appendSource(['deb-src', archString, mirrorUrl, rel, comps]);

        if (releases.options[releases.selectedIndex].hasAttribute('data-updates')) {
            appendSource(['']);
            var updatesSuite = ubuntuReleases.includes(rel) ? rel + '-updates' : rel + '-updates';
            appendSource(['deb', archString, mirrorUrl, updatesSuite, comps]);
            if (src.checked) appendSource(['deb-src', archString, mirrorUrl, updatesSuite, comps]);
        }

        if (security.checked) {
            appendSource(['']);
            var securityUrl = getSecurityUrl(rel);
            var securitySuite = getSecuritySuite(rel);
            appendSource(['deb', archString, securityUrl, securitySuite, comps]);
            if (src.checked) appendSource(['deb-src', archString, securityUrl, securitySuite, comps]);
        }

        list.value = sourceList.join("\n");
        sourceList = [];
    };

    button.addEventListener('click', generate, false);
    generate();
})();