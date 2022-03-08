# Wdio-Appium-Mocha
Automation Mobile using Webdriver.io
 
## Requirement 
- Node JS (https://nodejs.org/en/download/)
- Appium Server (npm install -g appium) / (https://github.com/appium/appium-desktop/releases/tag/v1.22.2)
- IDE Editor (VSCode / Intelij
- Android Studio / SDK
- JDK_8

## Prerequisites
- Instal NodeJs and NPM
- Install android studio / SDK Android
- Install Appium Server, and configure Android_Home and Java_Home.
Config Appium Desktop : 
     1. Android Home = /Users/{username}/Library/Android/sdk
     2. JAVA_HOME = /usr/bin/java
     
Config Appium Console :

  1. Open terminal
```bash
open -e ~/.bash_profile
```

  2. Copas and edit (change {username} with username in your pc)


```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_192.jdk/Contents/Home
export ANDROID_HOME=/Users/<username>/Library/Android/sdk
export PATH=$/Library/Java/JavaVirtualMachines/jdk1.8.0_192.jdk/Contents/Home/
bin:$PATH
export PATH="/Users/ <username> /Library/Android/sdk/platform-tools":$PATH
```

and save it.

   3. Restart bash profile
```bash
source ~/.bash_profile
```

Notes : If you are using oh-my-zsh, and always need restart .zsc after reboot, run this command :

```bash
if [ -f ~/.bash_profile ]; then
  . ~/.bash_profile
fi
```


## Run the Test :

- Start appium server using desktop / console. 
- Run command :
```bash
npm run android
```
