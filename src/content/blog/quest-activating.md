---
title: Meta Quest 3 激活流程
pubDatetime: 2026-03-07T10:00:00+08:00
modDatetime: 2026-03-19T06:46:47+08:00
description: 激活 Meta Quest 的方法
tag: [try, vr]
---

新买了一个 Meta Quest 3，但是网上都说激活很麻烦，这里简单说下

---

## 路由器透明代理

这个办法比较麻烦，我自己是用的 OpenWrt + Nikki 做的旁路由进行的透明代理

## 手机热点

可以用一张国外流量卡开热点给 Quest

有 ESIM 支持的话，直接下载一些免费漫游的流量卡完成激活更简单，没有的话也有一些香港的 SIM 卡比较好买到

## Windows 电脑热点

在 Windows 电脑上挂好梯子，开启 TUN 再打开热点的话，流量会从梯子出去

## 局域网共享 VPN

在代理软件里开启局域网访问后，可以在 Quest 里连接 Wi-Fi 时设置代理服务器进去，主机是你共享设备的 IP，端口是设置的代理软件的端口

---

## 手动软件更新

首先挂好代理

使用 Chrome、Opera 和 Edge 等基于 Chromium 的浏览器打开 Meta 官方的软件更新页面

链接：[https://www.meta.com/zh-cn/help/quest/software_update/](https://www.meta.com/zh-cn/help/quest/software_update/)

选择自己的机型，然后根据屏幕操作进行

建议使用一根至少 USB3.0 的线缆连接，不然会很慢

这个操作是在系统浏览器里下下载好系统更新包并刷入 Quest 中，可能可以部分解决 Quest 上更新巨慢的问题

如果你懂些东西，你可以 F12 获取下载链接手动使用多线程下载器下载下来并使用 `adb sideload` 刷入 Quest

---

## Meta 账号和 App

额，其实账号方面我想不到什么难点，全程挂代理操作就好

如果手机 App 无法绑定，那就重置下设备吧，开机按住 `电源键` + `音量-`，建议在 logo 显示后松开电源键，然后使用 `音量+-` 选择 `Factory reset` 即可
