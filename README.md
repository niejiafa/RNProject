# Native 集成 RN项目
备注：由于 node_modules 比较大，上传项目将其删除掉了，需要手动 install，进入ReactNative文件夹，命令行输入npm install 安装完成后，项目即可运行起来。项目地址：https://github.com/indexjincieryi/RNProject
## 1：新建iOS 项目
## 2：创建一个文件夹存放 js代码，比如ReactNative
## 3：命令行进入ReactNative，创建package.json 文件，然后进行：npm install(由于网路原因，经常性装不全依赖库，多装几次）
package.json 文件内容：

```
{
"dependencies" : {
"react" : "15.2.0",
"react-native" : "^0.29.0"
},
"private" : true,
"scripts" : {
"start" : "node node_modules/react-native/local-cli/cli.js start"
},
"version" : "0.0.1"
}
```
## 4：回到根目录，创建Podfile 文件
```
platform :ios, ‘7.0’
target :RNProject do
pod 'React', :path => ‘./ReactNative/node_modules/react-native', :subspecs => [
'Core',
'RCTNetwork',
'RCTText',
'RCTWebSocket',
# 添加其他你想在工程中使用的依赖。
]
end
```
## 5：然后进行 pod install
## 6：完成后进行桥接
```
NSURL *jsCodeLocation=[NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                    moduleName: @"RNModuleName"
                                                 initialProperties:nil
                                                     launchOptions:nil];
self.view=rootView;
```
## 7：进入ReactNative,创建index.ios.js,然后 npm start(手动启动)
index.ios.js内容如下

```
'use strict';
import React, { Component } from 'react';
import { StyleSheet , View ,AppRegistry ,Text ,Animated, Easing, Image} from 'react-native';


class RNComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'gray',
        flex:1
    }
});

AppRegistry.registerComponent('RNModuleName',()=> RNComponent);

```

## 7：在 info.plist 里面加上
```
<key>NSAppTransportSecurity</key> <dict> <key>NSExceptionDomains</key> <dict> <key>localhost</key> <dict> <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key> <true/> </dict> </dict> </dict>

```
## 8：运行 xcode项目即可


