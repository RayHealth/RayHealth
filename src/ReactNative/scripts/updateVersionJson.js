const fs = require("fs");
const path = require("path");
const {exec} = require("child_process");

// first two are node bin name and script name
const client = process.argv[2];

//path to the gradle file
const gradlePath = path.join(__dirname, "../android/app/build.gradle");

const gradleString = fs.readFileSync(gradlePath, "utf8");

//the first one is the whole matching string, the second (index 1) is the capture.
const version = gradleString.match(/versionName "([^"]+)"/)[1];

if (version === undefined) {
    console.error('"' + gradlePath + '" has no version inside it!');
    process.exit(1);
}

const gitCommand = `git log -1 HEAD --date=iso-strict --format="{%n  \\"commit\\":\\"https://github.com/stephenkiers/RayHealth/commit/%H\\",%n  \\"build\\":\\"${version}\\",%n  \\"date\\":\\"%aI\\",%n  \\"user\\":\\"%an\\",%n  \\"client\\":\\"${client}\\",%n  \\"email\\":\\"support@rayhealth.com\\"%n}"`;

exec(gitCommand, (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.error("Could not run git command!");
        console.error(gitCommand);
        console.error(stderr);
        return;
    }

    const targetPath = path.join(__dirname, "../build/dist/version.json");

    fs.writeFile(targetPath, stdout, (err) => {
        if (err) {
            console.error('Could not write to "' + targetPath + '"!');
        } else {
            console.log('Overwrote "' + targetPath + '".');
        }
    });
});
