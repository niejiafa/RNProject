//
//  ViewController.m
//  RNProject
//
//  Created by jincieryi on 16/8/8.
//  Copyright © 2016年 NDEducation. All rights reserved.
//

#import "ViewController.h"

#import "RCTRootView.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    NSURL *jsCodeLocation=[NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"RNModuleName"
                                                 initialProperties:nil
                                                     launchOptions:nil];
    self.view=rootView;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
