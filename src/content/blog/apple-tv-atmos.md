---
title: Apple TV 输出杜比全景声
pubDatetime: 2026-03-16T22:11:55+08:00
slug: apple-tv-atmos
description: Apple TV 播放 Dolby Atmos 的坑
tags: [try, apple-tv]
---

先说结论，需要 _Dolby Digital Plus (EAC3) with Atmos_ 格式的音频

## 需求

之前一直用的是电视自带的扬声器在播放视频，没有怎么在意过全景声什么的东西，最近入了一套廉价全景声设备，然后发现输出的音频清一色的 LPCM 并且不带有全景声数据

## 实现

网上查了下，得到一个惊天大霹雳 —— Apple TV 不支持音频直通输出

不过还是有一丝希望的，首先 Apple Music 是有空间音频音乐的，试了下是可以正确触发 Dolby Atmos 效果的。简单看了下 Apple Music 用的是 EAC3 格式的全景声音频，于是尝试用 Infuse 播了下一份带有 EAC3 全景声格式的影片，确实就可以显示 Dolby Atmos 了......

## TrueHD

问题是我还有一些 TrueHD 格式的全景声影片，但 Apple TV 是不支持解码它的全景声的，也没法直通到功放里。搜到的除了碟机以外能直通输出所有音频格式的就是 NVIDIA Shield TV 了，国内贩子卖一两千......

想到的一个办法是用 truehdd 解码成 atmos 母版再用 Dolby Media Encoder 重新编码为 EAC3 格式的全景声音频，不过我没成功(投降)

至少 Infuse 还能解码到能听吧 :(
