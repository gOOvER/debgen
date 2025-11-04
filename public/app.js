(function () {
    var button = document.querySelector('.btn-generate'),
        mirror = document.querySelector('#mirror-select'),
        arch = document.querySelector('#arch-select'),
        releases = document.querySelector('#releases-select'),
        format = document.querySelector('#format-select'),
        list = document.querySelector('#output-textarea'),
        src = document.querySelector('#src-check'),
        contrib = document.querySelector('#contrib-check'),
        nonfree = document.querySelector('#nonfree-check'),
        security = document.querySelector('#security-check'),
        backports = document.querySelector('#backports-check'),
        proposed = document.querySelector('#proposed-check');

    var sourceList = [];

    // Ubuntu releases for proper repository handling (LTS only)
    var ubuntuReleases = [
        'noble', 'jammy', 'focal'
    ];

    // Ubuntu 24.04+ releases that support .sources format
    var modernUbuntuReleases = ['noble'];

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

        return components;
    };

    var getArch = function () {
        var value = arch.options[arch.selectedIndex].value;
        return value ? value : '';
    };

    var appendSource = function (source) {
        if (Array.isArray(source)) {
            sourceList.push(source.filter(function (element) { return element.length; }).join(' '));
        } else {
            sourceList.push(source);
        }
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

    var generateLegacyFormat = function (rel, mirrorUrl, comps, archString) {
        // Traditional sources.list format
        appendSource(['deb', archString, mirrorUrl, rel, comps.join(' ')]);
        if (src.checked) appendSource(['deb-src', archString, mirrorUrl, rel, comps.join(' ')]);

        if (releases.options[releases.selectedIndex].hasAttribute('data-updates')) {
            appendSource(['']);
            var updatesSuite = rel + '-updates';
            appendSource(['deb', archString, mirrorUrl, updatesSuite, comps.join(' ')]);
            if (src.checked) appendSource(['deb-src', archString, mirrorUrl, updatesSuite, comps.join(' ')]);
        }

        if (backports.checked && ubuntuReleases.includes(rel)) {
            appendSource(['']);
            appendSource(['deb', archString, mirrorUrl, rel + '-backports', comps.join(' ')]);
            if (src.checked) appendSource(['deb-src', archString, mirrorUrl, rel + '-backports', comps.join(' ')]);
        }

        if (proposed.checked && ubuntuReleases.includes(rel)) {
            appendSource(['']);
            appendSource(['deb', archString, mirrorUrl, rel + '-proposed', comps.join(' ')]);
            if (src.checked) appendSource(['deb-src', archString, mirrorUrl, rel + '-proposed', comps.join(' ')]);
        }

        if (security.checked) {
            appendSource(['']);
            var securityUrl = getSecurityUrl(rel);
            var securitySuite = getSecuritySuite(rel);
            appendSource(['deb', archString, securityUrl, securitySuite, comps.join(' ')]);
            if (src.checked) appendSource(['deb-src', archString, securityUrl, securitySuite, comps.join(' ')]);
        }
    };

    var generateDeb822Format = function (rel, mirrorUrl, comps, archString) {
        // Modern .sources format (DEB822)
        var types = src.checked ? 'deb deb-src' : 'deb';
        var suites = [rel];
        
        if (releases.options[releases.selectedIndex].hasAttribute('data-updates')) {
            suites.push(rel + '-updates');
        }
        
        if (backports.checked && ubuntuReleases.includes(rel)) {
            suites.push(rel + '-backports');
        }
        
        if (proposed.checked && ubuntuReleases.includes(rel)) {
            suites.push(rel + '-proposed');
        }

        // Main repository section
        appendSource('# Ubuntu Official Repository');
        appendSource('# File: /etc/apt/sources.list.d/ubuntu.sources');
        appendSource('Types: ' + types);
        appendSource('URIs: ' + mirrorUrl);
        appendSource('Suites: ' + suites.join(' '));
        appendSource('Components: ' + comps.join(' '));
        if (archString) {
            appendSource('Architectures: ' + archString);
        }
        appendSource('Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg');

        // Security repository section
        if (security.checked) {
            appendSource('');
            appendSource('# Ubuntu Security Repository');
            appendSource('Types: ' + types);
            appendSource('URIs: ' + getSecurityUrl(rel));
            appendSource('Suites: ' + getSecuritySuite(rel));
            appendSource('Components: ' + comps.join(' '));
            if (archString) {
                appendSource('Architectures: ' + archString);
            }
            appendSource('Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg');
        }
    };

    var updateFormatOptions = function () {
        var rel = releases.options[releases.selectedIndex].value;
        var isModernUbuntu = modernUbuntuReleases.includes(rel);
        
        // Enable/disable .sources format based on Ubuntu version
        format.options[1].disabled = !ubuntuReleases.includes(rel);
        
        // Auto-select appropriate format
        if (isModernUbuntu && format.selectedIndex === 0) {
            // Suggest modern format for Ubuntu 24.04+
            format.selectedIndex = 1;
        } else if (!ubuntuReleases.includes(rel) && format.selectedIndex === 1) {
            // Force legacy format for Debian
            format.selectedIndex = 0;
        }
        
        // Update proposed checkbox visibility
        var proposedItem = proposed.parentNode;
        proposedItem.style.display = ubuntuReleases.includes(rel) ? 'flex' : 'none';
        
        // Update format option text
        if (ubuntuReleases.includes(rel)) {
            format.options[1].text = 'Modern .sources (Ubuntu 24.04+)';
        } else {
            format.options[1].text = 'Modern .sources (Ubuntu only)';
        }
    };

    var generate = function () {
        var ftp = mirror.options[mirror.selectedIndex].value,
            rel = releases.options[releases.selectedIndex].value;
        
        if ((ftp == "none") || rel == "none") return;

        var comps = getComponents();
        var archString = getArch();
        var mirrorUrl = getMirrorUrl(rel);
        var useModernFormat = format.selectedIndex === 1;

        // Clear previous results
        sourceList = [];

        if (useModernFormat && ubuntuReleases.includes(rel)) {
            generateDeb822Format(rel, mirrorUrl, comps, archString);
        } else {
            generateLegacyFormat(rel, mirrorUrl, comps, archString);
        }

        list.value = sourceList.join("\n");
    };

    // Event listeners
    button.addEventListener('click', generate, false);
    releases.addEventListener('change', function() {
        updateFormatOptions();
        generate();
    }, false);
    format.addEventListener('change', generate, false);
    
    // Initialize
    updateFormatOptions();
    generate();
})();