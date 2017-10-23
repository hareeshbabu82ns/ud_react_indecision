# Setup Step-by-Step
- yarn init -y
- yarn global add live-server
- yarn global add babel-cli
- yarn add babel-preset-react babel-preset-env

## running with live-server
live-server public
## compiling jsx using babel
babel src\app.js --out-file=public/scripts/app.js --presets=env,react --watch