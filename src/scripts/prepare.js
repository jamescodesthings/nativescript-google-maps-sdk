const { exec } = require('child_process');
const semver = require('semver');

function getTnsVersion() {

    try {
        return semver.major(stdout);
    } catch(error) {
        try {
            const regex = /(^\d\.\d\.\d$)/gm;
            const match = regex.exec(stdout);

            if (match && match[0]) {
                return semver.major(match[0]);
            }
        } catch(error) {
            // noop
        }
    }

    console.warn('Could not get Nativescript version from nativescript cli. Assuming version 7+');
    return 7;
}

exec('tns --version', (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.log(`tns --version err: ${err}`);
        return;
    }

    const tnsVersion = getTnsVersion();

    // execute 'tns plugin build' for {N} version > 4. This command builds .aar in platforms/android folder.
    if (tnsVersion >= 4) {
        console.log(`executing 'tns plugin build'`);
        exec('tns plugin build');
    }
});
